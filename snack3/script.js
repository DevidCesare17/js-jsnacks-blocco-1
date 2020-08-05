// 3. Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

var numero = parseInt(prompt("Inserisci un numero"));

if (numero % 2 === 0) {
  document.getElementById("numero").innerHTML = numero;
} else {
  document.getElementById("numero").innerHTML = numero + 1;
}
