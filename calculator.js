const userName = prompt("Quel est votre nom ?");
const random = Math.floor(Math.random() * 100) + 1;
let number = parseInt(prompt("Choisir un nombre entre 1 et 100"));
console.log("Random : " + random);
let counter = 1;

while (number != random) {
  if (number > 100) {
    console.log("On t'a dit entre 0 et 100 boulet");
  }

  console.log("Number : " + number);

  if (number < random) {
    const result = "C'est plus";
  } else {
    const result = "C'est moins";
  }

  //const result = number < random ? "C'est plus" : "C'est moins";
  number = prompt(result + ", Essaye encore");
  counter++;
}

console.log(userName + ", t'as gagné en " + counter + " coups");
