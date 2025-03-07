// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco antes y después

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Mostrar mensaje de error
        return; // Detener la ejecución de la función si el campo está vacío
    }
        // Actualizar el array de amigos
        listaDeAmigos.push(nombre);

        // Limpiar el campo de entrada
        inputAmigo.value = "";
    
        // Llamar a la función para actualizar la lista en la interfaz
        actualizarLista();
    }        
    // Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let listaAmigosUI = document.getElementById("listaAmigos");
    listaAmigosUI.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array y agregar cada nombre a la lista en la interfaz
    listaDeAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosUI.appendChild(li);
    });
}