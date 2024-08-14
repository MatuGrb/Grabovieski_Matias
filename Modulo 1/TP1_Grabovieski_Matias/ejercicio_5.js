let dato, resultado;    //declaracion de variables
val1 = window.prompt("Introduce tu nombre", "...");     //se muestra una ventana en pantalla que pide al usuario que ingrese su nombre
val2 = window.prompt("Introduce tu apellido", "...");   //se muestra una ventana en pantalla que pide al usuario que ingrese su apellido
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} `;    //concatena texto con las variables val1 y val2, y lo guarda en la variable resultado
document.write(resultado);      //muestra en la pagina web el contenido de la variable resultado