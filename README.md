 Ciao ragazzi, l'esercizio di oggi è Boolzapp! Il nome della repo è: vue-boolzapp
In allegato trovate il pdf con il brief del progetto che abbiamo letto in classe. Rileggetelo molto attentamente e seguite quello che c'è scritto alla lettera. All'interno del file di brief è presente lo screenshot dell'applicazione. Trovate, sempre in allegato le immagini da utilizzare nel progetto. Io resto a disposizione fino alle 13:00 per eventuali ticket.
Buon lavoro e buon divertimento!

 Milestone 1
 ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
 dall’interlocutore (bianco) assegnando due classi CSS diverse
 ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
 nome e immagine di ogni contatto

 soluzione

 1.dopo aver replicato la grafica, creo due contenitori, uno per i messaggi ricevuti e uno per i messaggi inviati
 2.al primo applico uno sfondo bianco e lo sposto a sinistra tramite float, mentre il secondo contenitore applico uno sfondo verde e lo sposto a destra tramite float
 3.utilizzo la direttiva v-for per visualizzare dinamicamente la lista contatti 

  Milestone 2
 ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
 messaggi relativi al contatto attivo all’interno del pannello della conversazione
 ● Click sul contatto mostra la conversazione del contatto cliccato

 soluzione

 1.definisco la proprietà active, che mi servira per mostrare il contenuto della chat del contatto cliccato, attraverso gli indici dell'array di oggetti
 2.creo una funzione che assegna la proprieta active in base al contatto cliccato

 Milestone 3
 ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
 “enter” il testo viene aggiunto al thread sopra, come messaggio verde
 ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
 un “ok” come risposta, che apparirà dopo 1 secondo.

soluzione

1.utilizzo l'evento keyup.enter in modo tale da poter inviare il messaggio cliccando il tasto enter 
2.inserisco una funzione di settimeout con delay di 1000ms dentro cui inserisco la risposta "ok"

Milestone 4
 ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
 contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina-> Scrivo
 “mar” rimangono solo Marco e Martina)

 soluzione

 tramite filtraggio e la proprietà visible, seleziono i contatti che contengono la prima lettera e le successive