"use strict"

/*# campo minato
## esecuzione scritta
attravero un imput mi creo un bottone e attraverso un evento click mi deve generare la mappa di campo minato.
attraverso una funzione mi creo la mappa del gioco che deve essere 10 per 10.
mi creo all'interno della mia funzione un elemento div, e lo appendo al mio file html.
mi creo un elemento numero lo appendo al mio div
attraverso un ciclo for gli assegno gli elmenti della funzione.

# campo minato
## esecuzione scritta
attravero un imput mi creo un bottone e attraverso un evento click mi deve generare la mappa di campo minato.
attraverso una funzione mi creo la mappa del gioco che deve essere 10 per 10.
mi creo all'interno della mia funzione un elemento div, e lo appendo al mio file html.
mi creo un elemento numero lo appendo al mio div
attraverso un ciclo for gli assegno gli elmenti della funzione.
 
mi genero 16 numeri casuali li inserisco in un array,
li appendo alla mia griglia e gli assegno un display none fino a quando l'utente non  clicca sulla bomba.
confronto il numero della griglia con il numero della bomba.
se il numero della bomba è uguale al numero della griglia, il numero bomba diventa display block e il numero della cella diventa display none.
gli assegno una classe color per colorare la bomba di rosso e la partita termina.
la partita termina se l 'utente clicca su una bomba oppure raggiunge il massimo di click sulle celle, che è dato dalla differenza delle celle meno 
il numero di bombe.
*/

/* function*/
function creazioneElemento(griglia, classname, contenuto) {
    const elemento = document.createElement(griglia);
    elemento.classList.add(classname);
    elemento.append(contenuto);

    return elemento
}

/* function*/

const btn = document.querySelector(".btn")
console.log(btn);

// evento onclick sul bottone play//
btn.addEventListener("click", function () {
    console.log("ciao")

    const containergioco = document.querySelector(".containergioco")
    console.log(containergioco);

    const arrayBombe = []
    for (let j = 1; j <= 16; j++) {
        const bombe = Math.floor(Math.random() * 100) + 1;
        console.log(bombe)
        arrayBombe.push(bombe)

    }
    console.log('lista bombe', arrayBombe);

    for (let i = 1; i <= 100; i++) {
        //creazione delle celle del gioco//
        const NewGriglia = creazioneElemento("div", "cella", i)
        console.log(NewGriglia)
        containergioco.append(NewGriglia);
        //evento click sulle caselle e aggiuta della classe color //

        NewGriglia.addEventListener("click", function () {
            NewGriglia.classList.add("color")
            console.log(" ho cliccato la cella numero :", i);
            if (arrayBombe.includes(i) === false) {
                console.log("non è quella")
            } else {
                NewGriglia.classList.add("bombatrovata");

                console.log("bombatrovata")
            }
        })

    }

    //disabilito il pulsante di gioco //
    btn.disabled = true

})

//tasto di reset del gioco

const reset = document.querySelector(".reset")
reset.addEventListener("click", function () {
    location.reload()
})

