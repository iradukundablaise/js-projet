/*
  Ce fichier est le point d'entrée de notre application, comme indiqué dans le fichier webpack.config.js.

  On illustre ici les différents modes d'importation d'autres modules : global, sélectif, avec et sans renommage, import du défaut.

  La gestion des feuilles de style et des images par "import" est également illustrée.
  Elle permet que la gestion des dépendances vers les fichiers correspondant soit prise en charge par webpack.
*/



// import global du module
import * as number from './num';
// import de l'export par défaut
import message from './tool';
// import sélectif dont un en renommant
import {timo, greatings as welcome} from './timoleon';

// counter.js illustre l'utilisation d'attributs privés et publics
import Counter from './counter';


// import de la feuille de style liée à  main.js (pour gestion par webpack)
import './assets/style/main.css';

// import d'une image (pour gestion par webpack),
// la constante 'timoleonSrc' peut ensuite être utilisée dans le code pour désigner cette source d'image
import timoleonSrc from '../images/timoleon.jpg';


// on crée un objet Counter, qui définit des attributs privés : prise en compte de l'import
const counter = new Counter(2);


// la fonction exécutée au chargement de la page : elle utilise différents éléments importés
const main = () => {
  {
  const result = document.getElementById('result');
  // on va afficher dans #result un texte construit à partir d'éléments importés : message, welcome, timo, number.PI
  result.textContent = `${message} -> ${welcome(timo)}; ${number.PI}`;
  // abonnement du click sur le bouton #increment
  document.getElementById('increment').addEventListener('click', updateIncrement);
  // mise en place de la valeur initiale de #value : utilisation du getter de counter
  document.getElementById('value').textContent = counter.value;
}
  // utilisation de la source de l'image importée et définie ligne 28 : timoleonSrc
  document.getElementById('timoleon').src = timoleonSrc;
}

// mise en place de l'exécution de main() au chargement de la page
window.addEventListener('load', main);

/*
  fonction listener : on utilise ici l'objet counter créé (ligne 32) : sa méthode increment() et son 'getter' value
  à travers ces deux éléments on illustre l'utilisation de l'attribut privé #value
*/
const updateIncrement = () => {
  counter.increment();
  // log(counter.#value);   // provoque une erreur si décommenté
  document.getElementById('value').textContent = counter.value;
}

/* voir dans la console la prise en compte de l'import 'message' */
console.log(`from main : ${message}`);
