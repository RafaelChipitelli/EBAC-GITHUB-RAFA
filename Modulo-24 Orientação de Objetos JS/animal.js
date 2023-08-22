// Classe abstrata
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Método abstrato que será implementado nas classes filhas
    makeSound() {
        throw new Error('O método makeSound deve ser implementado.');
    }
}

// Classes herdeiras
class Dog extends Animal {
    makeSound() {
        return `${this.name} faz woof woof!`;
    }
}

class Cat extends Animal {
    makeSound() {
        return `${this.name} faz miau!`;
    }
}

// Criando instâncias
const dog = new Dog('Rex');
const cat = new Cat('Mia');

console.log(dog.makeSound()); // Saída: "Rex faz woof woof!"
console.log(cat.makeSound()); // Saída: "Mia faz miau!"
