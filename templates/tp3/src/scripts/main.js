
// importation de la classe Game.js
import Game from './game.js';

const WIDTH = 1000;
const HEIGHT = 600;
// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le panier
const init = () => {
  const canvas = document.getElementById("playfield");
  const startStopButton = document.getElementById("stopAndStartGame");
  const game = new Game(canvas, WIDTH, HEIGHT);

  startStopButton.addEventListener("click", e => {
    e.preventDefault();
    if(game.isRunning){
      game.stop();
      startStopButton.textContent = "start";
    }else{
      game.start();
      startStopButton.textContent = "stop";
    }

  })
  
  const buttonText = game.isRunning ? "pause" : "start";
  startStopButton.textContent = buttonText;

  game.animate();
}

window.addEventListener("load",init);

//
console.log('le bundle a été généré');
