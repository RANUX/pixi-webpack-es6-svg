import * as PIXI from 'pixi.js';
import AnimationLoop from 'AnimationLoop';
import config from 'GameConfig';

export default class Game {
  constructor(){
    const Renderer = (config.webgl) ? PIXI.autoDetectRenderer : PIXI.CanvasRenderer;
    this.renderer = new Renderer(config.width || 800, config.height || 600, config.rendererOptions);
    this.renderer.view.style.position = 'absolute';
    this.renderer.view.style.top = '0px';
    this.renderer.view.style.left = '0px';
    document.body.appendChild(this.renderer.view);

    let stage = new PIXI.Container();
    stage.interactive = true;
    this.animationLoop = new AnimationLoop(this.renderer, stage);
    this.animationLoop.on('prerender', this.update.bind(this));
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    let screenRatio = window.innerWidth / config.width;
    this.stage.scale.x = this.stage.scale.y = screenRatio;
    this.renderer.resize(window.innerWidth, window.innerHeight);
    this.screenHeight = window.innerHeight / screenRatio;
  }

  update(){
    for(let i = 0; i < this.stage.children.length; i++){
      if(this.stage.children[i].update){
        this.stage.children[i].update(this.animationLoop.delta);
      }
    }
  }

  start(){
    this.animationLoop.start();
  }

  stop(){
    this.animationLoop.stop();
  }

  get stage(){
    return this.animationLoop.stage;
  }

  set stage(stage){
    this.animationLoop.stage = stage;
  }
}
