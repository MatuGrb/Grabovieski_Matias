// Escribir un script que muestre la posición de la primera vocal de un texto introducido por teclado. Por
// ejemplo: perro = “e” es la letra Nº2; árbol = “a” es la letra Nº1.

let i = 0, pos_vocal = -1, texto;
texto = window.prompt("Ingrese una cadena:", "---");
while (i < texto.length && pos_vocal == -1) {
    if ((texto[i] == "a") || (texto[i] == "e") || (texto[i] == "i") || (texto[i] == "o") || (texto[i] == "u")) {
        pos_vocal = i+1;
    }
    i++;
}
document.write(texto);
if (pos_vocal == -1) {
    document.write("<br>El texto no contiene vocales");
}
else{
    document.write(`<br>La primera vocal del texto es la letra Nº${pos_vocal}`);
}