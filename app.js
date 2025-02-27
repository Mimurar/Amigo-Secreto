// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para sortear.");
        return;
    }
    
    let sorteados = [...amigos];
    let resultado = {};
    
    for (let i = 0; i < amigos.length; i++) {
        let posibles = sorteados.filter(nombre => nombre !== amigos[i]);
        
        if (posibles.length === 0) {
            return sortearAmigo(); // Reiniciar si hay un problema en la asignación
        }
        
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado[amigos[i]] = elegido;
        sorteados = sorteados.filter(nombre => nombre !== elegido);
    }
    
    mostrarResultados(resultado);
}

function mostrarResultados(resultado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    for (const [amigo, asignado] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        resultadoLista.appendChild(li);
    }
}
