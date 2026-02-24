
//funkcionalne metode skračuju kod

//1. nam trbaju podaci

const korisnici= [
    {id: 1, ime: 'Ana', prezime: 'Kartek', godina: 25, admin: false},
    {id: 2, ime: 'Karlo', prezime: 'Horvat', godina: 29, admin: false},
    {id: 3, ime: 'Marko', prezime: 'živković', godina: 30, admin: true},
    {id: 4, ime: 'Ivana', prezime: 'Sović', godina: 45, admin: true},
    {id: 5, ime: 'Jan', prezime: 'Kovač', godina: 17, admin: false},
];

//forEach() - funkcija

for(let i=0; i<=korisnici; i++){
    console.log(korisnici[i].ime);
}

console.log('****************************************');
korisnici.forEach(korisnik => console.log(korisnik.ime));

console.log('****************************************');
korisnici.forEach(o=>console.log(`${o.ime} ${o.prezime}`));

console.log('****************************************');
korisnici.forEach(o=> {
    let oslovi = 'Poštovan';
    if(o.ime.endsWith('a')){
        oslovi += 'a gospođo';
    }else{
        oslovi += 'i gospodine';
    }
    console.log(`${oslovi} ${o.ime} ${o.prezime}`)
});

console.log('****************************************');
korisnici.forEach(o => console.log(`Poštovan${o.ime.endsWith('a') ? 'a gospođo' : 'i gospodine'} ${o.ime}`));

// map()

console.log('****************************************');

const samoImena = korisnici.map(o=>o.ime);
console.table(samoImena);

const imePrezime = korisnici.map(o=> o.ime+ ' '+ o.prezime);

const maliNiz = korisnici.map(({id,ime,prezime}) => ({sifra: id, osoba: ime+ ' '+ prezime}));

console.table(maliNiz);

console.log('****************************************');

//find()
console.log(korisnici.find(o=> o.id === 3)?.ime);

console.log(korisnici.find(o=> o.ime === 'Ana' && o.prezime ==='Kartek').id);

console.log('****************************************');

//findIndex()

console.log(korisnici.findIndex(o=> o.id ===1));

//filter()


console.table(korisnici.filter(o=> o.godina>40));

//reduce()

console.log(korisnici.reduce((suma,o) => suma + o.godina, 0));

//some()

console.log(korisnici.some(o=> o.admin) ? 'Ima admin' : 'Nema admin');

// every()

console.log(korisnici.every(o=> o.godina >=18) ? 'svi piunoljetni' : 'nisu svi punoljtni');