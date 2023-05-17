// Melsy Melany Huamaní Vargas
// Programación Web 2

function arrayGenerator(n, min, max) {
  let a = [];
  for(let x = 0; x < n; x++){
    a.push(Math.ceil(Math.random()*(max - min) + min));
  }
  return a;
}

// Prueba para ejecutar la función
let arreglo = arrayGenerator(9,2,5);
console.log(arreglo);
