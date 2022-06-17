const imgArray = {
    img : ["img/wayne-barnett-founder-ceo.jpg","img/angela-caroll-chief-editor.jpg","img/walter-gordon-office-manager.jpg","img/angela-lopez-social-media-manager.jpg","img/scott-estrada-developer.jpg","img/barbara-ramos-graphic-designer.jpg"],
}

const cardArray = {
   name : ["Wayne Barnett", "Angela Caroll", "Walter Gordon", "Angela Lopez", "Scott Estrada", "Barbara Ramos"],
   role : ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"]
}





// Selezioniamo il div da manipolare e costruiamo un ciclo for per poterci interagire
const cardContainer = document.querySelector('.team-container');

// Creato il ciclo for possiamo dunque farsì che 
for(let i = 0; i < cardArray.name.length; i++) {
    const thisCard = cardArray;
    const thisImage = imgArray;
    console.log("ciclo for",thisCard);
    console.log(i);

    // Creare un nuovo template compilato coi dati giusti
    const cardToDraw = `
    <div class="team-card">
        <div class="card-image">
         <img
            src="${thisImage.img[i]}"
            alt="${thisCard.name[i]}"
            />

        </div>
        <div class="card-text">
        
            <h3>${thisCard.name[i]}</h3>
            <p>${thisCard.role[i]}</p>
        </div>
    </div>
    `;



    // concatenarlo a cardContainer
    cardContainer.innerHTML += cardToDraw;
}