'use strict';

const dice = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
let current0 = document.querySelector('#current--0').textContent
const btnHold = document.querySelector('.btn--hold')
const score0 = document.querySelector('#score--0')

dice.classList.add('hidden')
btnRoll.addEventListener('click', function() {
    const roll = Math.trunc(Math.random() * 6) + 1
    console.log(roll)
    dice.src = `Images/dice-${roll}.png`
    dice.classList.remove('hidden')
    if (roll > 1) {
        current0 = +current0 + roll
    } else {
        current0 = 0
    }
})

btnHold.addEventListener('click', function() {
    if (current0 > 0) {
        score0.textContent = current0
    }
})