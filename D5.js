/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let stringa = pets.splice(0, 1);
pets.push(stringa[0]);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 123456;
}

console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {
  brand: "fiat",
  model: "Punto",
  color: "red",
  trims: ["life", "style"],
  licensePlate: 123456,
};

cars.push(newCar);
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let index = 0;

while (index < numericArray.length) {
  console.log(numericArray[index]);
  if (numericArray[index] === 32) {
    break;
  }
  index++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
let carattere = 0;
let newArrey = [];

const positionsArray = [];
for (let i = 0; i < charactersArray.length; i++) {
  carattere = charactersArray[i].toLowerCase();
  switch (carattere) {
    case "a":
      break;
      newArrey.push(1);
    case "b":
      newArrey.push(2);
      break;
    case "c":
      newArrey.push(3);
      break;
    case "d":
      newArrey.push(4);
      break;
    case "e":
      newArrey.push(5);
      break;
    case "f":
      newArrey.push(6);
      break;
    case "g":
      newArrey.push(7);
      break;
    case "h":
      newArrey.push(8);
      break;
    case "i":
      newArrey.push(9);
      break;
    case "j":
      newArrey.push(10);
      break;
    case "k":
      newArrey.push(11);
      break;
    case "l":
      newArrey.push(12);
      break;
    case "m":
      newArrey.push(13);
      break;
    case "n":
      newArrey.push(14);
      break;
    case "o":
      newArrey.push(15);
      break;
    case "p":
      newArrey.push(16);
      break;
    case "q":
      newArrey.push(17);
      break;
    case "r":
      newArrey.push(18);
      break;
    case "s":
      newArrey.push(19);
      break;
    case "t":
      newArrey.push(20);
      break;
    case "u":
      newArrey.push(21);
      break;
    case "v":
      newArrey.push(22);
      break;
    case "w":
      newArrey.push(23);
      break;
    case "x":
      newArrey.push(24);
      break;
    case "y":
      newArrey.push(25);
      break;
    case "z":
      newArrey.push(26);
      break;
  }
}
console.log(newArrey);
