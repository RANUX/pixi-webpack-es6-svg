import { autoDetectRenderer, Container, loader, Sprite } from 'pixi.js';

var stage = new Container(),
    renderer = autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//Use Pixi's built-in `loader` object to load an image
loader
  .add('static/images/cat.png')
  .load(setup);

  var Color = require('pixi-svg-loader!./../../static/images/color.svg');

//This `setup` function will run when the image has loaded
function setup() {

  //Create the `cat` sprite from the texture
  var cat = new Sprite(
    loader.resources['static/images/cat.png'].texture
  );

  //Add the cat to the stage
  stage.addChild(cat);

  // Instanciate
  var color = new Color();

  // Transform some colors
  color.stroke.tint = 0xFF9D2A;
  color.fill.tint = 0xC15858;
  color.both.tint = 0x108CA2;

  stage.addChild(color);

  //Render the stage
  renderer.render(stage);
}
