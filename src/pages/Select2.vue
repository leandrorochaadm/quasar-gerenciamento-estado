<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">

      <q-select
        filled
        v-model="model"
        use-input
        input-debounce="0"
        label="Selecione um usuario"
        :options="options"
        option-label="nome"
        @filter="filterFn"
        style="width: 250px"
        behavior="menu"
      >


        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>

       <div>
        <h3>Usuário</h3>
        <p>{{this.model.ID}}</p>
        <q-input v-model="model.nome" label="Nome" />
        <q-input v-model="model.email" label="Email"  />
        <q-input v-model="model.senha" label="Senha" type="passwork" />
        <q-btn color="white" text-color="black" label="Salvar" @click="saveUsuario" />
        <q-btn color="black" text-color="white" label="Home" to="/" />
       </div>
  </div>
</template>

<script>
import {mapState } from 'vuex'


export default {
  data () {
    return {
      model: {
        ID: 0,
        nome:'',
        email:'',
        senha:'',
      },
      options: this.stringOptions,
    }
  },
  computed:{
    // stringOptions(){
      // return this.$store.getters['module/listaNome']
      // return this.$store.state.module.usuarios
    // }
      ...mapState('module',{
        stringOptions: 'usuarios'
      }),
      usuario(){
        return {id: parseInt(this.model.ID), nome : this.model.nome, email: this.model.email}
    }
  },
  methods: {
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options = this.stringOptions
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = this.stringOptions.filter(v => v.nome.toLowerCase().indexOf(needle) > -1)
      })
    },
    saveUsuario(){
      this.$store.dispatch('module/saveUsuario', this.usuario)
      this.$router.push('/')
    },
  },
  mounted(){
    this.$store.dispatch('module/getUsuarios')    
  }
}
</script>

<style>

</style>