const formElement = document.querySelector(".editor__form-edit, .submit__form-submit");
export const validationConfig = {
    inputSelector: ".editor__text, .submit__name, .submit__img",
    submitButtonSelector: ".editor__btn-submit, .submit__btn-submit",
    activeButtonClass: "activo",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active"
};
export class FormValidator {
    constructor(config, formElement) {
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._activeButtonClass = config.activeButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._formElement = formElement;  // El formulario a validar
    }
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);

        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);

    };

    // Ocultar error
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);

        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = "";

    };
    //message error
    _getErrorMessage(inputElement) {
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
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {

            this._showInputError(inputElement, this._getErrorMessage(inputElement));
        } else {
            this._hideInputError(inputElement);
        }
    };


    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => !inputElement.validity.valid);
    };

    // botón de envío
    // Habilito o deshabilito Funciona  para el botón de "Guardar" y "Crear" POR ME SIDO DE activo q lo tiene los dos ID en el css
    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.remove(this._activeButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.add(this._activeButtonClass);
            buttonElement.disabled = false;
        }
    };
    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

        this._toggleButtonState(inputList, buttonElement);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
            inputElement.addEventListener("blur", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    enableValidation() {
        this._setEventListeners();
    }
}

const formEdit = document.querySelector(".editor__form-edit");
const FromValidator1 = new FormValidator(validationConfig, formEdit);
FromValidator1.enableValidation();

const formSubmit = document.querySelector(".submit__form-submit");
const FromValidator2 = new FormValidator(validationConfig, formSubmit);
FromValidator2.enableValidation()