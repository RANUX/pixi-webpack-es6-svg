import { loader, Sprite } from 'pixi.js';

export default class Cat extends Sprite {
  constructor(){
    super(loader.resources['static/images/cat.png'].texture);
    this.anchor.set(0.5);
    this.position.set(100,200);
  }

  update(delta){
    this.rotation += 5*delta;
  }
}
