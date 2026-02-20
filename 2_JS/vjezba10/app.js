

//funkcija pozoiva samu sebe

//zbrojiti prvih 100 brojeva

let suma=0;
for(let i=0;i<=100;i++){
    suma+=i
}
console.log(suma);

function zbroj(broj){
    if(broj===1){
    return 1;
}
return broj + zbroj(broj - 1);
}
console.log(zbroj(100));

//stackoverflow

function so(){
 so();
}
so();