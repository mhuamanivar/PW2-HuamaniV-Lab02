// Programación Web 2 - 2023 A
// Melsy Melany Huamaní Vargas

window.onload = function() {
    let fechaActual = new Date();
    let fechaArequipa = new Date(fechaActual.getFullYear(), 7, 15);

    if (fechaActual > fechaArequipa) {
        fechaArequipa.setFullYear(fechaActual.getFullYear+1);
    }

    let dRestantes = Math.ceil((fechaArequipa.getTime() - fechaActual.getTime()) / 1000 / 3600 / 24);

    document.getElementById("diasRestantes").textContent = dRestantes+" días";
}