"use strict";

var redesSociais = ['FaceBook', 'Instagram', 'Twitter', 'LinkedIn'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Rafael'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Front-End'
  };
});
console.log(alunos2);
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paulo';
});
console.log(indiceDaPaula);

// every
alunos2.push({
  nome: 'Lucio',
  curso: 'Back-End'
});
var todosAlunosSaoDeFrontEnd = alunos2.every(function (item) {
  return item.curso === "Front-End";
});
console.log(todosAlunosSaoDeFrontEnd);
var existeAlguemBackEnd = alunos2.some(function (item) {
  return item.curso === 'Back-End' && item.curso === 'Front-End';
});
console.log(existeAlguemBackEnd);
function filtraAlunosDeBackEnd(aluno) {
  return aluno.curso === 'Back-End';
}
var filtraAlunosDeBackEnd2 = function filtraAlunosDeBackEnd2(aluno) {
  return aluno.curso === 'Back-End';
};
var alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackEnd);
console.log(alunosDeBackEnd);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomeDosAlunos);