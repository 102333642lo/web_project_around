import "./formvalidator.js";
import { Card } from "./card.js";
import "./utils.js";

// open form sutmint new location -title and link
const modalSubmit = document.getElementById("update");
const titleValor = document.getElementById("title");
const linkValor = document.getElementById("link");
const btnSave = document.getElementById("save");

// container card 
const cardContainer = document.getElementById("cards-container");
//  image for default 
const cardContent = [
    {
        name: "Valle de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    },
    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    },
    {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    },
];



// make new card
function createCard(data) {
    const card = new Card(data, "#post-template");
    return card.generateCard();
}

// (appnd)añada elementos 
cardContent.forEach((item) => {
    cardContainer.append(createCard(item));
});

//app and save new card 
btnSave.addEventListener("click", (e) => {
    e.preventDefault();

    const newCard = {
        name: titleValor.value.trim(),
        link: linkValor.value.trim(),
    };
    //(prepend)añada elementos al principio y cierra el form


    cardContainer.prepend(createCard(newCard));

    titleValor.value = "";
    linkValor.value = "";


    modalSubmit.style.display = "none";
});

