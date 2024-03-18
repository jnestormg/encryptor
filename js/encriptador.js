let entrada = document.querySelector('#texto');
let mensaje = document.querySelector('#campo_mensaje');
let datos = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnencriptar() {
    let text = encriptar(entrada.value);
    console.log(text);
    mensaje.value = text;
    entrada.value="";
}
function encriptar(frase) {

    for (let i = 0; i < datos.length; i++) {
        if (frase.includes(datos[i][0])) {
            frase = frase.replaceAll(
                datos[i][0],
                datos[i][1]
            );
        }
    }
    return frase;

}

function btndesencriptar() {
    let text = desencriptar(mensaje.value);
    console.log(text);
    entrada.value = "";
    mensaje.value = text;
}

function desencriptar(frase) {

    for (let i = 0; i < datos.length; i++) {
        if (frase.includes(datos[i][0])) {
            frase = frase.replaceAll(
                datos[i][1],
                datos[i][0]
            );
        }
    }
    return frase;

}

function copiar() {
    let texto = mensaje.value;
    if (texto.length > 0) {
        entrada.value = texto;
    } else {
        alert("No existe texto para copiar.")
    }
}