// 5. chiedere all'utente di inserire un numero, e se il numero è pari viene visualizzato nel box rosso, altrimenti in quello verde.

var numero = parseInt(prompt("Inserisci un numero"));

if (isNaN(numero)) {
  alert("Inserisci solo valori numerici!");
} else if (numero % 2 == 0) {
  document.getElementById("numero").innerHTML = numero;
} else {
  document.getElementById("numero_1").innerHTML = numero;
}
