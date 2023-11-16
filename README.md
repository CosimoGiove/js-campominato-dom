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