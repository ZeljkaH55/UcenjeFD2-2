
// Generator funkcije - vrdta funkcije - nogu se zaustaviti i nastavit
// * označava generator
function* primerGenerator(){
    console.log('Početak rada generatora')
    yield true; //1.pauza
    yield 2.8; //2.pauza
    yield 1; //3.pauza
    return 'gotov';
}
// - ovdje se funkcija ne izvršava
const generator = primerGenerator();
/*
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
*/
//provjera uvjeta na izlasku iz petlje

let g;
do{
    g=generator.next();
    console.log(g.value);
}while(!g.done);


function* sljedeciID(){
    let id=1;
    while(true){
        yield `ID_${id++}`;
    }
}

const id=  sljedeciID();
console.log(`sljedeći ID: ${id.next().value}`);

for(let i=0; i<10;i++){
    console.log(`sljedeći ID:${id.next().value}`)
}

function* razgovor(){
    let odgovor;
    while(true){
        odgovor = yield 'Kakao se zoveš?';
        console.log(`generator kaže: Drago mi je, ${odgovor}`);
    }
}

const chat = razgovor();
//1. pokreni generator do 1. yield

let pitanje = chat.next().value;
console.log(pitanje);
pitanje = chat.next('Marko').value;
console.log(pitanje);

console.log(chat.next('Marija').value);