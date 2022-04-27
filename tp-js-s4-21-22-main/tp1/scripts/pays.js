const numberFormatter = new Intl.NumberFormat();

dataPays.forEach( pays => pays.toString = function() { return `${this.nom} : ${this.population} hab., ${this.superficie}km², ${this.PIB} milliardsUS$` } );

/****  QUESTION 2 *****/
console.log(' *** QUESTION 2 ***');

const populationTotale = -1;

console.log(`population totale : ${numberFormatter.format(populationTotale)}`);
/***********************/


/****  QUESTION 3 *****/
console.log(' *** QUESTION 3 ***');

/***********************/


/****  QUESTION 4 *****/
const dixpluspeuples = [];

console.log(`10 plus peuplés : ${dixpluspeuples}`);
/***********************/


/****  QUESTION 5 *****/


/***********************/


/****  QUESTION 6 *****/



/***********************/
