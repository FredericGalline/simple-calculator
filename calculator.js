const userName = prompt("Quel est votre nom ?");
const random = Math.floor(Math.random() * 100) + 1;
let number = parseInt(prompt("Choisir un nombre entre 1 et 100"));
//console.log("Random : " + random);
let counter = 1;

while (number != random) {
  if (number > 100) {
    console.log("On t'a dit entre 0 et 100 boulet");
  }
  console.log("Essai " counter + ":" + number);

  if (number < random) {
    number = prompt("C'est plus, essaye encore");
  } else {
    number = prompt("C'est moins, essaye encore");
  }

  counter++;
}

console.log(userName + ", t'as gagné en " + counter + " coups");
alert(userName + ", t'as gagné en " + counter + " coups");
