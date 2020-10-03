"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//*Challenge1
function ageInDays() {
  var birthYear = prompt('What year were you born dude');
  var yeartoday = (2020 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('You are ' + yeartoday + ' days old');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
} //*Challenge 2: Cat generator             
//*<iframe src="https://giphy.com/embed/Lq0h93752f6J9tijrh" width="480" height="268" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>


function generateCat() {
  var gif = document.createElement('iframe');
  var div = document.getElementById('flex-cat-gen');
  gif.src = "https://giphy.com/embed/Lq0h93752f6J9tijrh";
  div.appendChild(gif);
} //*Challenge 3: Rock, Paper, Scissors


function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice; // {'message': 'You won!', 'color': 'green'}

  console.log(yourChoice);
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log('Computer choice:', botChoice);
  results = decideWinner(humanChoice, botChoice);
  console.log(results);
  message = finalMessage(results);
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.randon() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': {
      'scissors': 1,
      'rock': 0.5,
      'paper': 0
    },
    'paper': {
      'rock': 1,
      'paper': 0.5,
      'scissors': 0
    },
    'scissors': {
      'paper': 1,
      'scissors': 0.5,
      'rock': 0
    }
  };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}

function finalMessage(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      yourScore = _ref2[0],
      computerScore = _ref2[1];

  if (yourScore === 0) {
    return {
      'message': 'Lost!',
      'color': 'red'
    };
  } else if (yourScore === 0.5) {
    return {
      'message': 'Tied!',
      'color': 'yellow'
    };
  } else {
    return {
      'message': 'Won!',
      'color': 'green'
    };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }; //*remove

  document.getElementById('scissors').remove();
  document.getElementById('paper').remove();
  document.getElementById('rock').remove();
  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');
  humanDiv.innerHTML = "<img src = ' " + imagesDatabase[humanImageChoice] + " ' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
  messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>";
  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  botDiv.innerHTML = "<img src = ' " + imagesDatabase[botImageChoice] + " ' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
} //*Challenge 4: Change color


var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);
var copyAllButtons = [];

for (var i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThing) {
  console.log(buttonThing.value);

  if (buttonThing.value === 'red') {
    buttonRed();
  } else if (buttonThing.value === 'green') {
    buttonGreen();
  } else if (buttonThing.value === 'random') {
    randomColor();
  } else if (buttonThing.value === 'reset') {
    resetColor();
  }
}

function buttonRed() {
  for (var _i2 = 0; _i2 < all_buttons.length; _i2++) {
    all_buttons[_i2].classList.remove(all_buttons[_i2].classList[1]);

    all_buttons[_i2].classList.add('btn-danger');
  }
}

function buttonGreen() {
  for (var _i3 = 0; _i3 < all_buttons.length; _i3++) {
    all_buttons[_i3].classList.remove(all_buttons[_i3].classList[1]);

    all_buttons[_i3].classList.add('btn-success');
  }
}

function resetColor() {
  for (var _i4 = 0; _i4 < all_buttons.length; _i4++) {
    all_buttons[_i4].classList.remove(all_buttons[_i4].classList[1]);

    all_buttons[_i4].classList.add(copyAllButtons[_i4]);
  }
}

function randomColor() {
  var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

  for (var _i5 = 0; _i5 < all_buttons.length; _i5++) {
    var randomNumber = Math.floor(Math.random() * 4);

    all_buttons[_i5].classList.remove(all_buttons[_i5].classList[1]);

    all_buttons[_i5].classList.add(choices[randomNumber]);
  }
} //*Challenge 5: Blackjack


var blackjackGame = {
  'you': {
    'scoreSpan': '#your-blackjack-result',
    'div': '#your-box',
    'score': 0
  },
  'dealer': {
    'scoreSpan': '#dealer-blackjack-result',
    'div': '#dealer-box',
    'score': 0
  }
};
var YOU = blackjackGame['you'];
var DEALER = blackjackGame['dealer'];
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

function blackjackHit() {
  var cardImage = document.createElement('img');
  cardImage.src = '/blackjack_assets/images/Q.png';
  document.querySelector(YOU['div']).appendChild(cardImage);
  hitSound.play();
}

function showCard() {}