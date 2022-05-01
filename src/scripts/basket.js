import Mobile from './mobile';
import basketImage from './assets/images/basket128.png';

export default class Basket extends Mobile{
    static WIDTH = 128;
    static HEIGHT = 94;

    constructor(canvas){
        const image = new Image(Basket.WIDTH, Basket.HEIGHT);
        image.src = basketImage;
        super(canvas.width/2-(Basket.WIDTH/2), canvas.height/2-(Basket.HEIGHT/2), image, 10, 10);
        this.canvas = canvas;
    }

    moveUp(){
        if(this.y > 0){
            super.move(this.x, this.y - this.dy);
        }else{
            super.move(this.x, 0);
        }
    }

    moveDown(){
        if(this.y < this.canvas.height-94){
            super.move(this.x, this.y + this.dy);
        }else{
            super.move(this.x, this.canvas.height-94);
        }
    }

    moveLeft(){
        if(this.x > 0){
            super.move(this.x - this.dy, this.y);
        }else{
            super.move(0, this.y);
        }    
    }

    moveRight(){
        if(this.x < this.canvas.width-128){
            super.move(this.x + this.dy, this.y);
        }else{
            super.move(this.canvas.width-128, this.y);
        }
    }
}