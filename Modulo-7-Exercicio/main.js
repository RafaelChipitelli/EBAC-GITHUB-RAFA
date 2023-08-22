document.getElementById("form-checagem").addEventListener("submit", function(event) {
    event.preventDefault();
    validaForm();
});

function validaForm() {
    let numeroA = parseInt(document.getElementById("campoA").value);
    let numeroB = parseInt(document.getElementById("campoB").value);

    if (numeroB > numeroA) {
    document.getElementById("success-msg").textContent = "Formulário válido! Número B é maior que o número A.";
    } else {
    document.getElementById("success-msg").textContent = "Formulário inválido! Número B não é maior que o número A.";
    }
}