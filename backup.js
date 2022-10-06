const userName = prompt("Quel est votre nom ?");
const random = Math.floor(Math.random() * 100) + 1;
//console.log(random);
let number = parseInt(prompt("Choisir un nombre entre 1 et 100"));
//console.log("Number : " + number);
console.log("Random : " + random);
let counter = 1;

while (number != random) {
  number > 100
    ? console.log("On t'a dit entre 0 et 100 boulet")
    : console.log("Number : " + number);
  const result = number < random ? "C'est plus" : "C'est moins";
  number = prompt(result + ", Essaye encore");
  counter++;
}

console.log(userName + ", t'as gagné en " + counter + " coups");
