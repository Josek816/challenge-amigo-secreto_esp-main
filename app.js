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
        return; // Detener la ejecución si el campo está vacío
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

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
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosUI.appendChild(li);
    });
}
// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    let resultadoUI = document.getElementById("resultado");
    resultadoUI.innerHTML = `🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎁`;
}
