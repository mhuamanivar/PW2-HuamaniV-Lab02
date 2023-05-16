// Programación Web 2 - 2023 A
// Melsy Melany Huamaní Vargas

function obtenerCodigo() {
    let l = document.getElementById("link").value;
    let lSeparado = l.split("/").reverse();
    let cMeet = lSeparado[0].split("-").join("");
    document.getElementById("codigoMeet").innerHTML = cMeet;

    document.getElementById("result").style.display = "block";
}