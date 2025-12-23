# Tripleten web_project_around
proyacto, sprit 8
https://102333642lo.github.io/web_project_around/
Explicación del proyecto en JavaScript

En este proyecto desarrollamos una interfaz similar a una red social, donde el usuario puede interactuar con distintas publicaciones y también editar su perfil. A lo largo del trabajo implementamos varias funciones usando JavaScript para agregar interactividad, controlar ventanas emergentes (modales) y gestionar dinámicamente las imágenes publicadas.
La página incluye un botón que permite modificar el nombre del perfil se utiliza addEventListener para detectar cuando el usuario hace clic en el botón de Editar al presionar este botón, se abre una ventana emergente (modal).
En el modal, el usuario puede ingresar un nuevo nombre una vez confirmado el cambio, JavaScript reemplaza el nombre mostrado en la interfaz principal.

Botón para agregar nuevas publicaciones
En esta versión del proyecto se añadió funcionalidar al botón con el símbolo “+”, que permite crear una nueva publicación al hacer clic en este botón se abre una ventana emergente el usuario puede escribir un título para la publicación. También puede ingresar un enlace (URL) de una imagen cuando se hace clic en "crear", la publicación se genera dinámicamente en la página usando JavaScript este proceso evita cargar demasiadas imágenes directamente en el HTML, ya que las publicaciones se crean desde el archivo index.js usando plantillas y variables. Todas las imágenes iniciales que estaban escritas en el HTML fueron eliminadas para optimizar el documento
 y se  guardan los títulos y enlaces de cada imagen dentro del archivo JavaScript para mostrar cada publicación en pantalla se usa un forEach, que recorre la lista y crea la estructura de cada tarjeta (card) de manera automática esto hace que agregar nuevas sea más sencillo y ordenado.

para eliminar también se implementó un botón para borrar una imagen cada publicación tiene un botón de eliminar se usa un if dentro del evento de clic para verificar cuál publicación fue presionada al confirmarse la acción, se utiliza 
.remove() para borrar el elemento directamente del DOM.


Para mejorar la experiencia, al hacer clic en una foto esta se abre en grande dentro de un modal se creó un nuevo <div> en el HTML que funciona como el contenedor del modal, un botón de cierre,la imagen, el título de la imgen en JavaScript se seleccionan todos estos elementos con const y getElementById().
Con querySelector() se detecta el clic en cualquier imagen con la clase original de las publicaciones al hacer clic, el modal se muestra cambiando su estilo a display: flex se cargan dinámicamente la imagen seleccionada y su título dentro del modal para cerrar, se utiliza nuevamente un botón que cambia el estilo del modal a display: none.

proyacto, sprit 7
https://102333642lo.github.io/web_project_around/


Explicación del proyecto en JavaScript

En este proyecto estamos utilizando por primera vez JavaScript para dar interactividad al perfil de una red social. El archivo principal es index.js, donde se encuentran las funciones que controlan el comportamiento de la página.

La primera funcionalidad implementada es la de dar "me gusta" a una imagen.

Se seleccionan todos los botones de "me gusta" y se programan para que, al hacer clic sobre ellos, se cambie el ícono del corazón (por ejemplo, de negro a rojo) le decimos q lea cada boton y verifique q si es llamado por un click se active y cambie el icono 

De esta forma, el usuario puede interactuar directamente con las publicaciones.

Botón "Editar perfil"
En la interfaz se incluye un botón llamado Editar, que permite modificar la información del usuario.
Al presionarlo, se abre una ventana emergente (modal) en la cual se puede editar tanto el nombre de usuario como la biografía.
Para identificar y manipular cada elemento desde JavaScript, se asignan IDs únicos en el código HTML, los cuales se acceden mediante getElementById().

Apertura y cierre del formulario
El formulario se abre cuando el usuario hace clic en el botón con ID openEdit.
De igual forma, se cierra al presionar el botón con ID closeEdit.
Esto garantiza que el usuario tenga un control claro sobre cuándo editar su información.

Actualización de la información del perfil
El formulario permite que, al ingresar datos en los campos de texto, se actualice la información en el perfil.
Específicamente, los campos de nombre de usuario y biografía son reemplazados por los nuevos valores introducidos en el formulario.

Activación del botón "Guardar"
Para mejorar la experiencia del usuario y evitar errores, el botón Guardar se encuentra deshabilitado por defecto.
El sistema valida que los campos del formulario estén completos.
Si alguno está vacío → el botón permanece deshabilitado.
Si todos los campos están llenos → el botón se activa automáticamente.
De esta manera se asegura que solo se pueda guardar la información cuando el formulario esté correctamente completado.



