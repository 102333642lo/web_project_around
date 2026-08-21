import "../scripts/formvalidator.js";
import { Card } from "../scripts/card.js";
import Section from "../scripts/Section.js";
import Popup from "../scripts/Popup.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";
import Api from "../scripts/Api.js";
import PopupWithConfirmation from "../scripts/PopupWithConfirmation.js";




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
const deletPopup = new PopupWithConfirmation('#delet');

//cramos el token y la API
const token = "b3c1de05-1a2a-4f4a-89cd-93c6cd516e11";

const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1",
    headers: {
        authorization: token,
        "Content-Type": "application/json",
    },
});

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
imagePopup.setEventListeners();
deletPopup.setEventListeners();

// muestra la ubicacion de los datos para mostarlos en el form 
const userInfo = new UserInfo({
    nameSelector: '#usuareProfile',
    workSelector: '#bioProfile',
    avatarSelector: '.profile__imagen'
});
let cardList;

let currentUser;
//avarat
const avatarPopup = new PopupWithForm("#avatar", (inputValues) => {
    const button = document.querySelector("#saveAvatar");

    button.textContent = "Guardando...";
    const data = {
        avatar: inputValues.avatar,
    };

    api.editAvatar(data)
        .then((userData) => {
            console.log("AVATAR ACTUALIZADO:", userData);
            currentUser = userData;

            userInfo.setUserInfo({
                name: userData.name,
                work: userData.about,
                avatar: userData.avatar,
            });

            avatarPopup.close();
        })
        .catch((err) => {
            console.log("ERROR AL CAMBIAR AVATAR:", err);
        });
});
avatarPopup.setEventListeners();

const openAvatar = document.getElementById("openAvatar");

openAvatar.addEventListener("click", (evt) => {
    evt.preventDefault();
    avatarPopup.open();
});


//INSTANCIAS POPUPWITHFORM 
const editPopupW = new PopupWithForm("#edit", (inputValues) => {
    const data = {
        name: inputValues.name,
        about: inputValues.bio,
    };
    const button = document.querySelector("#submitForm");

    button.textContent = "Guardando...";

    //muestra en la consola la respuesta el POST CUANDO SE EDITA EL USUARIO 
    api.editUserInfo(data)
        .then((data) => {
            console.log("RESPUESTA PATCH:", data);

            userInfo.setUserInfo({
                name: data.name,
                work: data.about,
            });
        })
        .catch((err) => {
            console.log("ERROR PATCH:", err);
        });
});

editPopupW.setEventListeners();

// card en la pagina y se muatra en el servidor y la consola con las caractelisticas de card 
//api.getInitialCards()
Promise.all([
    api.getUserInfo(),
    api.getInitialCards()
])
    .then(([user, cards]) => {
        currentUser = user;

        console.log("MI USUARIO:", currentUser);
        userInfo.setUserInfo({
            name: user.name,
            work: user.about,
            avatar: user.avatar
        });

        cardList = new Section({
            items: cards,

            renderer: (item) => {
                const isOwner = item.owner === currentUser._id;

                console.log("CARD OWNER:", item.owner);
                const card = new Card(
                    item,
                    "#post-template",

                    // IMAGEN
                    (cardData) => {
                        imagePopup.open({
                            link: cardData.link,
                            name: cardData.name,
                        });
                    },

                    // ELIMINAR
                    (cardId, cardElement) => {
                        deletPopup.setSubmitAction(() => {
                            api.deleteCard(cardId)
                                .then(() => {
                                    cardElement.remove();
                                    deletPopup.close();
                                    console.log("SE ELIMINÓ");
                                })
                                .catch((err) => {
                                    console.log("ERROR AL ELIMINAR:", err);
                                });
                        });

                        deletPopup.open();
                    },

                    // LIKE
                    (cardId, isLiked) => {
                        if (isLiked) {
                            return api.deleteLikeCard(cardId)
                                .then((cardData) => {
                                    console.log("LIKE ELIMINADO:", cardData);
                                    return cardData.isLiked;
                                });
                        }

                        return api.likeCard(cardId)
                            .then((cardData) => {
                                console.log("LIKE AGREGADO:", cardData);
                                return cardData.isLiked;
                            });
                    },

                    // usuario
                    isOwner
                );

                const cardElement = card.generateCard();
                cardList.addItem(cardElement);
            },
        }, "#cards-container");

        cardList.renderItems();

        console.log("MIS TARJETAS:", cards);
    })
    .catch((err) => {
        console.log("ERROR:", err);
    });


btnEdit.addEventListener("click", () => {
    const currentUser = userInfo.getUserInfo();
    nameInput.value = currentUser.name;
    bioInput.value = currentUser.work;
    editPopupW.open();
});

btnSubmi.addEventListener("click", () => {

    submitPopup.open();
});

// Popup de agregar nueva tarjeta con la aacion de eliminar 
const submitPopupW = new PopupWithForm('#update', (inputValues) => {

    const button = document.querySelector("#save");

    button.textContent = "Creando...";
    const newCard = {
        name: inputValues.title,
        link: inputValues.link
    };
    api.addCard(newCard)
        .then((cardData) => {
            console.log("NUEVA TERJETA", cardData);

            //crea una nueva card en el contenedor
            const cardElement = new Card(cardData, "#post-template", (cardData) => {
                imagePopup.open({
                    link: cardData.link,
                    name: cardData.name
                });
            }, //se crea la crajeta con la funcion de eliminar

                (cardId, cardElement) => {
                    deletPopup.setSubmitAction(() => {
                        api.deleteCard(cardId)
                            .then(() => {
                                cardElement.remove();
                                deletPopup.close();
                                console.log("SE ELIMINO CORRECTAMETE ")
                            })
                            .catch((err) => {
                                console.log("ERRO ED ELIMINAR", err);

                            });
                    });
                    deletPopup.open();
                },  //  Like
                (cardId, isLiked) => {
                    if (isLiked) {
                        return api.deleteLikeCard(cardId)
                            .then((cardData) => {
                                console.log("LIKE ELIMINADO:", cardData);
                                return cardData.isLiked;
                            });
                    }

                    return api.likeCard(cardId)
                        .then((cardData) => {
                            console.log("LIKE ", cardData);
                            return cardData.isLiked;
                        });
                }, true
            ).generateCard();

            cardList._container.prepend(cardElement);

            submitPopupW.close();
        })
        .catch((err) => {
            console.log("ERROR AL CREAR TARJETA:", err);
        });
});

submitPopupW.setEventListeners();

