/*
    Curso Lógica de programación: Challenge amigo secreto
    Desafío amigo secreto

    
    Roberto Carlos Martinez Sanchez
    16/03/2025
*/
let amigos = []; // Array para almacenar los nombres de los amigos.

function agregarAmigo() {
    let input = document.getElementById("nombre"); // Obtiene el campo de entrada de texto.
    let nombre = input.value.trim(); // Obtiene el valor del input y elimina espacios en blanco al inicio y al final.

    if (nombre === "") { // Verifica si el usuario ingresó un nombre.
        alert("Por favor, inserte un nombre."); 
        return; // Sale de la función sin agregar nada.
    }

    amigos.push(nombre);
    actualizarLista(); // Llama a la función para actualizar la lista visualmente.
    input.value = ""; // Limpia el campo de entrada después de agregar el nombre.
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtiene la lista donde se mostrarán los nombres.
    lista.innerHTML = ""; // Borra el contenido actual de la lista para evitar duplicados.

    amigos.forEach(nombre => { // Recorre el array "amigos" y crea un elemento `<li>` por cada amigo.
        let li = document.createElement("li"); // Crea un nuevo elemento de lista (`<li>`).
        li.textContent = nombre;
        lista.appendChild(li); 
    });
}

function sortearAmigo() {
    if (amigos.length === 0) { // Verifica si hay nombres en la lista antes de hacer el sorteo.
        alert("Agrega al menos un nombre antes de sortear."); 
        return; // Sale de la función si no hay amigos agregados.
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio dentro del rango del array.
    let amigoSeleccionado = amigos[indiceAleatorio]; // Obtiene el nombre del amigo seleccionado.

    // el resultado es el siguiente
    document.getElementById("resultado").textContent = `El amigo secreto es: ${amigoSeleccionado}`;
}
