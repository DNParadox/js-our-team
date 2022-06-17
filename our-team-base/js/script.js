// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html.
//  Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha
//  le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare
//  dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.


//  Test Funzionante

// Logica su come applicare oggetti con Array

// const test = {
//     nome : [ ["Carlo", "Luigi", "Sempronio"],
//             ["Martina", "Gigia"]]
//     // Cognome : "Mario"
// };


// test funzionante
// console.log(test.nome[1][1])


const cardArray = {
   name : ["Wayne Barnett", "Angela Caroll", "Walter Gordon", "Angela Lopez", "Scott Estrada", "Barbara Ramos"],
   role : ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"]
}


// Stamp simile verrà in html 
// console.log("Nome: " + cardArray.name[0] + " ruolo: " + cardArray.role[0])
// console.log(cardArray.name.length)


// Selezioniamo il div da manipolare e costruiamo un ciclo for per poterci interagire
const cardContainer = document.querySelector('.team-container');

// Creato il ciclo for possiamo dunque farsì che 
for(let i = 0; i < cardArray.name.length; i++) {
    const thisCard = cardArray;
    console.log("ciclo for",thisCard);
    console.log(i);

    // Creare un nuovo template compilato coi dati giusti
    const cardToDraw = `
    <div class="team-card">
        <div class="card-image">
            <img
            src="img/wayne-barnett-founder-ceo.jpg"
            alt="Wayne Barnett"
            />
    </div>
        <div class="card-text">
            <h3>${thisCard.name[0]}</h3>
            <p>${thisCard.role[0]}<p>
        </div>
    </div>
    `;


    // concatenarlo a cardContainer
    cardContainer.innerHTML += cardToDraw;
}