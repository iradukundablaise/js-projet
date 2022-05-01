export default class Mobile{
    constructor(x, y, image, dx=0, dy=0){
        this._x = x;
        this._y = y;
        this._dx = dx;
        this._dy = dy;
        this.image = image;
    }

    // setters
    set x(x){ this._x = x; }
    set y(y){ this._y = y; }

    // getters
    get x(){ return this._x; }
    get y(){ return this._y; }

    // getters
    get dx(){ return this._dx; }
    get dy(){ return this._dy; }

    set dx(dx){ this._dx = dx; }
    set dy(dy){ this._dy = dy; }

    draw(context){
        context.drawImage(this.image, this.x, this.y);
    }

    move(x, y){
        this.x = x;
        this.y = y;
    }

    collidesWith(m){
        const p1 = {
            x: Math.max(this.x , m.x),
            y: Math.max(this.y, m.y)
        }
        const p2 = {
            x: Math.min(this.x + this.image.width, m.x + m.image.width),
            y: Math.min(this.y + this.image.height, m.y + m.image.height),
        }
        return p1.x < p2.x && p1.y < p2.y;
    }
}
