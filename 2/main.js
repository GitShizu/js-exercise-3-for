// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.


let userInput = Number(prompt("Insert number"));
let list = [];

for (let n = 1; n <= userInput; n++) {
    let list[n] = [];
    for (let i = 1; i <= 10; i++) {
        let randomNumber = Math.round(Math.random() * 100);
        list[n].push(randomNumber);
    }

    
    alert(list[n]);
}