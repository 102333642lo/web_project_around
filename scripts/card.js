


export class Card {
    constructor(data, templateSelector, handleCardClick, handleDeleteClick,
        handleLikeClick, isOwner) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._isLiked = data.isLiked;
        this._isOwner = isOwner;

        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick; // callback
        this._handleDeleteClickCallback = handleDeleteClick;
        this._handleLikeClickCallback = handleLikeClick;

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

        if (!this._isOwner) {
            this._deleteButton.remove();
        }

        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._titleElement.textContent = this._name;

        if (this._isLiked) {
            this._likeButton.classList.add("card__like_active");
        }

        this._setEventListeners();

        return this._element;
    }

    // Like
    _handleLikeClick() {
        if (this._handleLikeClickCallback) {
            this._handleLikeClickCallback(
                this._id,
                this._isLiked
            )
                .then((isLiked) => {
                    this._updateLikeState(isLiked);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    _updateLikeState(isLiked) {
        this._isLiked = isLiked;

        if (isLiked) {
            this._likeButton.classList.add("card__like_active");
        } else {
            this._likeButton.classList.remove("card__like_active");
        }
    }

    //  Delete
    _handleDeleteClick() {
        if (this._handleDeleteClickCallback) {
            this._handleDeleteClickCallback(this._id, this._element,
                this._isLiked);

        }

    }



    // Eventos
    _setEventListeners() {
        this._likeButton.addEventListener("click", () => {
            this._handleLikeClick()
        });


        this._deleteButton.addEventListener("click", () => {
            this._handleDeleteClick()
        });


        this._imageElement.addEventListener("click", () => {
            if (this._handleCardClick) {
                this._handleCardClick({ name: this._name, link: this._link });
            }
        });
    }

} 
