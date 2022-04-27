/*
  ce fichier permet d'illustrer les export multiples, avec un renommage au moment de l'export,
  on exporte ici un objet littéral, une fonction, une constante
*/

const person = { name : 'Timo', firstname : 'Leon'};

const greatings =
          ({name , firstname}) => `Hello ${name} ${firstname}`;

const value = 10;

// export multiple dont un en renommant l'export
export { value, greatings, person as timo};
