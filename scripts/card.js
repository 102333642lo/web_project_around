


export class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick; // callback 
    }

    // Obtener template
    _getTemplate() {
        return document
            .querySelector(this._templateSelector)
            .content
            .querySelector(".card")
            .cloneNode(true);
    }


    // Crear card
    generateCard() {
        this._element = this._getTemplate();

        this._imageElement = this._element.querySelector(".card__image");
        this._titleElement = this._element.querySelector(".card__footer");
        this._likeButton = this._element.querySelector(".card__like");
        this._deleteButton = this._element.querySelector(".card__delet");

        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._titleElement.textContent = this._name;

        this._setEventListeners();

        return this._element;
    }

    // Like
    _handleLikeClick() {
        this._likeButton.classList.toggle("card__like_active");
    }

    // 🗑 Delete
    _handleDeleteClick() {
        this._element.remove();
        this._element = null;
    }


    // Eventos
    _setEventListeners() {
        this._likeButton.addEventListener("click", () => this._handleLikeClick()
        );

        this._deleteButton.addEventListener("click", () => this._handleDeleteClick()
        );

        this._imageElement.addEventListener("click", () => {
            if (this._handleCardClick) {
                this._handleCardClick({ name: this._name, link: this._link });
            }
        });
    }

} 
