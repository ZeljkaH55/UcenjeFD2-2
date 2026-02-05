
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => 
{
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

  // Za svaki zadatak zahtijevamo određene ulaze

 //ovdje počinje zad1----------------------------------------

  if (zadatak === '1') 
  {
  
      //  console.log('1. zadatak');
      //  console.log(a);

    const x = Number(a);
    if(!x && x!=0){
      rezultat.innerHTML='Unesi broj u polje A'
      return;
    }
    
    const y = Number(b);
    if(!y && y!=0){
      rezultat.innerHTML='Unesi broj u polje B'
      return;
    }
  
    if(x>y){
      rezultat.innerHTML=x;
    }else if(x<y){
      rezultat.innerHTML=y;
    }else{
      rezultat.innerHTML='Brojevi su jednaki'
    }
  
  
    return; // short curcuiting
  }

  // ovdje počinje zad2-------------------------------------------

  if (zadatak === '2') {
    const x = Number(a);
    const y = Number(b);
    const z = Number(c);
    if(!x && x!=0){
      rezultat.innerHTML='Unesi broj u polje A'
      return;
    }
    if(!y && y!=0){
      rezultat.innerHTML='Unesi broj u polje b'
      return;
    }
    if(!z && z!=0){
      rezultat.innerHTML='Unesi broj u polje c'
      return;
    }

      if(x<y && x<z){
        rezultat.innerHTML=x;
      }else if(y<x && y<z){
        rezultat.innerHTML=y;
      }else{
        rezultat.innerHTML=z;
      }


    return;
  }

    // ovdje počinje zad3-------------------------------------------------

    if (zadatak === '3') {

      const x = Number(a);
      const y = Number(b);
      const z = Number(c);
      const k = Number(d);

      if(!x && x!=0){
        rezultat.innerHTML='Unesi broj u polje A'
        return;
      }
      if(!y && y!=0){
        rezultat.innerHTML='Unesi broj u polje B'
        return;
      }
      if(!z && z!=0){
        rezultat.innerHTML='Unesi broj u polje C'
        return;
      }
      if(!k && k!=0){
        rezultat.innerHTML='Unesi broj u polje D'
        return;
      }

      s=x+y+z+k;
      rezultat.innerHTML= s;

      return;
    }


     // ovdje počinje zad4-----------------------------------------

     if (zadatak === '4'){

      const x = Number(a);
      if(!x && x!=0){
        rezultat.innerHTML='Unesi svoju godinu rođenja u polje A';
        return;
      }else if(x<1926){
        rezultat.innerHTML='Imate više od 100 godina';
        return;
      }
      s = 2026-x;

    
      if(s<18){
        rezultat.innerHTML = 'ti si maloljetan';
        return;
      }else{
        rezultat.innerHTML = 'ti si punoljetan';
        return;
      }

      return;
     }

     // ovdje počinje zad5--------------------------------------------


     if (zadatak === '5'){

      const x = Number(a);
      if(!x && x!=0){
        rezultat.innerHTML='Unesi broj u polje A';
        return;
      }

      if(x<0){
        rezultat.innerHTML='Broj je negativan';
        return;
      }else if(x==0){
        rezultat.innerHTML='Broj je nula';
        return;
      }else {
        rezultat.innerHTML='Broj je pozitivan';
        return;
      }

      return;
     }


  // ovdje počinje zad6--------------------------------------------

  if (zadatak === '6'){
    const x = Number(a);

    if(!x && x!=0){
      rezultat.innerHTML='Unesi broj u polje A';
      return;
      }
    
    if( x % 2 == 0){
      rezultat.innerHTML='Broj je paran';
      return;
    }else{
      rezultat.innerHTML='Broj nije paran';
      return;
    }

    return;
  }


 // ovdje počinje zad7--------------------------------------------

  if (zadatak === '7'){

    const x = Number(a);

    if(!x && x!=0){
      rezultat.innerHTML='Unesi bodove u polje A';
      return;
    }else if(x<0 || x>100){
      rezultat.innerHTML='Broj bodova je od 0 do 100 - uneste ponovno'
      return;
    }

    if(x<60){
      rezultat.innerHTML='Vaša ocjena je Negativna'
      return;
    }else if(x>=60 && x<=69){
      rezultat.innerHTML='Vaša ocjena je Dovoljan'
      return;
    }else if(x>=70 && x<=79){
      rezultat.innerHTML='Vaša ocjena je Dobar'
      return;
    }else if(x>=80 && x<=89){
      rezultat.innerHTML='Vaša ocjena je Vrlo dobar'
      return;
    }else{
      rezultat.innerHTML='Vaša ocjena je Odličan'
      return;
    }


    return;
  }

 
   // ovdje počinje zad8--------------------------------------------


   if (zadatak === '8'){

    const x = Number(a);
    const y = Number(b);
    if(!x && x!=0){
      rezultat.innerHTML='Unesi broj u polje A'
      return;
    }
    if(!y && y!=0){
      rezultat.innerHTML='Unesi broj u polje b'
      return;
    }

    z=x%y;
    if(z == 0){
      rezultat.innerHTML='Broj A je djeljiv brojem B'
      return;
    }else{
      rezultat.innerHTML='Broj A nije djeljiv brojem B'
      return;
    }


  return;
  }
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



