# SIMON GAME

## Introduction

For this project, I created a version of the classic electronic game called Simon developed by Milton Bradley (now Hasbro) in the late 1970's. The project marks the completion of the first unit at General Assembly's Software Engineering Immersion program where we studied and practiced concepts and applications for front-end web development utilizing HTML, CSS, Javascript & DOM methods.

Link to [deployed game](https://chrisberanek.github.io/frontend_game_project/)


## Development

* Starting the game
* Adding values for the Computer sequence
* Adding values for Player sequence
* Comparing the values
* Determining if the Player wins the game
* Beginning a new round


## Requirements / Technical Requirements

The game meets the following requirements:

- Renders in the browser
- Includes separate HTML / CSS / JavaScript files
- Uses JavaScript for DOM manipulation
- Is deployed online, using [Github Project pages](https://pages.github.com)
  and/or to a custom domain.
- Uses semantic markup for HTML and CSS (adhere to best practices)
- Shows a good commit history with frequent commits
- This document is valid HTML5 + ARIA + SVG 1.1 + MathML 2.0 per [HTML5 Validator](https://html5.validator.nu)
- This document validates as CSS level 3 + SVG ! per [CSS Validator](https://jigsaw.w3.org/css-validator/) 


## Challenges

One of the challanges was to create a mathematical expression to create an Array with a random element added to the end of the Array as each round of tile-click sequences is executed correctly by the Player. This would create up to 20 total random integers (between 0 to 3) which would correspond to tile color [yellow, blue, red, green] that would determine the computer generated tile-click sequence for each game played.

I found examples of Math.random and Math.floor functions from web searches and decided to use a similar approach for my project and ammended the form to my code syntax. This is the expression I used:

``` Javascript 
function nextTap() {
  let tiles = ['yellow', 'blue', 'red', 'green'];
  let random = tiles[Math.floor(Math.random() * tiles.length)];
}
```

### Unsolved Problems

One thing I did not get to in the time frame allowed was to incorporate audio files that were linkable and could be called to play sounds during game play such as upon tile-click events, Player losing the game!, Player winning the game!, etc. This would be one enhancement.

Another method I used to save time on the front-end was to utilze standard Alert pop-ups to signify when a Player wins the game! or when a Player loses the game! These work for the basic requirement but could be enhanced with utilizing grid containers or other methods and activating or deactivating attributes in the container classes, etc. to make a better visual experience. Audio scr = references could also be added as future enhancements to this version of the project.

In addition, I do have a lot of individual functions created to pass object values and execute processes. I believe some creative comparative loops and other code enhancements could make my code set a bit more compact and efficient. The timers I have <setTimeout()> are all very asynchronous and individually created. I think some coordination could be done to reduce the number of functions and timers separately used in the current code form, and I would welcome any feedback or comments on those topics.


## Built With

* HTML
* CSS
* Javascript
