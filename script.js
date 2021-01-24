let computerSequence = [];
let playerSequence = [];
let level = 0;

let startButton = document.querySelector('.js-start');
let info = document.querySelector('.js-info');
let heading = document.querySelector('.js-heading');
let tileContainer = document.querySelector('.js-container');

function resetGame(text) {
  alert(text);
  computerSequence = [];
  playerSequence = [];
  level = 0;
  startButton.classList.remove('hidden');
  heading.textContent = 'Play Again';
  info.classList.add('hidden');
  tileContainer.classList.add('unclickable');
}

function humanPlay(level) {
  tileContainer.classList.remove('unclickable');
  info.textContent = `Your turn: ${level} Tap${level > 1 ? 's' : ''}`;
}

function activateTile(color) {
  let tile = document.querySelector(`[data-tile='${color}']`);


  tile.classList.add('activated');


  setTimeout(() => {
    tile.classList.remove('activated');
  }, 500);
}

function playRound(nextSequence) {
  nextSequence.forEach((color, index) => {
    setTimeout(() => {
      activateTile(color);
    }, (index + 1) * 1000);
  });
}

function nextStep() {
  let tiles = ['red', 'green', 'blue', 'yellow'];
  let random = tiles[Math.floor(Math.random() * tiles.length)];

  return random;
}

function nextRound() {
  level += 1;

  tileContainer.classList.add('unclickable');
  info.textContent = 'Wait for the computer sequence';
  heading.textContent = `Level ${level} of 20`;


  let nextSequence = [...computerSequence];
  nextSequence.push(nextStep());
  playRound(nextSequence);

  computerSequence = [...nextSequence];
  setTimeout(() => {
    humanPlay(level);
  }, level * 600 + 1000);
}

function handleClick(tile) {
  let index = playerSequence.push(tile) - 1;
  let remainingTaps = computerSequence.length - playerSequence.length;

  if (playerSequence[index] !== computerSequence[index]) {
    resetGame('SORRY! GAME OVER! YOU TAPPED THE WRONG TILE');
    return;
  }

  if (playerSequence.length === computerSequence.length) {
    if (playerSequence.length === 5) {
      resetGame('YOU WIN! ALL 20 LEVELS COMPLETED');
      return;
    }

    playerSequence = [];
    info.textContent = 'You got it! Keep playing!';
    setTimeout(() => {
      nextRound();
    }, 2000);
    return;
  }

  info.textContent = `Your turn: ${remainingTaps} Tap${
    remainingTaps > 1 ? 's' : ''
  }`;
}

function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Wait for the computer sequence';
  nextRound();
}

startButton.addEventListener('click', startGame);
tileContainer.addEventListener('click', event => {
  let { tile } = event.target.dataset;

  if (tile) handleClick(tile);
});




