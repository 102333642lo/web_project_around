import Popup from "../scripts/Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._form = this._popup.querySelector(".delet__form-delet");
        this._submitButton = this._popup.querySelector(".delet__btn-delet");

        this._handleSubmit = null;
    }

    setSubmitAction(action) {
        this._handleSubmit = action;
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();

            if (this._handleSubmit) {
                this._handleSubmit();
            }
        });
    }
}