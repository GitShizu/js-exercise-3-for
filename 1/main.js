// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let lista=[];
let somma = 0
for (let i=0; somma<50; i++) {
    let inputUtente = prompt("insert number");
    lista.push(inputUtente);
    let element = lista[i];
    somma += Number(element);
    if (somma>= 50) {
        alert("Number too high");
        console.log(lista);
    }
}
