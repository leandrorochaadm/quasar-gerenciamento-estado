<template>
  <div>
    <h3>Usuário</h3>
    <p>{{this.id}}</p>
    <q-input v-model="nome" label="Nome" />
    <q-input v-model="email" label="Email"  />
    <q-input v-model="senha" label="Senha" type="passwork" />
    <q-btn color="white" text-color="black" label="Salvar" @click="saveUsuario" />
    <q-btn color="black" text-color="white" label="Home" to="/" />
  </div>
</template>

<script>
export default {
  props: ['id'],
  data(){
    return{
      nome:'',
      email:'',
      senha:'',
    }
  },
  computed:{
    usuarios(){
      return this.$store.state.module.usuarios
    },
    usuario(){
      return {id: parseInt(this.id), nome : this.nome, email: this.email}
    }
  },
  methods:{
    saveUsuario(){
      this.$store.dispatch('module/saveUsuario', this.usuario)
      this.$router.push('/')
    },
  
  buscarPorID(){
    const usuario = this.usuarios.filter((e)=> e.ID === parseInt(this.id))

    if(usuario.length > 0){
      // this.usuario = usuario[0]
      this.nome = usuario[0].nome
      this.email = usuario[0].email
    }else{
      alert("Cadastro de usuário novo")
    }
  },
  },
  mounted(){
    // if(this.usuarios.length === 0){
    //  this.getUsuarios().then(()=>{
    //    this.buscarUsuarioPorID()
    //  })
    //   return 
    // } 
      this.buscarPorID()
  }
}
</script>
