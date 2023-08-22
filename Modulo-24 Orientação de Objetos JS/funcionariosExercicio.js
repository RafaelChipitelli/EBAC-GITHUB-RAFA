class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu sou um ${this.cargo}.`);
    }

    calcularSalario() {
        return this.salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario, 'Gerente');
    }

    calcularSalario() {
        return this.salario * 1.2; // Aumento de 20% para gerentes
    }
}

class Recepcionista extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario, 'Recepcionista');
    }

    calcularSalario() {
        return this.salario * 1.1; // Aumento de 10% para recepcionistas
    }
}

class Medico extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario, 'Médico');
    }

    calcularSalario() {
        return this.salario * 1.5; // Aumento de 50% para médicos
    }
}

const funcionario1 = new Gerente('João', 5000);
const funcionario2 = new Recepcionista('Marcos', 2500);
const funcionario3 = new Medico('Rafael', 8000);

funcionario1.apresentar();
console.log(`Salário: ${funcionario1.calcularSalario()}`);

funcionario2.apresentar();
console.log(`Salário: ${funcionario2.calcularSalario()}`);

funcionario3.apresentar();
console.log(`Salário: ${funcionario3.calcularSalario()}`);
