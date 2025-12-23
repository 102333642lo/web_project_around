import { enableValidation, validationConfig } from "./validate.js";
enableValidation(validationConfig);

//open form edit-name and description  
const btnEdit = document.getElementById("openEdit");
const modal = document.getElementById("edit");
const close = document.getElementById("closeEdit");
const form = document.getElementById("formProfile");
const nameInput = document.getElementById("name");
const bioInput = document.getElementById("bio");
const btnSubmit = document.getElementById("submitForm")
// open form sutmint new location -title and link 
const btnSubmi = document.getElementById("openSutmit");
const modalSubmit = document.getElementById("update");
const closeSubmit = document.getElementById("closeSubmit");
const submit = document.getElementById("updateFormS")
const titleValor = document.getElementById("title");
const linkValor = document.getElementById("link");
const btnSave = document.getElementById("save")
//open card modal image 
const template = document.getElementById("post-template");
const card = document.getElementById("cards-container");
const postCard = document.createDocumentFragment();
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalFooter = document.getElementById("modalFooter");
const closeImageBtn = document.getElementById("closeImage");


//  image for default 
const cardContent = [
    {
        name: "Valle de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
];


// funtion open and close form edit 
btnEdit.addEventListener("click", () => {
    nameInput.value = document.getElementById("usuareProfile").textContent;
    bioInput.value = document.getElementById("bioProfile").textContent;
    modal.style.display = "flex";
});
close.addEventListener("click", () => {
    modal.style.display = "none";
});

// funtion open and close form submit  
btnSubmi.addEventListener("click", () => {
    modalSubmit.style.display = "flex";
});
closeSubmit.addEventListener("click", () => {
    modalSubmit.style.display = "none";
});


formProfile.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const bio = bioInput.value.trim();

    document.getElementById("usuareProfile").textContent = name;
    document.getElementById("bioProfile").textContent = bio;

    modal.style.display = "none";
});


function activSave() {
    save.disabled = linkValor.value.trim() === "" || titleValor.value.trim() === "";
    save.classList.toggle("activo", !save.disabled);
}
const addCardEventListeners = (clone) => {
    clone.querySelector(".card__like").addEventListener("click", function (evt) {
        evt.target.classList.toggle("card__like_active");
    });
    clone.querySelector(".card__image").addEventListener("click", function (evt) {

        modalImage.src = evt.target.src;
        modalImage.alt = evt.target.alt;
        modalFooter.textContent = evt.target.alt;

        imageModal.style.display = "flex";
    });
    clone.querySelector(".card__delet").addEventListener("click", function (evt) {
        const cardDelet = evt.target.closest(".card");
        if (cardDelet) cardDelet.remove();
    });
}


save.addEventListener("click", function (e) {
    e.preventDefault();

    const link = document.querySelector(".submit__img").value.trim();
    const title = document.querySelector(".submit__name").value.trim();

    const clone = template.content.cloneNode(true);
    clone.querySelector("img").src = link;
    clone.querySelector("img").alt = title;
    clone.querySelector("h3").textContent = title;

    addCardEventListeners(clone);


    card.prepend(clone);

    linkValor.value = "";
    titleValor.value = "";
    activSave();

    modalSubmit.style.display = "none";


});


cardContent.forEach(el => {

    const clone = template.content.cloneNode(true);

    clone.querySelector("img").src = el.link;
    clone.querySelector("img").alt = el.name;
    clone.querySelector("h3").textContent = el.name;

    addCardEventListeners(clone);

    postCard.appendChild(clone);
});
card.appendChild(postCard);


closeImage.addEventListener("click", () => {
    imageModal.style.display = "none";
});
//close modal-- click out box 
function addCloseOnClickOutside(modalElement) {
    modalElement.addEventListener("click", (e) => {
        if (e.target == modalElement) {
            modalElement.style.display = "none";
        }
    });
}
// se conecta para q sepa q modal tiene q serrar con esta funcion 
addCloseOnClickOutside(imageModal);
addCloseOnClickOutside(edit);
addCloseOnClickOutside(update);

//close modal-- tecle Esc
function addCloseOnEsc(modalElement) {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modalElement.style.display = "none";
        }
    });
}

addCloseOnEsc(imageModal);
addCloseOnEsc(modal);
addCloseOnEsc(modalSubmit);