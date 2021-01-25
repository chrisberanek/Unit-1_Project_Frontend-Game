// Create arrays to store computer and player button sequences, make a level counter
let computerSequence = [];
let playerSequence = [];
let level = 0;

// Create DOM Querry Selectors including start button and text-info sections
let startButton = document.querySelector('.js-start');
let info = document.querySelector('.js-info');
let heading = document.querySelector('.js-heading');
let tileContainer = document.querySelector('.js-container');

// Create a function to initiate a game reset and reset computer, Player sequence Arrays and level counter
// Add info-text to 'Play again and make tile-container 'un-clickable' to Player
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

// Create function to indicate to Player it is time to enter response and make tile-container 'clickable' to Player
function playerTurn(level) {
  tileContainer.classList.remove('unclickable');
  info.textContent = `Your turn: ${level} Tap${level > 1 ? 's' : ''}`;
}

// Create function to activate tiles on screen in correct order
function activateTile(color) {
  let tile = document.querySelector(`[data-tile='${color}']`);
  tile.classList.add('activated');
  setTimeout(() => {
    tile.classList.remove('activated');
  }, 500);
}

// Create function to create and iterate over sequence Array and create timer to pause between each tile-sequence for the computer
function playRound(nextSequence) {
  nextSequence.forEach((color, index) => {
    setTimeout(() => {
      activateTile(color);
    }, (index + 1) * 1000);
  });
}

// Create function to create an Array with random values to determine tile-sequence for the computer
function nextTap() {
  let tiles = ['yellow', 'blue', 'red', 'green'];
  let random = tiles[Math.floor(Math.random() * tiles.length)];
  return random;
}

// Create a function to initiate a round for computer to create a tile-sequence and make tile-container 'un-clickable' to Player
// Call for player response function to click correct tile(s)
function nextRound() {
  level += 1;
  tileContainer.classList.add('unclickable');
  info.textContent = 'Wait for the computer sequence';
  heading.textContent = `Level ${level} of 20`;

  let nextSequence = [...computerSequence];
  nextSequence.push(nextTap());
  playRound(nextSequence);

  computerSequence = [...nextSequence];
  setTimeout(() => {
    playerTurn(level);
  }, level * 1000 + 1500);
}

// Create function to push tile-click values for Player to playerSequence Array and execute comparative statements
function handleClick(tile) {
  let index = playerSequence.push(tile) - 1;
  let remainingTaps = computerSequence.length - playerSequence.length;

  if (playerSequence[index] !== computerSequence[index]) {
    resetGame('SORRY! GAME OVER! YOU TAPPED THE WRONG TILE');
    return;
  }

  if (playerSequence.length === computerSequence.length) {
    if (playerSequence.length === 20) {
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

// Create function to hide the start button uppon button-click
// give instruction to wait for computer to create and initiate tile-click sequence
function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Wait for the computer sequence';
  nextRound();
}

// Create event listener for button-click to start game
startButton.addEventListener('click', startGame);

// Create event listener for button-click to reset game and keep playing
tileContainer.addEventListener('click', event => {
  let { tile } = event.target.dataset;
  if (tile) handleClick(tile);
});




