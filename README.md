# Tripleten web_project_around
proyacto, sprit 10
https://102333642lo.github.io/web_project_around/
Explicación de mi proyecto en JavaScript
En este proyecto nos enfocamos principalmente en el paradigma de Programación Orientada a Objetos (OOP). Para lograrlo, modificamos el código que ya teníamos y lo reorganizamos para que trabajara con clases, constructores y métodos, haciendo el proyecto más ordenado, reutilizable y fácil de mantener.
También utilizamos una técnica nueva que no habíamos usado en el proyecto anterior: exportar e importar archivos de JavaScript, lo que nos permitió dividir el código en diferentes archivos según su responsabilidad.
Estructura del proyecto
En el proyecto encontramos cuatro archivos principales de JavaScript:

  index.js
Este es el archivo principal del proyecto.
Aquí realizamos las importaciones de los demás archivos JavaScript.
En este archivo llamamos algunos módulos sin especificarlos directamente, ya que no necesitamos que devuelvan información, solo que ejecuten su funcionalidad.
En cambio, cuando trabajamos con Card, sí especificamos la importación porque este archivo sí devuelve información, como las tarjetas por defecto que se muestran en la plataforma.
Además, en index.js encontramos la función que permite crear una nueva card y colocarla al frente de las demás tarjetas, para que el usuario la vea inmediatamente.

  utils.js
En este archivo se encuentran las funciones reutilizables, especialmente las relacionadas con las ventanas modales.
Aquí manejamos:
Abrir y cerrar los modales
Cerrar el modal al hacer clic en el ícono de cierre
Cerrar con la tecla Esc
Cerrar al hacer clic fuera de la ventana modal
Todo esto se logra gracias a los detectores de eventos, mejorando la experiencia del usuario.

 card.js
Este archivo contiene la estructura de la clase Card, completamente orientada a objetos.
En el constructor trabajamos con todos los datos necesarios de la tarjeta, y también usamos _templateSelector para seleccionar el template donde se mostrará la información en el HTML.
Dentro de la clase tenemos:
Métodos privados, donde obtenemos el template y preparamos la tarjeta
Un método público, que se encarga de devolver toda la información de la tarjeta ya lista para insertarse en el HTML
También se llama al método privado this._setEventListeners(), donde agregamos los addEventListener para cada acción de la tarjeta:
Dar like
Eliminar la tarjeta
Abrir la imagen en grande
Esto hace que cada card tenga su propia lógica y comportamiento independiente.

  FormValidator.js
En este archivo manejamos toda la validación de los formularios.
Aquí encontramos la clase FormValidator, que en su constructor recibe toda la configuración previamente organizada en validationConfig.
Dentro de la clase tenemos varios métodos privados importantes:
_showInputError: muestra los mensajes de error
_hideInputError :oculta los errores
_getErrorMessage : identifica y muestra qué tipo de error tiene cada campo
_hasInvalidInput :revisa todos los campos del formulario.( Este método devuelve true si al menos uno de los inputs es inválido, y false si todos son correctos.)
_toggleButtonState: controla el estado del botón de envío. Este mismo botón funciona tanto para “Guardar” como para “Crear”, ya que ambos comparten el mismo estilo en el CSS.
_setEventListeners: conecta toda la validación con los eventos, tiene detectores de eventos input y blur a cada campo, para que la validación ocurra mientras el usuario escribe o cuando sale del campo.
Y terminamos con  el método público enableValidation que activar toda la validación llamando a _setEventListeners.
Estos métodos funcionan de forma similar al proyecto anterior, pero ahora están mejor organizados dentro de una clase, lo que hace el código más limpio 


proyacto, sprit 9
https://102333642lo.github.io/web_project_around/
Explicación del proyecto en JavaScript

Explicación del proyecto

En este proyecto nos enfocamos en la validación de formularios, con el objetivo de hacer el código más organizado, limpio y fácil de mantener. Además, se incluyeron algunos atajos de teclado, lo que mejora la experiencia del usuario al interactuar con la web.

Dentro de la carpeta scripts encontramos dos archivos principales: index.js y validate.js.
En el archivo index.js se gestiona la lógica principal de la web, sin embargo, lo primero que analizamos es el archivo validate.js, ya que allí se concentra toda la lógica relacionada con la validación de los formularios. Esto nos permite continuar la explicación de una manera más organizada.

Archivo validate.js
En validate.js encontramos, en primer lugar, un objeto de configuración donde se definen varias constantes con nombres descriptivos. Estas constantes se utilizan posteriormente dentro de las funciones de validación, lo que facilita la interacción con los formularios y hace el código más reutilizable.
La primera función importante es showInputError, donde indicamos que, cuando una validación no se cumple, se debe mostrar un mensaje de error asociado al input correspondiente mediante la clase .${inputElement.id}-error.Por el contrario, la función hideInputError se encarga de ocultar el mensaje de error cuando el campo cumple correctamente con las validaciones.
También contamos con la función getErrorMessage, donde se definen los distintos mensajes de error. Por ejemplo:Si el campo está vacío, se muestra un mensaje indicando que es obligatorio.Si no se cumplen los caracteres mínimos o máximos, se muestra un mensaje informativo. En el caso del campo de tipo URL, si el formato no es válido, se muestra un mensaje específico indicando el error.
La función checkInputValidity se encarga de validar cada campo de forma individual. Aquí se verifica si el input tiene un valor válido; en caso contrario, se muestra el error correspondiente, y si es válido, el error se oculta.Luego utilizamos la constante hasInvalidInput, que retorna un valor booleano indicando si alguno de los campos del formulario es inválido.
Esta función es utilizada dentro de toggleButtonState, donde se habilita o deshabilita el botón de envío. Si existe algún campo inválido, el botón permanece desactivado; de lo contrario, el botón se activa.
A continuación, encontramos la función setEventListeners, donde se asignan los eventos de validación a los formularios. Aquí se indica que, si los campos no contienen información válida, el botón de envío no se activa.En esta función se utilizan dos eventos importantes:
input, que valida el campo mientras el usuario escribe y muestra el mensaje de error correspondiente si el valor no es válido.
blur, que valida si el usuario deja el campo vacío al salir de él y muestra el error correspondiente.
finalmente, se utiliza formList junto con un array para recorrer todos los formularios y evitar que la página se recargue al enviarlos, manteniendo así el comportamiento controlado mediante JavaScript.
Archivo index.js
De regreso en index.js, encontramos dos funciones adicionales relacionadas con la experiencia del usuario.
La primera permite cerrar los modales al hacer clic fuera de ellos, utilizando una función que recibe como argumento modalElement y detecta los clics fuera del contenido del modal. Esta función se vincula tanto a los formularios como al modal de imagen.
La segunda funcionalidad es un atajo de teclado, donde se escucha el evento de la tecla Escape (ESC). Cada vez que el usuario presiona esta tecla, el modal activo se cierra automáticamente. Esta función también se vincula a los formularios y al modal de imagen

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



