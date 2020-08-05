// 2. L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var parola1 = prompt("Inserisci una parola");
document.getElementById("prima-parola").innerHTML = parola1;

var parola2 = prompt("Inserisci un'altra parola");
document.getElementById("seconda-parola").innerHTML = parola2;

if (parola1.length < parola2.length) {
  document.getElementById("risultato").innerHTML = parola1 + " - " + parola2;
} else if (parola2.length < parola1.length) {
  document.getElementById("risultato").innerHTML = parola2 + " - " + parola1;
} else {
  document.getElementById("risultato").innerHTML = "le due parole sono uguali";
}
