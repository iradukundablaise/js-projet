import Mobile from './mobile';
import rocketImage from './assets/images/rocket128.png';

export default class Rocket extends Mobile{
    static WIDTH = 107;
    static HEIGHT = 38;
    constructor(canvas, x, y){
        let image = new Image();
        image.src = rocketImage;
        super(x, y, image, 6, 0);
        this.canvas = canvas;
    }

    move(){
        super.move(this.x + this.dx, this.y);
    }
}