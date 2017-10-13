import { loader } from 'pixi.js';
import Game from 'Game';
import Cat from 'components/Cat';

// var stage = new Container(),
//     renderer = autoDetectRenderer(256, 256);
// document.body.appendChild(renderer.view);

let game = new Game();

//Use Pixi's built-in `loader` object to load an image
loader
  .add('static/images/cat.png')
  .load(setup);

var Color = require('pixi-svg-loader!./../../static/images/color.svg');

//This `setup` function will run when the image has loaded
function setup() {

  //Create the `cat` sprite from the texture
  let cat = new Cat();

  //Add the cat to the stage
  game.stage.addChild(cat);

  // Instanciate
  var color = new Color();

  // Transform some colors
  color.stroke.tint = 0xFF9D2A;
  color.fill.tint = 0xC15858;
  color.both.tint = 0x108CA2;

  game.stage.addChild(color);

  // start game
  game.start();
}
