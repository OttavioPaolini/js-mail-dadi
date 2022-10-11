// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const userMail = prompt("Inserire la tua mail");

const mail = ["ichigo@gmail.com", "aizen@gmail.com", "neliel@gmail.com", "urahara@gmail.com", "kenpachi@gmail.com", "hitsugaya@gmail.com"];
console.log(mail);

let isFound = false;

for (let i = 0; i < mail.length; i++){
    const mailFound = mail [i];

    if(mailFound === userMail) {
        isFound = true;
    }

    console.log(userMail, mailFound, isFound);
}
if (isFound) {
    alert("Conosci bleach?")
  } else {
    alert("Mi dispiace ma non sei un fan di bleach")
  }