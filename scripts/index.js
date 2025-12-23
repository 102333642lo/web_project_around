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

const validationConfig = {
    formSelector: ".editor__form-edit, .submit__form-submit",
    inputSelector: ".editor__text, .submit__name, .submit__img",
    submitButtonSelector: ".editor__btn-submit, .submit__btn-submit",
    inactiveButtonClass: "activo",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active"
};

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
//show error 
const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.classList.add(config.errorClass);
    }
};

// Ocultar error
const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    if (errorElement) {
        errorElement.classList.remove(config.errorClass);
        errorElement.textContent = "";
    }
};
//message error
const getErrorMessage = (inputElement) => {
    // Si el campo está vacío y es obligatorio
    if (inputElement.validity.valueMissing) {
        return "Este campo es obligatorio";
    }
    // Si el texto es muy corto (menor al mínimo requerido)
    if (inputElement.validity.tooShort) {
        return `Por favor, escribe al menos ${inputElement.minLength} caracteres (actualmente tienes ${inputElement.value.length})`;
    }
    // Si el texto es muy largo (mayor al máximo permitido)
    if (inputElement.validity.tooLong) {
        return `Por favor, escribe máximo ${inputElement.maxLength} caracteres`;
    }
    // Si el formato del valor no es válido (ej: email, url, etc)
    if (inputElement.validity.typeMismatch) {
        // Mensaje específico para URLs inválidas
        if (inputElement.type === "url") {
            return "Por favor, introduce una URL válida (ejemplo: https://ejemplo.com/imagen.jpg)";
        }
        return "Por favor, introduce un formato válido";
    }
    // Si no hay un error específico, uso el mensaje predeterminado del navegador
    return inputElement.validationMessage;
};

// Val.campo individual
const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
        const errorMessage = getErrorMessage(inputElement);
        showInputError(formElement, inputElement, errorMessage, config);
    } else {
        hideInputError(formElement, inputElement, config);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid);
};

// botón de envío
// Habilito o deshabilito Funciona  para el botón de "Guardar" y "Crear" POR ME SIDO DE activo q lo tiene los dos ID en el css
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.remove("activo");
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.add("activo");
        buttonElement.disabled = false;
    }
};
;
// Asignar validación a un formulario
const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    if (inputList.length === 0 || !buttonElement) return;

    toggleButtonState(inputList, buttonElement, config);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
        });
        inputElement.addEventListener("blur", function () {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
        });
    });
};

const enableValidation = (config) => {
    // Validación para el formulario
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => evt.preventDefault());
        setEventListeners(formElement, config);
    });

};

enableValidation(validationConfig);




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