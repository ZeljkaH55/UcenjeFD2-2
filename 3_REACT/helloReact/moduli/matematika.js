export const PI=3.14 // Iz ove datoteke je moguće napraviti import varijable PI

export function zbroji(a,b){ // Iz ove datoteke moguće je napraviti import funkcije
    return a+b
}

export default function pozdrav(ime){ // ovo je zadana funkcija iz ove datotete i za nju kod importa ne treba koristiti {}
    return `Hello, ${ime}`
}

function prva(){
    return `Ovo vidim jer je napravljen export. ${druga()}`
}

function druga(){
    return 'Ovo ne vidim izvan matematika.js'
}

export {prva}