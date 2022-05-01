import Basket from './basket';
import Egg from './egg';
import Rocket from './rocket';

export default class Game {
    constructor(canvas, width, height){
        this.canvas = canvas;
        this.isRunning = false;
        this.width = width;
        this.height = height;
        this.score = 0;
        this.lives = 3;
        this.context = canvas.getContext("2d");
        this.scoreDisplay = document.getElementById("score");
        this.startStopButton = document.getElementById("stopAndStartGame");
        this.basket = new Basket(canvas);
        this.eggs = [];
        this.rockets = [];

        this.raf = null;
        this.refEggsInterval = null;
        this.refRocketInterval = null;

        this.scoreDisplay.textContent = `${this.score}`;
        this.setKeyboardEvents();
    }

    start(){
        this.isRunning = true;
        this.animate();
        this.addEggsAndRockets();
    }

    stop(){
        this.isRunning = false;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // cancel animation frame and clear all intervals //
        window.cancelAnimationFrame(this.raf);
        clearInterval(this.refEggsInterval);
        clearInterval(this.refRocketInterval);
    }

    /*
    reset(){
        this.score = 0;
        this.lives = 3;
        this.startStopButton.textContent = "start";
        for(let i=0; i<this.lives; i++){
            document.getElementById(`life-${i+1}`).hidden = false;
        }
        this.eggs = []
        this.rockets = [];
        this.basket.x = this.canvas.width/2-(Basket.WIDTH/2);
        this.basket.y = this.canvas.height/2-(Basket.HEIGHT/2);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.scoreDisplay.textContent = "0";
    }
    */

    animate(){
        if(this.isRunning && this.lives > 0){
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.basket.draw(this.context);
            
            this.eggs = this.eggs.filter( egg => {
                if(egg){
                    egg.draw(this.context);
                    egg.move();
                    if(egg.y + Egg.HEIGHT >= this.canvas.height){
                        return false;
                    }else if(this.basket.collidesWith(egg)){
                        // incriment points
                        this.score+= 100;
                        this.scoreDisplay.textContent = `${this.score}`;
                        return false;
                    }
                    return true;
                }
                return false;
            });

            this.rockets = this.rockets.filter(rocket => {
                if(rocket){
                    this.eggs = this.eggs.filter( egg => !rocket.collidesWith(egg)) 
                    rocket.draw(this.context);
                    rocket.move();
                    if(rocket.x + Rocket.WIDTH >= this.canvas.width){
                        return false
                    }else if(this.basket.collidesWith(rocket)){
                        this.score -= 500;
                        this.scoreDisplay.textContent = `${this.score}`;
                        document.getElementById(`life-${this.lives}`).hidden = true;
                        this.lives -= 1;
                        if(this.lives === 0){
                            this.stop();
                            alert("Perdu !");
                            window.location.reload();
                        }
                        return false;
                    }
                    return true
                }
                return false
            })

            this.raf = window.requestAnimationFrame(this.animate.bind(this));
        }
    }

    setKeyboardEvents(){
        window.addEventListener("keydown", e => this.onKeyboardEvent(e));
        window.addEventListener("keyup", e => this.onKeyboardEvent(e));
    }

    onKeyboardEvent(e){
        if(this.isRunning){
            if(e.keyCode === 38){
                this.basket.moveUp()
            }else if(e.keyCode === 40){
                this.basket.moveDown()
            }else if(e.keyCode === 37){
                this.basket.moveLeft()
            }else if(e.keyCode === 39){
                this.basket.moveRight()
            }
        }
    }

    addEgg(){
        let probability = Math.random() <= 0.75;
        if(probability){
            let randomX = Math.floor(Math.random() * Math.floor(this.canvas.width / Egg.WIDTH)) * Egg.WIDTH;
            let egg = new Egg(this.canvas, randomX, 0);
            this.eggs.push(egg);
        }
    }

    addRocket(){
        let probability = Math.random() <= 0.5;
        if(probability){
            let randomY = Math.floor(Math.random() * Math.floor(this.canvas.height / Egg.HEIGHT)) * Egg.HEIGHT;
            let rocket = new Rocket(this.canvas, 0, randomY);
            this.rockets.push(rocket);
        }
    }

    addEggsAndRockets(){
        this.refEggsInterval = setInterval(() => this.addEgg(), 1000);        
        this.refRocketInterval = setInterval( () => this.addRocket(), 1000);
    }

}



