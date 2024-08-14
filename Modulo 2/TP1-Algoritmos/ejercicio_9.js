// Crear un programa que recibe 5 (cinco) notas de un alumno, las mismas deben ser ingresadas por el
// usuario y ser naturales < 11. Debe calcular el promedio e imprimir en pantalla si el valor de media es < 5
// “Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente”

let prom = 0;
prom = Promedio_Alumnos();
if (prom >= 6) {
    if (prom <= 8) {
        document.write("Aprobado");
    } else {
        document.write("Sobresaliente");
    }
} else {
    document.write("Reprobado");
}

function Promedio_Alumnos() {
  let notas = 0, i = 0, promedio = 0;
  while (i < 5) {
    notas = parseInt(prompt(`Ingrese una nota[${i + 1}]`, "---"));
    if (notas < 11 && notas > 0) {
      promedio = promedio + notas;
      i++;
    } else {
      alert("Porfavor ingrese nuevamente");
    }
  }
  promedio = promedio / 5;
  return promedio;
}
