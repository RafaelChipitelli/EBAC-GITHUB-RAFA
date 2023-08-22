"use strict";

var alunos = [{
  nome: "Isa",
  nota: 1
}, {
  nome: "Matheus",
  nota: 2
}, {
  nome: "Caio",
  nota: 3
}, {
  nome: "Jessie",
  nota: 4
}, {
  nome: "João",
  nota: 5
}, {
  nome: "Carla",
  nota: 6
}, {
  nome: "Ana",
  nota: 7
}, {
  nome: "Maria",
  nota: 8
}, {
  nome: "Gabi",
  nota: 9
}, {
  nome: "Rafael",
  nota: 10
}];
function filtrarAlunosAprovados(listaAlunos) {
  return listaAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
function filtrarAlunosReprovados(listaAlunos) {
  return listaAlunos.filter(function (aluno) {
    return aluno.nota < 6;
  });
}
var alunosReprovados = filtrarAlunosReprovados(alunos);
console.log('Alunos Reprovados: ', alunosReprovados);
var alunosAprovados = filtrarAlunosAprovados(alunos);
console.log('Alunos Aprovados: ', alunosAprovados);