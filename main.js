"use strict"

/*# campo minato
## esecuzione scritta
attravero un imput mi creo un bottone e attraverso un evento click mi deve generare la mappa di campo minato.
attraverso una funzione mi creo la mappa del gioco che deve essere 10 per 10.
mi creo all'interno della mia funzione un elemento div, e lo appendo al mio file html.
mi creo un elemento numero lo appendo al mio div
attraverso un ciclo for gli assegno gli elmenti della funzione.*/

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
    for (let i = 1; i <= 100; i++) {
        //creazione delle celle del gioco//
        const NewGriglia = creazioneElemento("div", "cella", i)
        console.log(NewGriglia)
        containergioco.append(NewGriglia);
        //evento click sulle caselle e aggiuta della classe color //
        NewGriglia.addEventListener("click", function () {
            NewGriglia.classList.add("color")
            console.log(" ho cliccato la cella numero :", i)
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