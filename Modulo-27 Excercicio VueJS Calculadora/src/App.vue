<script setup>
  import { reactive } from 'vue';
  import Cabecalho from './components/Cabecalho.vue'

const estado = reactive({
  filtro: 'Todas',

  tarefaTemp: '',

  tarefa: [
    {
      titulo: 'Estudar ES6',
      finalizado: false,
    },
    {
      titulo: 'Estudar SASS',
      finalizado: false,
    },
    {
      titulo: 'Ir na Academia',
      finalizado: true,
    },
  ]
})

const getTarefasPendentes = () => {
  return estado.tarefa.filter(tarefa => !tarefa.finalizado)
}

</script>

<template>
  <div class="container">
    <Cabecalho :tarefas-pendentes="getTarefasPendentes().length"/>
  </div>
</template>


