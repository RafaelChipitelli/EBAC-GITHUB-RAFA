"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "Diz Olá!";
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());
var carro = {
  valocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.valocidadeAtual += 10;
  },
  frear: function frear(valocidadeAtual) {
    console.log(_this);
    _this.valocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.valocidadeAtual);