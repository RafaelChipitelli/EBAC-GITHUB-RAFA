const minhaFuncao = () => "Diz Olá!";

const retornaUmCarro = () => ({
        modelo: 'Ka',
        fabricante: 'Ford',
})

console.log(minhaFuncao())
console.log(retornaUmCarro())

const carro = {
    valocidadeAtual: 40,
    acelerar: function() {
        console.log(this)
        this.valocidadeAtual += 10;
    },
    frear: (valocidadeAtual) => {
        console.log(this)
        this.valocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.valocidadeAtual)