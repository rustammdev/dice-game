// btns
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// img dice
const imgDice = document.querySelector('.dice')

// players
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

// players current value
const current0 = document.querySelector('#current--0')
const current1 = document.querySelector('#current--1')

// players score
// hold btn bosilgandagi qiymat
const score0 = document.querySelector('#score--0')
const score1 = document.querySelector('#score--1')

// modal
const modal = document.querySelector('#overlay')

// winner
const winnerPlayer = document.querySelector('#winner')

// restart btn
const btnReset = document.querySelector('#restartGame')

// btn roll dice
btnRoll.addEventListener('click', () => {
    let rand = randomImg()
    changeActive(rand);

    if (activPlayer(player0)){
        current1.textContent = 0
        let cr0 = Number(current0.textContent)
        if (!(rand == 1)){
            current0.textContent  = cr0 + rand
        }
    }else {
        current0.textContent = 0
        let cr1 = Number(current1.textContent)
        if (!(rand == 1)){
            current1.textContent  = cr1 + rand
        }
    }
})

// btn hold
btnHold.addEventListener('click', () => {
    let cr0 = Number(current0.textContent)
    let cr1 = Number(current1.textContent)
    let sc0 = Number(score0.textContent)
    let sc1 = Number(score1.textContent)
    
    if (activPlayer(player0)){
        score0.textContent = cr0 + sc0
    }else {
        score1.textContent = cr1 + sc1
    }
    gameOver(Number(score0.textContent), Number(score1.textContent));
    current1.textContent = 0
    current0.textContent = 0
    changeActive(1)

})

// restart game
btnReset.addEventListener('click', () => {
    restart();
})

// new game
btnNew.addEventListener('click', () => {
    restart();
})

// random img
function randomImg() {
    const dice = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png']

    let rn = dice[Math.floor(Math.random() * dice.length)]
    imgDice.setAttribute('src', `${rn}`)

    return dice.indexOf(rn) + 1
}

// active palayer
function activPlayer(param0) { 
    return Array.from(param0.classList).includes('player--active');
}

// change activ player
function changeActive(params) {
    if (params == 1){
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')
    }
}

// game over
function gameOver(param1, parma2) {
    if (param1 >= 30) {
        winnerPlayer.textContent = 'Player 1'
    }else {   
        winnerPlayer.textContent = 'Player 2'
    }
    if (param1 >= 100 || parma2 >= 100){
        btnHold.disabled = true;
        btnRoll.disabled = true;

        modal.classList.remove('hidden')
    }
}

// restart game
function restart() {
    current0.textContent = 0
    current1.textContent = 0

    score0.textContent = 0
    score1.textContent = 0

    modal.classList.add('hidden')
}