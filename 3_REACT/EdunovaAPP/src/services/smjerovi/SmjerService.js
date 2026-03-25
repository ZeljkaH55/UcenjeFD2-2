import { smjerovi } from "./SmjerPodaci";


// 1/4 Read od CRUD
async function get(){
    return {data: [...smjerovi]} // [...] stvara novi niz sa istim podacima
}


async function getBySifra(sifra) {
    return{data: smjerovi.find(s => s.sifra === parseInt(sifra))}
    
}

//2/4

async function dodaj(smjer) {
    if(smjerovi.length === 0){
        smjer.sifra=1
    }else{
        
    smjer.sifra = smjerovi[smjerovi.length -1].sifra + 1
    }
    smjerovi.push(smjer)
    
}

//3/4

async function promjeni(sifra, smjer) {
    const index = nadjiIndex(sifra)
    smjerovi[index] = {...smjerovi[index], ...smjer} 
}

function nadjiIndex(sifra){
    return smjerovi.findIndex(s=>s.sifra === parseInt(sifra))
}

export default{
    get,
    dodaj,
    getBySifra,
    promjeni
}