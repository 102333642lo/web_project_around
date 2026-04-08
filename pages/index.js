import "../scripts/formvalidator.js";
import { Card } from "../scripts/card.js";
import Section from "../scripts/Section.js";
import Popup from "../scripts/Popup.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";

// open form sutmint new location -title and link
const titleValor = document.getElementById("title");
const linkValor = document.getElementById("link");
const btnSave = document.getElementById("save");

const btnEdit = document.getElementById("openEdit");
const form = document.getElementById("formProfile");
const nameInput = document.getElementById("name");
const bioInput = document.getElementById("bio");
const btnSubmi = document.getElementById("openSutmit");

const editPopup = new Popup('#edit');
const submitPopup = new Popup('#update');
const imagePopup = new PopupWithImage('#imageModal');

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


editPopup.setEventListeners();
submitPopup.setEventListeners();
imagePopup.setEventListeners()
// musta da ubicasin de los datos para mostarlos en el form 
const userInfo = new UserInfo({
    nameSelector: '#usuareProfile',
    workSelector: '#bioProfile'
});


// card
const cardList = new Section({
    items: cardContent,
    renderer: (item) => {
        //callback para abrir la imagen
        const card = new Card(item, "#post-template", (cardData) => {
            imagePopup.open({ link: cardData.link, name: cardData.name });
        });
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    }
}, "#cards-container");

cardList.renderItems();

//app and save new card 
btnSave.addEventListener("click", (e) => {
    e.preventDefault();

    const newCard = {
        name: titleValor.value.trim(),
        link: linkValor.value.trim(),
    };
    cardList._items.unshift(newCard);

    // card NUEVA PARA ABrir
    const newCardData = new Card(newCard, "#post-template", (cardData) => {
        imagePopup.open({ link: cardData.link, name: cardData.name });
    });
    const cardElement = newCardData.generateCard();

    // contenedor
    cardList.addItem(cardElement);
    cardList._container.prepend(cardElement);


    titleValor.value = "";
    linkValor.value = "";

    submitPopup.close();
});


btnEdit.addEventListener("click", () => {
    const currentUser = userInfo.getUserInfo();
    nameInput.value = currentUser.name;
    bioInput.value = currentUser.job;
    editPopup.open();
});

btnSubmi.addEventListener("click", () => {

    submitPopup.open();
});

// submit info of editprofile  
form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("usuareProfile").textContent = nameInput.value.trim();
    document.getElementById("bioProfile").textContent = bioInput.value.trim();
    editPopup.close();
});
//INSTANCIAS POPUPWITHFORM 
const editPopupW = new PopupWithForm('#edit', (inputValues) => {
    userInfo.setUserInfo({
        name: inputValues.name,
        job: inputValues.bio
    });
});
editPopupW.setEventListeners();

// Popup de agregar nueva tarjeta
const submitPopupW = new PopupWithForm('#update', (inputValues) => {
    const newCard = {
        name: inputValues.title,
        link: inputValues.link
    };

    const cardElement = new Card(newCard, "#post-template", (cardData) => {
        document.getElementById("modalImage").src = cardData.link;
        document.getElementById("modalImage").alt = cardData.name;
        document.getElementById("modalFooter").textContent = cardData.name;
        imagePopup.open();
    }).generateCard();

    cardList.addItem(cardElement);
});
submitPopupW.setEventListeners();
