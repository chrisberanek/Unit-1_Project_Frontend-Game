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



function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Watch Computer Sequence';
}
