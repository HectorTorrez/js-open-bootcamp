let Name = "Hector";
let lastname = "Torrez "

let estudiante = `${Name} ${lastname}`;
console.log(estudiante)

let estudianteMayus = estudiante;
console.log(estudianteMayus.toLocaleUpperCase());

let estudianteMinus = estudiante;
console.log(estudianteMinus.toLocaleLowerCase());

let numeroletras = estudiante;
console.log(numeroletras.length)

let firstLetter = Name;
console.log(firstLetter.charAt());

let lastLetter = lastname;
console.log(lastLetter.charAt(5))

let borrarEspacios = estudiante;
console.log(borrarEspacios.trim());

let verdadero = estudiante;

console.log(verdadero.includes("Hector"))