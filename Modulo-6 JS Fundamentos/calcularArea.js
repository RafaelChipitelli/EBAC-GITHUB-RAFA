// Usado console do navegador!!!!

let base = prompt("Vamos calcular a área desse retângulo em centímetros! Digite a base:");

let altura = prompt("E agora a altura! Digite a altura:");

let area = calculaArea(base, altura);

console.log("A área do retângulo é: " + area + " centímetros");

function calculaArea(base, altura) {

 let area = base * altura;

 return area;

}