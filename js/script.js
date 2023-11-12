/*Calcolo del prezzo del biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 

secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va scritto in pagina in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.*/




const numeroKm = parseFloat(prompt('inserisci il numero di Km'));


const etaPasseggero = parseInt(prompt('inserisci l eta del passeggero'));


const prezzoKm = 0.21;


let imponibile = (numeroKm * prezzoKm);
console.log(imponibile);

const minorenne = 18;

const over = 65;


let scontoMinorenne = 20;

let scontoOver= 40;


let prezzoTotale;

if ( etaPasseggero <= minorenne) {

    const ImportoScontoMinorenne = (imponibile * scontoMinorenne/100) ;
    prezzoTotale = (imponibile - ImportoScontoMinorenne);
}

else if ( etaPasseggero >= over) {

    const ImportoScontoOver = (imponibile * scontoOver/100) ;
    prezzoTotale = (imponibile - ImportoScontoOver);
}

else  {
    prezzoTotale = imponibile;
}



document.getElementById('output').innerHTML = 'Il prezzo da pagare per il tuo viaggio è  = ' + prezzoTotale.toFixed(2) + ' €';