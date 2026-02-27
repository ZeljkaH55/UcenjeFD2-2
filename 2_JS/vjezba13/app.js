
//Objektno orjetirano programiranje
// Klasa je opisnik objekta

class Osoba{
    
    #ime; 

  get ime(){return this.#ime}
  set ime(s){this.#ime=s}
    //poziva se sa new
  constructor(ime=''){
    if(ime.length>0){
        this.#ime = ime;
    }
  }
}

//Objekt je pojavnost klase

const osoba = new Osoba(); //new je poziv konstruktora
const date = new Date()
osoba.ime ='pero'

console.log(osoba.ime);

const o = new Osoba('Đurđica');
console.log(o.ime);

//OOP princip Nasljeđivanje

class Polaznik extends Osoba{
    #odradioObaveze;
    get odradioObaveze(){return this.#odradioObaveze; }
    set odradioObaveze(b) {this.#odradioObaveze = b}
constructor(ime= '', oo = false){
    super(ime);
    this.#odradioObaveze = oo;
}
}
const p = new Polaznik('Karlo', true);
console.log(p.ime, p.odradioObaveze);

class Predavac extends Osoba{
    #vrsta;
    get vrsta(){return this.#vrsta}
    set vrsta(s){this.#vrsta = s;}
    constructor(ime='', vrsta=''){
        super(ime);
        if(vrsta.length>0){
            this.#vrsta=vrsta
        }
    }
    toString(){
        return `${this.vrsta} ˘${super.ime}`;
    }
}

const pr=new Predavac ('Pero Perić', 'vanjski');
console.log(pr)
console.log(`${pr}`);

//OOP princip Višeobličje - čitaj


console.log(Math.random());

class Pomocno{
    static slicajniBroj(){
        return 7;

    }
}
console.log(Pomocno.slicajniBroj());