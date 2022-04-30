
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {

	static BALL_WIDTH = 48;

  constructor() {
    // A COMPLETER...
    this.image = this.#createImage(ballImgSrc);
  }

  /* draw this ball, using the given drawing 2d context */
  draw(context) {
    alert('vous devez coder la méthode draw() de Ball');
  }


  /* crée l'objet Image à utiliser pour dessiner cette balle */
  #createImage(imageSource) {
	  const newImg = new Image();
  	newImg.src = imageSource;
  	return newImg;
  }
  get width() {
    return this.image.width;
  }
  get height() {
    return this.image.height;
  }

}
