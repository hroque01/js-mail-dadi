// chiedere all'utente la sua email
const email = prompt("inserisci la tua email");

// creamo la lista
let listaInvitati = ["hadson@gmail.com", "luca@gmail.com", "romina@gmail.com", "niki@gmail.com"];

// per entrare nella lista hanno bisogno di un pass che a prescindere e' sempre negativo
let pass = false;

// creamo l'array
for (let i = 0; i < listaInvitati.length; i++) {

    let invitati = listaInvitati[i]
    
    // SE io che sono in lista, posso entrare?
    if ( email === listaInvitati[i]) {
        pass = true
        console.log(pass)
    }

    // SE si allora il pass diventa true
    if ( pass == true ) {
        document.getElementById('invitati').innerHTML = "Sei stato invitato!"
    }

    // ALTRIMENTI il pass rimane false
    else {
        document.getElementById('invitati').innerHTML = "Non sei stato invitato! ma puoi entrare senza problemi, prendi tutto il bere che vuoi!"
    }
}



