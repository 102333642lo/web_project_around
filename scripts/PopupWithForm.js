import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit; // Callback 
        this._form = this._popup.querySelector('form');

        // Todos los inputs del formulario
        this._inputList = Array.from(this._form.querySelectorAll('input'));
    }

    // los valores de los inputs
    _getInputValues() {
        const values = {};
        this._inputList.forEach(input => {
            values[input.name] = input.value;
        });
        return values;
    }


    setEventListeners() {
        super.setEventListeners(); // cierre x y ESC

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues()); // enviar datos
            this.close()
        });
    }
    close() {
        super.close();
        this._form.reset();

    }
}
