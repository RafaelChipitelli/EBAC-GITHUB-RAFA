const carroDoJoao = {
    modelo: "fiesta",
    fabricante: "ford",
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vruum");
    }
}

const carroDaMaria = {
    modelo: "ka",
    fabricante: "ford",
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vrum");
    }
}

function Carro(modelo,fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroDoJoao2 = new Carro("Fiesta","Ford", 2020, 2019);
const carroDamaria2 = new Carro("Ka","Ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDamaria2);

const nome = "rafael"
const idade = 30
const ehMaiorDeIdade = true
const conhecimento = ["html", "css", "javaScript"]


const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimento: conhecimento,
}


function exibeAtributo(nomedoAtributo) {
    console.log(pessoa[nomedoAtributo])
}

exibeAtributo("nome");

pessoa["sobrenome"] = undefined;

Object.freeze(pessoa);

pessoa.nome = "joao";

if (pessoa["sobrenome"]) {
    console.log("A pessoa tem um sobrenome")
}

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome')
}


console.log(pessoa.nome)
console.log(pessoa["nome"])

console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));