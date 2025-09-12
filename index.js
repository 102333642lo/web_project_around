const cardlike  = document.querySelectorAll('.card__btn')


const likeButtons = document.querySelectorAll('.card__btn');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('like');
    button.classList.toggle('dislike');
  });
});

const btnEditar = document.getElementById("openEditar");
 const modal = document.getElementById("editor"); 
 const cerrar = document.getElementById("closeEditor"); 
 const form = document.getElementById("formPerfil"); 
 const nombreValor = document.getElementById("name");
  const bioValor = document.getElementById("bio"); 
   const btnEnviar = form.querySelector("button[type='submit']");
   
   
 btnEditar.addEventListener("click", () => {
   modal.style.display = "flex";
   }); 
   cerrar.addEventListener("click", () => { 
    modal.style.display = "none"; });
    
     document.getElementById('formPerfil').addEventListener('submit', (e) => { e.preventDefault();
       const nombre = nombreValor.value.trim();
        const bio = bioValor.value.trim(); 
        document.getElementById('usuarioProfile').textContent = nombre; 
      document.getElementById('descriptionProfile').textContent = bio; 
      editor.style.display = 'none';
});
 
