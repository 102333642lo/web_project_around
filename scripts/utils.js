
const closeImageBtn = document.getElementById("closeImage");
const imageModal = document.getElementById("imageModal");
const modalSubmit = document.getElementById("update");
const modal = document.getElementById("edit");


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