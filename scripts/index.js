const likeButtons = document.querySelectorAll('.card__btn');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('like');
        button.classList.toggle('dislike'); 3666
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

