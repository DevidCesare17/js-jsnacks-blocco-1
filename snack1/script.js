// 1. L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

var numero1 = parseInt(prompt("Inserisci un numero"));
document.getElementById("primo-numero").innerHTML = numero1;

var numero2 = parseInt(prompt("Inserisci un altro numero"));
document.getElementById("secondo-numero").innerHTML = numero2;

if (isNaN(numero1) || isNaN(numero2)) {
  alert("Scrivi solamente valori numerici");
} else if (numero1 > numero2) {
  document.getElementById("numero-maggiore").innerHTML = numero1;
} else if (numero2 > numero1) {
  document.getElementById("numero-maggiore").innerHTML = numero2;
} else {
  document.getElementById("numero-maggiore").innerHTML = "I due numeri sono uguali!";
}
