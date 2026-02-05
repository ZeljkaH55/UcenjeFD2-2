const uvjet=false;

if(uvjet){
    console.log('uvjet je true');
}

if(uvjet){
    console.log('true');
}else{
    console.log('false');
}

if(!uvjet)
    console.log('!false');
else
    console.log(!true);
    console.log('Ovo se izvodi uvijek, nije dio else'); //zato stavljš {}

const ocjena=2;

if(ocjena===2){
    console.log('dovoljan')
}else if(ocjena===3){
    console.log('dobar');
}else{
    console.log('ocjena nije ni 2 ni 3');
}
//ternarni operator ?:

if(ocjena>0 && ocjena<=5){
    console.log('ocjena je valjanja');
}else{
    console.log('nije ocjena');
}

//inline if
console.log(ocjena>0 && ocjena<=5 ? 'ocjena je valjana' : 'Nije ocjena');


//falsy i truly

const ime='Edunova'

if(ime){
    console.log('varijabla ime ima vrijednost')
}else{
    console.log('varjabla ime nema vrijednost')
}

const b = Number('aaaa');
console.log(b); //NaN (not a number)

if(!b){
    console.log('b nije broj');
}

if(ime){
    
}