//kod sa greškom
/*
console.log('početak programa');
const i=7;

const rezultat= i + varijabla

console.log(rezultat);
console.log('Kraj programa');
*/

//osnovna try catch sintaksa

try{
    console.log('početak');
    const i=7;
    const rezultat= i + varijabla;
    console.log(rezultat);
}catch(e){
    console.log('greška', e.name, e.message, e);
}
    console.log('Kraj');

// ocionalna sintaksa

console.log('primjer 2');
const i=7;
let rezultat=0;
try{
    rezultat=i+varijabla;
}catch(e){
    rezultat=i+1
}finally{
    console.log(rezultat);
}
console.log('kraj primjer 2');

// funkcija može baciti error

function korijen(broj){
    if(broj<=0){
        throw new Error('Ne mogu izvaditi drugi korjen iz negativnog broja');
    }
    return Math.sqrt(broj);
}

try{

    console.log(korijen(9));
}catch{
    console.log(e);
}

console.log('nakon korjena');









