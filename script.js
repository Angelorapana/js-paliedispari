//Palidroma 
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma 
// Parola palindroma: la parola e' uguale a se stesa con i caratteri invertiti 
// Ad esempio: anna => anna; otto => otto; ottetto => ottetto;

//Richiesta inserimento parola:

let parola = parseInt(prompt("Inserisci una parola"));

console.log(invertiparola);

//Prendo la parola inserita e verifico se è uguale alla parola inserita ma invertita:
 
function invertiparola(parola){

   let parolaInvertita = "";

    for (let i = parola.length - 1; i >= 0; i--){
        parolaInvertita = parola + parola.charAt(i);        
    }        

    return parolaInvertita;
};








//Se la parola risulta essere palindroma quindi TRUE:
// console.log("La tua parola è palindroma")


//Se la parola risulta NON essere palindroma quindi FALSE:
// console.log("La tua parola NON è palindroma")