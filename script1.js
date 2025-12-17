// Pari e Dispari 
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.



// Richiesta all'utente di scelta pari o dispari
let sceltautente = prompt("Scegli tra pari o dispari");

if (sceltautente !== "pari" && sceltautente !== "dispari") {
    console.log("Scelta non valida, per favore scegli 'pari' o 'dispari'");
}

 // Richiesta all'utente di inserire un numero 
 let sceltanumero = prompt("Scegli un numero da 1 a 5");
 if (sceltanumero < 1 || sceltanumero > 5) {
    console.log("Numero non valido, per favore scegli un numero da 1 a 5");
 }  


 //Generazione del numero random con una funzione
function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Dichiarazione del numero del computer
let numerocomputer = numerorandom(1, 5);

// Dichiarazione della somma dei due numeri per stabilire se il risultato è pari o dispari
let somma = parseInt(sceltanumero) + numerocomputer;

//Condizione per stabilire il vincitore(Utilizzando  % 2 === 0  (pari) (modale)  
if (somma % 2 === 0 && sceltautente === "pari") {
    console.log("Hai vinto! La somma dei due numeri è " + somma + " ed è pari.");
} else if (somma % 2 === 0 && sceltautente === "dispari") {
    console.log("Hai perso! La somma dei due numeri " + somma + " ed è dispari.");
}