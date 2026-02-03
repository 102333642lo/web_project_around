import "./formvalidator.js";
import { Card } from "./card.js";
import "./utils.js";

//open form edit-name and description  
const btnEdit = document.getElementById("openEdit");
const modal = document.getElementById("edit");
const close = document.getElementById("closeEdit");
const form = document.getElementById("formProfile");
const nameInput = document.getElementById("name");
const bioInput = document.getElementById("bio");

// open form sutmint new location -title and link
const btnSubmi = document.getElementById("openSutmit");
const modalSubmit = document.getElementById("update");
const closeSubmit = document.getElementById("closeSubmit");
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

// funtion open and close form editprofile 
btnEdit.addEventListener("click", () => {
    nameInput.value = document.getElementById("usuareProfile").textContent;
    bioInput.value = document.getElementById("bioProfile").textContent;
    modal.style.display = "flex";
});

close.addEventListener("click", () => {
    modal.style.display = "none";
});

// submit info of editprofile  
form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("usuareProfile").textContent = nameInput.value.trim();
    document.getElementById("bioProfile").textContent = bioInput.value.trim();

    modal.style.display = "none";
});

// funtion open and close form submit new post  
btnSubmi.addEventListener("click", () => {
    modalSubmit.style.display = "flex";
});

closeSubmit.addEventListener("click", () => {
    modalSubmit.style.display = "none";
});


//save new info
function activSave() {
    btnSave.disabled =
        titleValor.value.trim() === "" || linkValor.value.trim() === "";
    btnSave.classList.toggle("activo", !btnSave.disabled);
}

titleValor.addEventListener("input", activSave);
linkValor.addEventListener("input", activSave);

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
    activSave();

    modalSubmit.style.display = "none";
});

