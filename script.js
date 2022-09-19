'use strict';

const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const current0 = document.querySelector('#current--0')
const current1 = document.querySelector('#current--1')
const score0 = document.querySelector('#score--0')
const score1 = document.querySelector('#score--1')

const dice = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')

let playing = true;
let currentScore = 0;
let activePlayer = 0;
let activeScore = 0;
let mainScore = [0, 0]
const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        currentScore = 0
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')
}

dice.classList.add('hidden')
btnRoll.addEventListener('click', function() {
    if (playing) {
    const roll = Math.trunc(Math.random() * 6) + 1
    console.log(roll)
    dice.src = `Images/dice-${roll}.png`
    dice.classList.remove('hidden')
    if (roll !== 1) {
        currentScore += roll
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    } else {
        switchPlayer();
    }
}
})

btnHold.addEventListener('click', function() {
    if (playing) {
    // writing into a score
    mainScore[activePlayer] += currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = mainScore[activePlayer]
    // checking for win
    if (mainScore[activePlayer] >= 15) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        playing = false
        dice.classList.add('hidden')
    } else {
        switchPlayer()
    }
    }
})

btnNew.addEventListener('click', function() {
    current0.textContent = 0;
    current1.textContent = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    currentScore = 0;
    activeScore = 0;
    activePlayer = 0;
    player0.classList.add('player--active')
    playing = true
    mainScore = [0, 0]
})