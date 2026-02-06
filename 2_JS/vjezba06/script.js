// prezan niz

const prazanNiz=[];
console.log(prazanNiz);

const temperature=[-2,2,10,15,21,26,31,28,19,12,10,4];
console.log(temperature);

//ukupan broj elemenata lenght

console.log(temperature.length);

console.table(temperature);
//prvi element je na index-u 0
// a zadnji na length - 1

console.log(temperature[0]);

const zadnji = temperature.length-1;
console.log(temperature[zadnji]);


console.log(temperature[temperature.length-1]);


// temperature=[2,3] ili [ADB] - NE IDE

temperature[0]=-1 //ovako mogu mijenjati

console.log(temperature);


const ptp=[
    10, //number
    'Osijek', //string
    true, //boolean
    Symbol('id'), //jedinstvena vrijednost
    undefined, //nedefinirano
    null, //nema vrijednost
    [], //Array
    {ime: 'Preo'}, //objekt
    18n, //bigint
];

console.table(ptp);


//-------2D------tablica----------------

const tablica = [
    [1,2,3], //index reda 0
    [4,5,6], //index reda 1
    [7,8,9] // index reda 2
];

// ako treba ispisati beoj 7 - najprije red, pa kolona

console.log(tablica[2][0]);

tablica[1][2]=11 //zamjena 6 sa 11

console.table(tablica);

//----------3D-----kocka--------------
//----------4D-----tenzor-------------





