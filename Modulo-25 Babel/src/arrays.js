const redesSociais = ['FaceBook', 'Instagram', 'Twitter', 'LinkedIn'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Rafael'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Front-End',
    }
})

console.log(alunos2)

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula'
})

console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paulo'
})
console.log(indiceDaPaula)

// every
alunos2.push({
    nome: 'Lucio',
    curso: 'Back-End'
})
const todosAlunosSaoDeFrontEnd = alunos2.every(function(item) {
    return item.curso === "Front-End"
})


console.log(todosAlunosSaoDeFrontEnd)

const existeAlguemBackEnd = alunos2.some(function(item) {
    return item.curso === 'Back-End' && item.curso === 'Front-End'
})

console.log(existeAlguemBackEnd);

function filtraAlunosDeBackEnd(aluno) {
    return aluno.curso === 'Back-End'
}

const filtraAlunosDeBackEnd2 = (aluno) => aluno.curso === 'Back-End';

const alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackEnd)

console.log(alunosDeBackEnd);

const nums = [10,20,30,10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
},'')

console.log(nomeDosAlunos);