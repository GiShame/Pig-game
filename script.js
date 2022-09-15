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

let currentScore = 0;
let activePlayer = 0;
let activeScore = 0;
const mainScore = [0, 0]
const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        currentScore = 0
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')
}

dice.classList.add('hidden')
btnRoll.addEventListener('click', function() {
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
})

btnHold.addEventListener('click', function() {
    mainScore[activePlayer] += currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = mainScore[activePlayer]
    switchPlayer();
})