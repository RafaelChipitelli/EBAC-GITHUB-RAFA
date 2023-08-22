// Map

let meuMap = new Map();
meuMap.set('nome','Rafael');
meuMap.set('stack','html, css, js');

console.log(meuMap);

const nome = meuMap.get('nome');

console.log(nome);

console.log(meuMap.size)

meuMap.has('nome');
console.log(meuMap.has('nome'))
console.log(meuMap.has('sobrenome'))

// meuMap.clear();

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}
// nome => [Rafael]
// stack => [html,css,js]
meuMap.delete('stack');
console.log(meuMap)


// Set

const cpfs = new Set();

cpfs.add('94966938066')
cpfs.add('40201397099')
cpfs.add('97279142095')

console.log(cpfs);

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})


// Tirar Itens Repetidos com Set

const array = ['Rafael Chipitelli', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Rafael Chipitelli']

const arrayComoSet = new Set([...array])

console.log(arrayComoSet);

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arraySemItensDuplicados)