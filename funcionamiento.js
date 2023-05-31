function encripta() {
    var frase = document.getElementById("informacionEntrada").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

    document.getElementById("informacionSalida").textContent = textoEncriptado;
}

function desincripatar() {
    var frase = document.getElementById("informacionEntrada").value.toLowerCase();

    var textoEncriptado = frase.replace(/enter/g, "e");
    textoEncriptado = textoEncriptado.replace(/ober/g, "o");
    textoEncriptado = textoEncriptado.replace(/imes/g, "i");
    textoEncriptado = textoEncriptado.replace(/ai/g, "a");
    textoEncriptado = textoEncriptado.replace(/ufat/g, "u");

    document.getElementById("informacionSalida").textContent = textoEncriptado;
}


function copiar() {
    var contenido = document.querySelector("#informacionSalida");

    contenido.select();
    contenido.setSelectionRange(0, 99999); // Para dispositivos móviles

    document.execCommand("copy");

    alert("Texto copiado al portapapeles");
}
