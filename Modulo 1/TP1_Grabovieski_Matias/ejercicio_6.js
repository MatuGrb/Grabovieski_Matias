let meses, num;
meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
num = window.prompt("Ingrese un numero para mostrar en pantalla el mes", "---");
document.write(`El mes seleccionado es: ${meses[num - 1]}`);