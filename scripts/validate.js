export const validationConfig = {
    formSelector: ".editor__form-edit, .submit__form-submit",
    inputSelector: ".editor__text, .submit__name, .submit__img",
    submitButtonSelector: ".editor__btn-submit, .submit__btn-submit",
    inactiveButtonClass: "activo",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active"
};
export const enableValidation = (config) => {
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


    // Validación para el formulario
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => evt.preventDefault());
        setEventListeners(formElement, config);
    });

};
