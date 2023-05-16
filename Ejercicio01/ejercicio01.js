// Programación Web 2 - 2023 A
// Melsy Melany Huamaní Vargas

let fechaActual = new Date();
let numDia = fechaActual.getDay();

console.log(diaSemana(numDia));

function diaSemana (n) {
    let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let dia = diasSemana[n];
    return dia;
}
