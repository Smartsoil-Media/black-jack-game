let cards =[]
let sum = 0
let wins = 0
let losses = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let winnerMsg = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")
let winsEl = document.getElementById("wins")
let lossesEl = document.getElementById("losses")
let yourHoldEl = document.getElementById("yourHodl")
let winnerMsgEl = document.getElementById("winners-msg")

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random()* 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards " 
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " - "
    }

    
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "HIT or HODL?"
    } else if (sum === 21) { 
        message = "Wohoo! That's Black-Jack"
        hasBlackJack = true
    } else { 
        message = "BUST!!"
    }
    messageEl.textContent = message

}

function newCard() {
    console.log('drawing a new card form the deck')
    let card = getRandomCard ()
    sum += card   
    cards.push(card)
    renderGame() 
}

let casinosCardsEl = document.getElementById("CasinosCards")
function dealToDealer () {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = + firstCard + secondCard
    displayCards = sum
}

function revealCards() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = + firstCard + secondCard
    displayCards = sum
    casinosCardsEl.innerHTML = displayCards
}

function determineWinner() {
    let winnerMsgEl = document.getElementById("winners-msg")
    let yourCards = document.getElementById("yourHodl")
    let CasinosSum = document.getElementById("CasinosCards")
}


 

let hodlEl = document.getElementById("yourHodl")
function hodl() {
    hodlNum = sum 
    hodlEl.innerHTML = hodlNum;
    dealToDealer()

}


function reset() {
    let resetEl = document.getElementById("reset-el")
    sumEl.textContent = "Sum: " + sum * 0
    cards.length = 0;
    cardsEl.textContent = "Cards "
    sum = sum * 0
    messageEl.textContent = "Casino Always Wins"
    casinosCardsEl.textContent = ""
    yourHoldEl.textContent = ""
    winnerMsgEl.innerHTML = ""


}


