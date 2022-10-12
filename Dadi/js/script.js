// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const userNumber = Math.floor(Math.random()*(6 - 1 + 1) ) + 1;

const pcNumber = Math.floor(Math.random()*(6 - 1 + 1) ) + 1;


console.log(userNumber, pcNumber);

let message = "";

if (userNumber > pcNumber){
    message = "ha vinto il giocatore";
}else if (userNumber < pcNumber){
    message = "ha vinto l'IA"
}else{
    message = "pareggio"
}
alert(message)