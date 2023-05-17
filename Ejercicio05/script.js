// Programación Web 2 - 2023 A
// Melsy Melany Huamaní Vargas

document.getElementById("formTabla").addEventListener("submit", function(event) {
    document.getElementById("divTabla").style.display = "block";
    document.getElementById("divSuma").style.display = "none";

    event.preventDefault();
    let cNumeros = parseInt(document.getElementById("cantNumeros").value);
    crearTabla(cNumeros);
});

document.getElementById("formSuma").addEventListener('submit', function(event) {
    document.getElementById("divSuma").style.display = "block";

    event.preventDefault();
    calcularSuma();
});

function crearTabla(cNumeros) {
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = '';

    let fila = tabla.insertRow();
    let header = fila.insertCell();
    header.textContent = "Numeros";

    for (let i = 0; i < cNumeros; i++) {
        let nfila = tabla.insertRow();
        let celda = nfila.insertCell();
        var input = document.createElement("input");
        input.type = "number";
        celda.appendChild(input);
    }
}

function calcularSuma() {
    var inputs = document.querySelectorAll('#tabla input');
    var suma = 0;
    for (var i = 0; i < inputs.length; i++) {
        suma += parseInt(inputs[i].value);
    }
    document.getElementById("resultadoSuma").textContent = suma;
}
