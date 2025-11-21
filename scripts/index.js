const likeButtons = document.querySelectorAll('.card__btn');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('like');
        button.classList.toggle('dislike');
    });
});

const btnEdit = document.getElementById("openEdit");
const modal = document.getElementById("edit");
const close = document.getElementById("closeEdit");
const form = document.getElementById("formProfile");
const nameValor = document.getElementById("name");
const bioValor = document.getElementById("bio");
const btnSubmit = document.getElementById("submitForm")


btnEdit.addEventListener("click", () => {
    modal.style.display = "flex";
});
close.addEventListener("click", () => {
    modal.style.display = "none";
});

document.getElementById('formProfile').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameValor.value.trim();



    const bio = bioValor.value.trim();
    document.getElementById('usuareProfile').textContent = name;
    document.getElementById('bioProfile').textContent = bio;
    edit.style.display = 'none';
});


function validar() {
    let desabilitar = false

    if (formProfile.name.value == "") {
        desabilitar = true;
    }
    if (formProfile.bio.value == "") {
        desabilitar = true;
    } if (desabilitar == true) {
        submitForm.disabled = true;
        submitForm.classList.remove("activo");
    } else {
        submitForm.disabled = false;
        submitForm.classList.add("activo");
    }
}

formProfile.addEventListener("keyup", validar)

const template = document.getElementById("post-template");
const card = document.getElementById("cards-container");
const postCard = document.createDocumentFragment();


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

cardContent.forEach(el => {

    const clone = template.content.cloneNode(true);

    clone.querySelector("img").src = el.link;
    clone.querySelector("img").alt = el.name;
    clone.querySelector("h3").textContent = el.name;

    clone.querySelector(".card__like").addEventListener("click", function (evt) {
        evt.target.classList.toggle("card__like_active");
    });
    postCard.appendChild(clone);
});
card.appendChild(postCard);


