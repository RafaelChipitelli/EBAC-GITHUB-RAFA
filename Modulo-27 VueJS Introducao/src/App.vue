<script setup>
import { reactive } from 'vue';

const nome = 'Rafael Chipitelli'
const meuObj = {
  nome: 'Rafael',
  filmeFavorito: 'Até o Ultimo Homem'
}

function dizOla(nome) {
  return `${nome} diz oi`
}

const imgBatman = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFj5bjSWWv62XrJ7dLqJud0H4NeoL_oqopA&usqp=CAU'
const imgSuperman = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-ZTzDL7sU1By0hLonrN4g9LStSfp0br0Qw&usqp=CAU'

const botaoEstaDesabilitado = false

const gostaDoBatman = true
const gostaDoSuperman = false

const estaAutorizado = true

// let contador = 0
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes: ['Rafa', 'Duda', 'Lucas', 'Gabi'],
  nomeAInserir: '',
})

function incrementar() {
  estado.contador++;
}

function decrementar() {
  estado.contador--;
}

function alteraEmail(evento) {
  estado.email = evento.target.value
}

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function validaValorTransferencia() {
  const { saldo, transferindo } = estado;
  return saldo >= transferindo;
}

function cadastraNome() {
  if (estado.nomeAInserir.length >= 3){
    estado.nomes.push(estado.nomeAInserir)
  } else {
    alert('Digite mais caracteres')
  }
}



</script>



<template>
  <h1>{{ dizOla('Rafa') }}</h1>
  <img v-if="gostaDoBatman" :src="imgBatman" alt="">
  <img v-else-if="gostaDoSuperman" :src="imgSuperman" alt="">
  <h2 v-else>Não Curte herois da DC</h2>
  
  <h1 v-if="estaAutorizado">Bem-Vindo</h1>
  <h1 v-else>Nâo Possui acesso</h1>
  
  <button :disabled="!botaoEstaDesabilitado">Enviar Menssagem</button>

  <br>
  <hr>

  {{ estado.contador }}

  <button @click="incrementar()" type="button">+</button>
  <button @click="decrementar()" type="button">-</button>

  <br>
  <hr>

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">

  <br>
  <hr>

  Saldo: {{ estado.saldo }}
  <br>
  Transferindo: {{ estado.transferindo }}
  <br>
  Saldo depois de transferencia: {{ mostraSaldoFuturo() }}
  <br>
  <input class="campo" :class="{ invalido: !validaValorTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir">
  <button v-if="validaValorTransferencia()">Transferir</button>
  <span v-else>Valor Maior que o Saldo</span>

  <br>
  <hr>

  <!-- {{ nomes }} -->
  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastraNome" type="button">Cadastrar nome</button>
  
  <h3 v-for="nome in estado.nomes"> {{ nome }}</h3>

</template>

<style scoped>

img {
  max-width: 200px;
}

.invalido {
  outline-color: red;
  border-color: red;
}


.campo {
  border: 2px solid #000
}
</style>
