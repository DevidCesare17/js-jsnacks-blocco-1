// 4. Generare due numeri casuali e sommarli tra di loro

var numero1 = Math.floor(Math.random() * 100) + 1;
document.getElementById("primo-numero").innerHTML = numero1;

var numero2 = Math.floor(Math.random() * 100) + 1;
document.getElementById("secondo-numero").innerHTML = numero2;

var somma = numero1 + numero2;
document.getElementById("somma").innerHTML = somma;
