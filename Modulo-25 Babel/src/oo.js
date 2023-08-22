// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }

// const pikachu = new Pokemon('Pikachu', 'Elétrico')

class Pokemon {
    // nome = '';
    // tipo = '';
    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com Choque do Trovão`)
    }
}

const pikachuDoAshe = new Pikachu();

pikachuDoAshe.recebeuAtaque();
pikachuDoAshe.hp = 5000;

console.log(pikachuDoAshe.hp)

pikachuDoAshe.atacar();
pikachuDoAshe.exibeHp();

const pikachu = new Pokemon('Pikachu', 'Elétrico');
// pikachu.atacar('Choque do Trovão')
// pikachu.nome = 'Pikachu';
// pikachu.tipo = 'Elétrico';

console.log(pikachu);
console.log(pikachuDoAshe);

console.log(pikachuDoAshe instanceof Pikachu);
console.log(pikachuDoAshe instanceof Pokemon);
