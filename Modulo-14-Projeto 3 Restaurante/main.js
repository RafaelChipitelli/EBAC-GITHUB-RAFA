
$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#CPF').mask('000.000.000-00')
    $('#CEP').mask('00000-000')

    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            CPF: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            endereço: {
                required: true
            },
            CEP: {
                required: true
            },
            checkbox: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: '<strong>Porfavor, insira o seu Nome.</strong>',
            CPF: '<strong>Porfavor, insira o seu CPF</strong>',
            telefone: '<strong>Porfavor, insira o seu Telefone</strong>',
            email: '<strong>Porfavor, insira o seu E-mail</strong>',
            endereço: '<strong>Porfavor, insira o seu Endereço</strong>',
            CEP: '<strong>Porfavor, insira o seu CEP</strong>',
            checkbox: '<strong>Necessário aceitar para continuar </strong>',
            mensagem: '<strong>Por favor nos deixe uma mensagem :)</strong>'
        },
    })
})


/*
Anotações do Rafa para Depois - :)

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: 'Ex: (21) 12345-1234' )
    }

    $('#CPF').mask('000.000.000-00',{
        placeholder: 'Ex: 123.456.789-00' )
    }

    $('#CEP').mask('00000-000',{
        placeholder: 'Ex: 12345-678' )
    }

    $('#Aniversario').mask('00/00/000',{
        placeholder: 'Ex: __/__/____' )
    }

    Ou Placa de Carro :)
*/ 
