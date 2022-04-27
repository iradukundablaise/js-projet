/*
  ce fichier sert à illustrer l'utilisation des attributs privés et publics dans les classes,
  les attributs privés sont ceux préfixés de '#'
  Cette syntaxe est encore "expériementale", elle est rendue accessible par le "transpilage" réalisé par Babel.

  Ce code illustre aussi la syntaxe de "getter".
*/


// import stylesheet related to counter
import './assets/style/counter.css';

export default class Counter {

  #step;
  #value = 0;
  static MAX = 100;

  constructor(step) {
     this.#step = +step;
  }

  get value () {
    return this.#value;
  }
  increment() {
     this.#value = Math.min(this.#value + this.#step, Counter.MAX);
  }
}
