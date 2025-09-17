# Tripleten web_project_around
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



