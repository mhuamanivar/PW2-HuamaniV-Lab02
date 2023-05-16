// Programación Web 2 - 2023 A
// Melsy Melany Huamaní Vargas

function invertirTexto() {
    let t = document.getElementById("texto").value;
    let tInvertido = t.split("").reverse().join("");
    document.getElementById("textoInvertido").innerHTML = tInvertido;

    document.getElementById("result").style.display = "block";
}