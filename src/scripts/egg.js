import Mobile from './mobile';
import blueEgg from './assets/images/blue-egg64.png';
import greenEgg from './assets/images/green-egg64.png';

export default class Egg extends Mobile{
    static WIDTH = 64;
    static HEIGHT = 83;

    constructor(canvas, x, y){
        const image = new Image(); 
        image.src = Math.floor(Math.random() * 2) == 0 ? blueEgg : greenEgg;
        super(x, y, image, 0, 4);
        this.canvas = canvas;
    }

    move(){
        super.move(this.x, this.y + this.dy);
    }
}