let estaChovendo: boolean = false 

estaChovendo = true

let idade: number = 27

let altura: number = 1.80

const nacionalidade: string = 'Brasileira'

const colegas: string[] = ['Lucas', 'Gabi', 'Duda', 'Sid']
const tecnologias: Array<string> = ['html', 'css', 'js']
const notas: ReadonlyArray<number> = [6, 7, 8, 9];

const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Rafael', true, 27]

let idadeDaAna: number | string = 25
idadeDaAna = '25 anos'
// idadeDaAna = true !!!! Posso atribuir mais de um tipo de info na variavel ou na constante, porém se tiver fora das abordadas vai dar erro. 
// Nesse caso colocando um booleano Deu erro pois nao foi setado na hora da criação da variavel.

let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1,2,3]
dadosDaApi = "string"

let curso = 'front-end'
// Tipagem implicita
