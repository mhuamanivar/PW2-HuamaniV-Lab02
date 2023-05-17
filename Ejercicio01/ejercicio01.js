// Programación Web 2 - 2023 A
// Melsy Melany Huamaní Vargas

window.onload = function() {
    let fechaActual = new Date();
    let numDia = fechaActual.getDay();
    let diaSem = diaSemana(numDia);

    console.log(numDia);
    console.log(diaSem);

    function diaSemana (n) {
        let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        let dia = diasSemana[n];
        return dia;
    }

    document.getElementById("diaSemana").textContent = numDia + " → " + diaSem;
}
