// 1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
// 2. Imprimir estos elementos de menor a mayor cantidad de letras.
// 3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta, multiplicación y
// división) realizadas con los dos elementos numéricos

var valores = [true, false, 2, "hola", "mundo", 3, "char"];
let filtrado = [],
  orden = 1,
  aux,
  num = 0,
  i;
for (i = 0; i < valores.length; i++) {
  if (typeof valores[i] == "string") {
    filtrado.push(valores[i]);
    num++;
  }
}
while (orden < num) {
  for (i = 0; i < num - orden; i++) {
    if (filtrado[i].length > filtrado[i + 1].length) {
      aux = filtrado[i];
      filtrado[i] = filtrado[i + 1];
      filtrado[i + 1] = aux;
    }
  }
  orden++;
}
for (i = 0; i < filtrado.length; i++) {
    document.write(filtrado[i] + " ");
}

document.write (`<br>La suma es: ${valores[2]+valores[5]}`);
document.write (`<br>La diferencia es: ${valores[2]-valores[5]}`);
document.write (`<br>La multiplicación es: ${valores[2]*valores[5]}`);
document.write (`<br>La división es: ${valores[2]/valores[5]}`);