//*Challenge1
function ageInDays()
{
    var birthYear = prompt('What year were you born dude');
    var yeartoday = (2020 - birthYear) * 365
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are ' + yeartoday + ' days old')
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
}
function reset()
{
    document.getElementById('ageInDays').remove()
}

//*Challenge 2: Cat generator             
//*<iframe src="https://giphy.com/embed/Lq0h93752f6J9tijrh" width="480" height="268" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
function generateCat()
{
    var gif = document.createElement('iframe')
    var div = document.getElementById('flex-cat-gen')
    gif.src = "https://giphy.com/embed/Lq0h93752f6J9tijrh"
    div.appendChild(gif)
}

//*Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice)
{
    console.log(yourChoice)
    var humanChoice, botChoice
    // {'message': 'You won!', 'color': 'green'}
    console.log(yourChoice)
    humanChoice = yourChoice.id
    botChoice = numberToChoice(randToRpsInt())
    console.log('Computer choice:', botChoice)
    results = decideWinner(humanChoice, botChoice)
    console.log(results)
    message = finalMessage(results)
    console.log(message)
    rpsFrontEnd(yourChoice.id, botChoice, message)
}
function randToRpsInt()
{
    return Math.floor(Math.randon()*3)
}
function numberToChoice(number)
{
    return ['rock', 'paper', 'scissors'][number]
}
function decideWinner(yourChoice, computerChoice)
{
    var rpsDatabase = {
        'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice]
    var computerScore = rpsDatabase[computerChoice][yourChoice]
    return [yourScore, computerScore]
}
function finalMessage([yourScore, computerScore])
{
    if (yourScore === 0)
    {
        return {'message': 'Lost!', 'color': 'red'}
    }
    else if (yourScore === 0.5)
    {
        return {'message': 'Tied!', 'color': 'yellow'}
    }
    else
    {
        return {'message': 'Won!', 'color': 'green'}
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage)
{
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //*remove
    document.getElementById('scissors').remove()
    document.getElementById('paper').remove()
    document.getElementById('rock').remove()

    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src = ' " + imagesDatabase[humanImageChoice] + " ' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>" 
    
    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)

    botDiv.innerHTML = "<img src = ' " + imagesDatabase[botImageChoice] + " ' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>" 
    document.getElementById('flex-box-rps-div').appendChild(botDiv)
}

//*Challenge 4: Change color
var all_buttons = document.getElementsByTagName('button')
console.log(all_buttons)
var copyAllButtons = []
for (let i = 0; i < all_buttons.length; i++)
{
    copyAllButtons.push(all_buttons[i].classList[1])
}
console.log(copyAllButtons)
function buttonColorChange(buttonThing)
{
    console.log(buttonThing.value)
    if (buttonThing.value === 'red')
    {
        buttonRed()
    }
    else if (buttonThing.value === 'green')
    {
        buttonGreen()
    }
    else if (buttonThing.value === 'random')
    {
        randomColor()
    }
    else if (buttonThing.value === 'reset')
    {
        resetColor()
    }
}
function buttonRed()
{
    for (let i=0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
    }
}
function buttonGreen()
{
    for (let i=0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
    }
}
function resetColor()
{
    for (let i=0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyAllButtons[i])
    }
}
function randomColor()
{
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i = 0; i < all_buttons.length; i++)
    {
        var randomNumber = Math.floor(Math.random()*4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choices[randomNumber])
    }
}

//*Challenge 5: Blackjack
let blackjackGame =
{
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]},
    'wins': 0,
    'lose': 0,
    'draw': 0,
    'isStand': false,
    'turnsOver': false
}
const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
const hitSound = new Audio('/blackjack_assets/sounds/swish.m4a')
const winSound = new Audio('/blackjack_assets/sounds/cash.mp3')
const lossSound = new Audio('/blackjack_assets/sounds/aww.mp3')
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit)
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic)
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal)

function blackjackHit()
{
    if (blackjackGame['isStand'] === false)
    {
        let card = randomCard()
        console.log(card)
        showCard(card,YOU)
        showScore(YOU)
        updateScore(card,YOU)
    }
}
function randomCard()
{
    let randomIndex = Math.floor(Math.random()*13)
    return blackjackGame['cards'][randomIndex]
}
function showCard(card, activePlayer)
{
    if (activePlayer['score'] <= 21)
    {
        let cardImage = document.createElement('img')
        cardImage.src =`/blackjack_assets/images/${card}.png`
        document.querySelector(activePlayer['div']).appendChild(cardImage)
        hitSound.play()
    }
}
function blackjackDeal()
{
    if (blackjackGame['turnsOver'] === true)
    {
        blackjackGame['isStand'] = false
        //*Reset black jack
        let your_Images = document.querySelector('#your-box').querySelectorAll('img')
        let dealer_Images = document.querySelector('#dealer-box').querySelectorAll('img')
        for (i = 0; i < your_Images.length; i++)
        {
            your_Images[i].remove()
        }
        for (i = 0; i < dealer_Images.length; i++)
        {
            dealer_Images[i].remove()
        }
    
        //*Reset score
        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style.color = '#fff';
        document.querySelector('#dealer-blackjack-result').style.color = '#fff';
        document.querySelector('#blackjack-result').textContent = "Let's play"
        document.querySelector('#blackjack-result').style.color = 'black'

        blackjackGame['turnsOver'] = true
    }
}
function updateScore(card, activePlayer)
{
    //* If adding 11 keeps me below 21, add 11. Otherwise, add 1
    if(card === 'A')
    {
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21)
        {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1]
        }
        else    
        {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0]
        }
    }
    else
    {
        activePlayer['score'] += blackjackGame['cardsMap'][card]
    }
}
function showScore(activePlayer)
{
    if (activePlayer['score'] > 21)
    { 
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!'
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red'
    }
    else
    {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function dealerLogic()
{
    blackjackGame['isStand'] = true
    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true)
    {
        let card = randomCard()
        showCard(card, DEALER)
        updateScore(card, DEALER)
        showScore(DEALER)
        showResult()
        await sleep(1000)
    }
        blackjackGame['turnsOver'] = true
        let winner = computeWinner()
        showResult(winner)
}
//Compute winner and return who just won and update the win, lose and draw
function computeWinner()
{
    let winner
    if (YOU['score'] <= 21)
    {
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21))
        {
            blackjackGame['wins']++
            console.log('You won')
            winner = YOU
        }
        else if (YOU['score'] < DEALER['score'])
        {
            console.log('You lost')
            winner = DEALER
            blackjackGame['lose']++
        }
        else if (YOU['score'] === DEALER['score'])
        {
            console.log('You drew')
            blackjackGame['draw']++
        }
    }
    else if (YOU['score'] > 21 && DEALER['score'] <= 21)
    {
        console.log('You lost')
        blackjackGame['lose']++
        winner = DEALER
    }
    else if (YOU['score'] > 21 && DEALER['score'] > 21)
    {
        console.log('You drew')
        blackjackGame['draw']++
    }
    console.log('Winner is', winner)
    console.log(blackjackGame)
    return winner
}

function showResult(winner)
{
    let message, messageColor
    if (blackjackGame['turnsOver'] === true)
    {
        if (winner === YOU)
        {
            document.querySelector('#win').textContent = blackjackGame['wins']
            message = 'You won'
            messageColor = 'green'
            winSound.play()
        }
        else if (winner === DEALER)
        {
            document.querySelector('#lose').textContent = blackjackGame['lose']
            message = 'You lost'
            messageColor = 'red'
            lossSound.play()
        }
        else
        {
            document.querySelector('#draw').textContent = blackjackGame['draw']
            message = 'You drew'
            messageColor = 'black'
        }
        document.querySelector('#blackjack-result').textContent = message
        document.querySelector('#blackjack-result').style.color = messageColor
    }
}