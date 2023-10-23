document.addEventListener("DOMContentLoaded", function () {
    const textoInput = document.getElementById("textoInput");
    const maiusculasCheckbox = document.getElementById("maiusculasCheckbox");
    const minusculasCheckbox = document.getElementById("minusculasCheckbox");
    const resultado = document.getElementById("resultado");

    function transformarTexto() {
        const texto = textoInput.value;
        if (maiusculasCheckbox.checked) {
            resultado.textContent = texto.toUpperCase();
        } else if (minusculasCheckbox.checked) {
            resultado.textContent = texto.toLowerCase();
        } else {
            resultado.textContent = texto; 
        }
    }

    maiusculasCheckbox.addEventListener("change", transformarTexto);
    minusculasCheckbox.addEventListener("change", transformarTexto);
    textoInput.addEventListener("input", transformarTexto);
});
