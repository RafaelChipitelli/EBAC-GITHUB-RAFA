<script setup>
  import { reactive } from 'vue';
  import Cabecalho from './components/Cabecalho.vue'
  import Formulario from './components/Formulario.vue'
  import ListaDeTarefas from './components/ListaDeTarefas.vue'

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

const getTarefasFinalizdas = () => {
  return estado.tarefa.filter(tarefa => tarefa.finalizado)
}

const getTarefasFiltradas = () => {
  const {filtro} = estado;
  
  switch (filtro) {
    case 'Pendentes':
      return getTarefasPendentes();
    case 'Finalizadas':
      return getTarefasFinalizdas();
      default: 
      return estado.tarefa;
  }
}

const cadastraTarefa = () => {
  const tarefaNova = {
    titulo: estado.tarefaTemp,
    finalizado: false,
  }
  estado.tarefa.push(tarefaNova);
  estado.tarefaTemp = '';
}

</script>

<template>
  <div class="container">

    <Cabecalho :tarefas-pendentes="getTarefasPendentes().length"/>
    <Formulario :trocar-filtro="evento => estado.filtro = evento.target.value" :tarefa-temp="estado.tarefaTemp" :edita-tarefa-temp="evento => estado.tarefaTemp.target.value" :cadastra-tarefa="cadastraTarefa"/>
    <ListaDeTarefas :tarefas="getTarefasFiltradas()"/>    
  </div>
</template>


