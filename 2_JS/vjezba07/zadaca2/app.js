const rezultat = document.getElementById('rezultat');
document.getElementById('Provjera()').addEventListener('click', () => 
{
    let a = document.getElementById('broj').value;
    const a1=Number(a)
     // console.log(b2);
      if(isNaN(a1)){
        rezultat.innerHTML="Nisi unio broj, unesi broj";
        return;
      }
      if(a1 < 0){
        rezultat.innerHTML='Broj je negativan'
      } else if(a1 > 0){
        rezultat.innerHTML='Broj je pozitivan'
      } else{
        rezultat.innerHTML='Broj je nula'
      }
  


});