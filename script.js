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


// btn roll dice
btnRoll.addEventListener('click', () => {
    let rand = randomImg()
    changeActive(rand);


    if (activPlayer(player0)){
        current1.textContent = 0
        let cr0 = Number(current0.textContent)
        current0.textContent  = cr0 + rand
    }else {
        current0.textContent = 0
        let cr1 = Number(current1.textContent)
        current1.textContent  = cr1 + rand
    }
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