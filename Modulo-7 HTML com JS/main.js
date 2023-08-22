const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - Conta: <b>${numeroContaBeneficiario.value}</b>`;

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success-msg');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        nomeBeneficiario.style.border = '2px solid red'
        document.querySelector('.error-msg').style.display = 'block'
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formValido = validaNome(e.target.value);

    if (!formValido) {
        nomeBeneficiario.classList.add('error')
        //nomeBeneficiario.style.border = '2px solid red'
        document.querySelector('.error-msg').style.display = 'block'
    } else {
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-msg').style.display = 'none'
    }
});