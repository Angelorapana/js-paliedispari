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

