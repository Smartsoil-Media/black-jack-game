let cards =[]
let sum = 0
let wins = 0
let losses = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")
let winsEl = document.getElementById("wins")
let lossesEl = document.getElementById("losses")

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
        message = "Hit or Stay"
    } else if (sum === 21) { 
        winsEl.innerText = wins += 1 
        message = "Wohoo! That's Black-Jack"
        hasBlackJack = true
    } else { 
        message = "Loser"
        lossesEl.textContent = losses += 1
        isAlive = false
    
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

function reset() {
    let resetEl = document.getElementById("reset-el")
    sumEl.textContent = "Sum: " + sum * 0
    cards.length = 0;
    cardsEl.textContent = "Cards "
    sum = sum * 0
    messageEl.textContent = "Casino Always Wins"
}


