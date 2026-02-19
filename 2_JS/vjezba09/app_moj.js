const isDev=true;


//1. neprima parametre, ne vraća vrijednost
//1.1 definiranje funkcije

pozdraviSvijet();
function pozdraviSvijet(){
    console.log('Hello world');
   // return;
}

//1.2 pozivanje funkcije
log('Pozdravljam svijet')
pozdraviSvijet();

//2. prima parametre, ne vraća vrijednost
//2.1 definiranje funkcije
function parniBrojevi(odBroja, doBroja){
    const min=odBroja<doBroja ? odBroja : doBroja
    const max= odBroja>doBroja ? odBroja : doBroja
    for(let i=min; i<=max;i++){
        if(i%2 ===0)
            console.log(i);
    }
}

//2.2 pozivanje
log('Prvi poziv')
parniBrojevi(3,12);
log('Drugi poziv')
parniBrojevi(48,25);

function log(poruka){
    if(!isDev){
        return;
    }
    console.log('\n')
    console.log('----------------------------');
    console.log(poruka);
    console.log('----------------------------');
}


//3. ne prima parametre, vraća vrijednost
//3.1 definiranje

function slucajniBroj(odBroja=0,doBroja=0){

    if(odBroja!=0 && doBroja!=0){
        return (Math.random()*(odBroja-doBroja)+doBroja).toFixd(0);

    }
    const broj = Math.random();
    const uvecano = broj * 1000;
    const cijeliBroj= parseInt(uvecano)
    return cijeliBroj;
}

//3.2 pozivanje

log(slucajniBroj());

//log((Math.random() * 1000).toFixd(0));
log((Math.random() * (999-100)+100).toFixd(0));