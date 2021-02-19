<template>
<div>
    <h3>Lista de usuários 
        <q-btn to="usuarios/0">Cadastrar novo usuário</q-btn>
        <q-btn to="select2">selecionar usuário</q-btn>
    </h3>
        <ul v-for="(usuario, i) in usuarios" :key="i">
            <li>{{usuario.ID}}-{{usuario.nome}} - {{usuario.email}} 
                <q-btn :to="`/usuarios/${usuario.ID}`">Editar</q-btn>
                <q-btn color="red" text-color="white" @click="excluirUsuario(usuario.ID) ">Excluir</q-btn>
                </li>
        </ul>
</div>
</template>

<script>
export default {
computed:{
    usuarios(){
        return this.$store.state.module.usuarios
    }
},
methods:{
    carregarUsuarios(){
        this.$store.dispatch('module/getUsuarios')
    },
    excluirUsuario(id){
        this.$store.dispatch('module/deleteUsuario', parseInt(id))
    },
},
mounted(){
    this.carregarUsuarios()
}
}
</script>

<style>

</style>