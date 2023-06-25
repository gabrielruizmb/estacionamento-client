<template>
  <div class="container">
    <h1>Lista de marcas</h1>
    <table class="view-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Ativo</th>
          <th>Nome</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in marcasList" :key="item.id">
          <th>{{ item.id }}</th>
          <th>
            <span v-if="item.ativo" class="text-color-sucess">Ativo</span>
            <span v-if="!item.ativo" class="text-color-danger">Inativo</span>
          </th>
          <th>{{item.nome}}</th>
          <th>XX</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import MarcaClient from '@/client/MarcaClient';
import { MarcaModel } from '@/model/MarcaModel';

export default defineComponent({
  name: 'MarcaLista',
  data() {
    return {
        marcasList: new Array<MarcaModel>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
      MarcaClient.findAll()
        .then(sucess => {
          this.marcasList = sucess
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});

</script>