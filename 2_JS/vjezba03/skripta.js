// operatori

const a=2, b=3;
let rez;  //nedefinirano
rez = a + b; //5
console.log(rez);

// modularno djeljenje (%)
// ostatak nakom cijelobrojnog djeljenja

console.log(9%2) //1
console.log(8%2) //0

//operator dodjele

rez=rez+2;
console.log(rez); //7


rez+=2;
console.log(rez); //9

const x=2;
rez -=x;
console.log(rez); // 7

rez*=x;
console.log(rez); //14

rez /=x;
console.log(rez); //7

rez=rez+1; //8
rez +=1; //9
rez++; // 10

console.log(rez++); // 1. ispiše 10, pa uveća na 11
console.log(rez); //11

console.log(++rez); //12

console.log(rez--); //12

console.log(--rez); //10

let i=2, j=1;
i= j++ - i;
j+= --i - ++j;
console.log (i-j); //1

console.log(5 == 5); //true
console.log('5' == 5); //T
console.log(3 == 7); // F

console.log('Osijek' === 'osijek'); // F
console.log( 5 === '5'); //F

console.log(3 != 5); //T

let godine = 18;
console.log(godine > 18); // f
console.log(godine >= 18); // T

console.log(godine>=18); //T
console.log(godine>=21); //F

//punoljetan u svim državama
const i1 = godine>=18
const i2 = godine>=21

console.log(i1 && i2) // F

console.log(i1 || i2); // T

console.log(!i1); // F -ovo je not

console.log(godine >= 18 ? 'Punoljetan' : 'Maloljetan');

const skola = 'edunova';
console.log('najbolja šklola' +skola);
console.log('najbolja škola ${skola}');

const razred = 4;
console.log('idem u' + razred + '. razred');
console.log('idem u ${razred} . razred');

const niz = [2,2,1,1];
console.log(niz);

const noviNIZ = [0,...niz,3];
console.log(noviNIZ);

const osoba={
    ime: 'pero',
    prezime: 'perić',

};
console.log(osoba);

const polaznik = {
    ...osoba,
    eudkacija:'FD2'
}
console.log(polaznik);

const [prvi, drugi] = [1,2];

console.log(prvi); // 1
console.log(drugi);

const {prezime, ...objektBezprezimena} = polaznik;
console.table(objektBezprezimena);

console.log(prezime); // ovo je višak

//nullish calecing operator ??

let sifra=null;
console.log(sifra ?? 'Šifra nije definirana');

sifra=1234;
console.log(sifra ?? 'Šifra nije definirana');

//JSON

const korisnik ={
    adresa: {
        grad: 'osijek',
        ulica: 'Jegerova'
    }
}
console.table(korisnik);
console.log(korisnik.adresa.grad);
console.log(korisnik.adresa.ulica);
console.log(korisnik.adresa.ulica.toUpperCase());

console.log(korisnik?.adresa?.ulica?.toUpperCase());

// opertaori typeof i instanceof
const n =[2,3];
console.log(typeof n); // objekt
console.log(n instanceof Array); //true

// in operator
console.log('prezime' in osoba); //true
console.log('prezime' in objektBezprezimena); // F

const binarno = 5 | 3; // ovo nije ILI već bitwise - binarni operator

console.log(binarno);

