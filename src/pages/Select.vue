<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        filled
        v-model="model"
        label="Simple select"
        :options="stringOptions"
        style="width: 250px"
        behavior="menu"
      />

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
  </div>
</template>

<script>
import {mapState } from 'vuex'


export default {
  data () {
    return {
      model: null,
      // stringOptions,
      options: this.stringOptions
    }
  },
  computed:{
    // stringOptions(){
      // return this.$store.getters['module/listaNome']
      // return this.$store.state.module.usuarios
    // }
      ...mapState('module',{
        stringOptions: 'usuarios'
      })
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
        console.log(val);
        this.options = this.stringOptions.filter(v => v.nome.toLowerCase().indexOf(needle) > -1)
      })
    }
  },
  mounted(){
    this.$store.dispatch('module/getUsuarios')    
  }
}
</script>

<style>

</style>