
// beskonačna while petlja
while(true){
    console.log('Edunova');
    break;
}


let brojac=0;
console.time('while petlja');
while(brojac++<100){
    //    console.log(brojac);
    //if(brojac %50 === 0){
    //    console.timeLog('while petlja');
    //}
}
console.timeEnd('while petlja');


//zbroji sve znamenke danog broja
let brojUnos='1262'
console.time('ZB1');

let zbroj=0;
for(let i=0; i<brojUnos.length; i++){
    zbroj += parseInt(brojUnos[i]);
}
console.log(zbroj);
console.timeEnd('ZB1');

console.time('ZB2');
let broj = parseInt(brojUnos);
zbroj = 0;
while (broj>0){
    zbroj += broj % 10;
    broj = broj - (broj % 10)
    broj = broj / 10; 
}
console.log(zbroj);

console.timeEnd('ZB2');

// čitati o Big o notaciji -  riječ je o optimizaciji

let br = - 5;

for(let i=0;i>br;i--){
    console.log('Ušao u petlju', i);
}

let podacSAPI = [];

//let podacSAPI= [
//{
//  ime:  'pero'
//},
//{
//    ime: 'marko'
//}
//]

while(podacSAPI.length>0){
    console.log('Ušao u whilw petlju',podacSAPI.pop()?.ime);
}


