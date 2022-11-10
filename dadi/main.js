// creare un generatore con i dadi, il piu alto vince

// ho bisogno di due dadi

// 2 dadi che creano numeri random da 1-6, poiche' non abbiamo dadi veri



// dobbiamo riuscire ad avviare questi due dadi tramite un pulsante che fara' comparire i numeri sull'html

// dichiariamo la variabile del bottone
const btn = document.getElementById('btn');

btn.addEventListener('click',

    function() {

        // creo il dado 1 dell'utente
        const utenteDado = Math.floor(Math.random()*6) + 1;

        // creo il dado 2 del computer
        const utentePc = Math.floor(Math.random()*6) + 1;

        document.getElementById('numeroUtente').innerHTML = `${utenteDado}`;
        document.getElementById('numeroComputer').innerHTML = `${utentePc}`;
    

        if ( utenteDado > utentePc ) {

            document.getElementById('vincitore').innerHTML = "Hai vinto!!!!"

        } else if ( utenteDado === utentePc ) {

            document.getElementById('vincitore').innerHTML = "Pareggio! Riprova"
            
        } else {

            document.getElementById('vincitore').innerHTML = "Hai perso! AHAHA!"

        }

    }
)


// Se il dado 1 e' maggiore del dado 2 vinco
// Se escono lo stesso numero e' pareggio
// ALTRIMENTI PERDO