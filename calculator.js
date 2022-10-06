const userName = prompt("Quel est votre nom ?");
const random = Math.floor(Math.random() * 100) + 1;
let number = parseInt(prompt("Choisir un nombre entre 1 et 100"));
console.log("Random : " + random);
let counter = 1;

while (number != random) {
  if (number > 100) {
    console.log("On t'a dit entre 0 et 100 boulet");
  }
  console.log("Essai " + counter + " : " + number);

  if (number < random) {
    number = prompt("C'est plus, essaye encore");
  } else {
    number = prompt("C'est moins, essaye encore");
  }
  counter++;
}
console.log(userName + " tu gagnes en " + counter + " coup");

if (counter === 1) {
  alert(userName + " t'es COCU !! tu gagnes en " + counter + " coup");
} else if (counter > 1 && counter <= 5) {
  alert(userName + ", t'es une brute !! tu gagnes en " + counter + " coups");
} else if (counter > 5 && counter <= 10) {
  alert(userName + ", tu gères et tu gagnes en " + counter + " coups");
} else if (counter > 10 && counter <= 15) {
  alert(userName + ", t'es fatgué .. tu trouves en " + counter + " coups");
} else {
  alert(
    userName +
      ", arrête ! le raisonnement c'est pas fait pour toi, tu fais" +
      counter +
      " coups"
  );
}
