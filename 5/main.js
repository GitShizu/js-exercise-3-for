// Crea un array di 10 oggetti che rappresentano una mela, indicando per ognuna varietà, peso e diametro.
// Calcola quanto pesano tutte le mele.
// BONUS Dividi in due array separati le mele con diametro maggiore di 10cm. Infine stampa separatamente quanto pesano i due gruppi di mele.

let appleBasket = ['Mela1', 'Mela2', 'Mela3', 'Mela4', 'Mela5', 'Mela6', 'Mela7', 'Mela8', 'Mela9', 'Mela10']
let biggerApples = []
let smallerApples = []

const Mela1 = {
    variety: 'Gala',
    weight: 70,
    diameter: 9.4,
}

const Mela2 = {
    variety: 'McIntosh',
    weight: 85,
    diameter: 10.6,
}

const Mela3 = {
    variety: 'Golden',
    weight: 98,
    diameter: 8.4,
}

const Mela4 = {
    variety: 'Honeycrisp',
    weight: 84,
    diameter: 8.7,
}

const Mela5 = {
    variety: 'Braeburn',
    weight: 72,
    diameter: 11,
}

const Mela6 = {
    variety: 'Fuji',
    weight: 77,
    diameter: 11.4,
}

const Mela7 = {
    variety: 'Mutsu',
    weight: 91,
    diameter: 7.5,
}

const Mela8 = {
    variety: 'Empire',
    weight: 101,
    diameter: 12,
}

const Mela9 = {
    variety: 'Smith',
    weight: 86,
    diameter: 7.8,
}

const Mela10 = {
    variety: 'Ambrosia',
    weight: 100,
    diameter: 8.2,
}

console.log(Mela1.weight + Mela2.weight + Mela3.weight + Mela4.weight + Mela5.weight + Mela6.weight + Mela7.weight + Mela8.weight + Mela9.weight + Mela10.weight )

for (i=0; i<=appleBasket.length; i++) {
    if(appleBasket[i].diameter>10){
        biggerApples.push(appleBasket[i])
    }else if(appleBasket[i].diameter<10){smallerApples.push(appleBasket[i])}
}