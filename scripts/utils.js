
const closeImageBtn = document.getElementById("closeImage");
const imageModal = document.getElementById("imageModal");
const modalSubmit = document.getElementById("update");
const modal = document.getElementById("edit");
//open form edit-name and description  
const btnEdit = document.getElementById("openEdit");
const close = document.getElementById("closeEdit");
const form = document.getElementById("formProfile");
const nameInput = document.getElementById("name");
const bioInput = document.getElementById("bio");

// open form sutmint new location -title and link
const btnSubmi = document.getElementById("openSutmit");
const closeSubmit = document.getElementById("closeSubmit");

// funtion open and close form editprofile 
btnEdit.addEventListener("click", () => {
    nameInput.value = document.getElementById("usuareProfile").textContent;
    bioInput.value = document.getElementById("bioProfile").textContent;
    modal.style.display = "flex";
});

close.addEventListener("click", () => {
    modal.style.display = "none";
});

// submit info of editprofile  
form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("usuareProfile").textContent = nameInput.value.trim();
    document.getElementById("bioProfile").textContent = bioInput.value.trim();

    modal.style.display = "none";
});

// funtion open and close form submit new post  
btnSubmi.addEventListener("click", () => {
    modalSubmit.style.display = "flex";
});

closeSubmit.addEventListener("click", () => {
    modalSubmit.style.display = "none";
});
// close imag wiht x
closeImageBtn.addEventListener("click", () => {
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
addCloseOnClickOutside(modal);
addCloseOnClickOutside(modalSubmit);

//close modal-- tecle Esc
function addCloseOnEsc() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            imageModal.style.display = "none";
            modal.style.display = "none";
            modalSubmit.style.display = "none";
        }
    });
}
addCloseOnEsc();
export { addCloseOnClickOutside, addCloseOnEsc };