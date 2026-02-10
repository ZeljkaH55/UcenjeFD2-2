function rješenje() {
    let A = document.getElementById('A').value;
    let B = document.getElementById('B').value;



    console.log("Vrijednost A:", A);
    console.log("Vrijednost B:", B);

 //--------------ZADATAK 1 — Prvi i zadnji element------------------------
 
 const prviNiz = [A, 20, 30, B];
 console.log('Prvi niz je', prviNiz);
 console.log('Prvi: ', prviNiz[0]);
 console.log('Zadnji: ', prviNiz[prviNiz.length-1]);


//--------------ZADATAK 2 — Siguran pristup elementu------------------------

const drugiNiz = ['a', A, 'c'];

if (isNaN(B)){
    
    index = B.length;
} else{
    index = B;
    
}
console.log('Drugi niz je', drugiNiz);
console.log('B je', B);
console.log('index je', index);


//------------ZADATAK 3 — Zamjena prva dva elementa-------------------

const treciNiz = [A, B, 3];
console.log('treći niz je', treciNiz);

console.log('zamjena trećeg niza:', treciNiz[1], treciNiz[0], treciNiz[2]);

//--------------ZADATAK 4 — Dodavanje elementa prema duljini------------

duljinaA = A.length


if (isNaN(A) && duljinaA < 3){
   noviA = A + 'x';
}else{
    noviA = 'y' + A;
}
console.log('novi A je', noviA);


//------ZADATAK 5 — Provjera tipa prvog elementa--------

switch (typeof A) {
  case "string":
    console.log("A je string");
    break;

  case "number":
    console.log("A je number");
    break;

  case "boolean":
    console.log("A je boolean");
    break;

  case "undefined":
    console.log("A je undefined");
    break;

  case "object":
    console.log("A je object (ili null!)");
    break;

  case "function":
    console.log("A je funkcija");
    break;

  default:
    console.log("Nepoznat tip");
}





}