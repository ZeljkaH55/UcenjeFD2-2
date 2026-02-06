
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak

      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // rješavanje 2. zadatak

      // kraj rješavanje 2. zadatak
    break;
    case '3':
      // rješavanje 3. zadatak

      // kraj rješavanje 3. zadatak
    break;


//4. Za uneseni broj ispiši da li je većo od 100 ili ne

    case '4':

    const x=Number(a);
    if(!x){
      rezultat.innerHTML='niste unijeli broj';
      return;
    }

    if(x>100){
      rezultat.innerHTML='DA';
    }else {
      rezultat.innerHTML='NE'
    }
    rezultat.innerHTML=x>100 ? 'DA': 'NE';

    break;

// 5. Za uneseni niz ispiši broj znakova
case '5':
    if(!a){
      rezultat.innerHTML='Unesi broj'
      return;
    }
    rezultat.innerHTML=a.length;

break;


//6. Za namjenrnicu ispiši da li je meso, voće ili ne možeš odrediti

case '6':

if(!a){
  rezultat.innerHTML='unesi namjernicu';
  return;
}

const aCisto = a.toLowerCase();

if( aCisto === 'jabuka' || aCisto === 'kruška' || aCisto === 'banana'){
  rezultat.innerHTML='voće';
} else if(aCisto === 'jenjetina' || aCisto === 'teletina' || aCisto === 'prastina'){
  rezultat.innerHTML='meso';
} else {
  rezultat.innerHTML='ne mogu odrediti'
}




break;



    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }

});


// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).

