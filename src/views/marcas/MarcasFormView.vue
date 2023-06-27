<template>
  <div class="container">
    <h1>Cadastrar nova marca</h1>
    <form action="" class="view-table view-form">
      <label for="">Nome da marca:</label>
      <br>
      <input type="text" v-model="marca.nome">
      <div class="form-view-buttons">
        <router-link to="/marcas/lista">
          <button type="button">
            Voltar
          </button>
        </router-link> 
        <button type="button" @click="onClickCadastrar()">
          Cadastrar
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">

import { MarcaModel } from '@/model/MarcaModel';
import MarcaClient from '@/client/MarcaClient';
import { DefineComponent, defineComponent } from 'vue';

export default defineComponent({

  name: 'MarcaFormulario',
  data() {
    return {
      marca: new MarcaModel()
    }
  },
  methods: {
    onClickCadastrar() {
      MarcaClient.cadastrar(this.marca)
        .then (sucess => {

          this.marca = new MarcaModel();
        })
        .catch (error => {
          console.log(error);
        })
    }
  }
});
</script>