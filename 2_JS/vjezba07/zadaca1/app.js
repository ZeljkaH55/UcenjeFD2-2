
const rezultat = document.getElementById('rezultat');
document.getElementById('izracunajPovrsinu()').addEventListener('click', () => 
{
    let duljina = document.getElementById('duljina').value;
    let sirina = document.getElementById('sirina').value;


    if (isNaN(duljina) || isNaN(sirina) || duljina <= 0 || sirina <= 0) {
        rezultat.innerHTML = "Molimo unesite ispravne pozitivne brojeve!";
    //  rezultat.innerHTML.style.color = "red";
        return;
    }

    let povrsina = duljina * sirina;

    rezultat.innerHTML=`Površina pravokutnika iznosi: ${povrsina}`

});
