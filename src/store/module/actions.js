import axios from 'axios'
const url_base = "http://192.168.100.120:9000/users"

export function saveUsuario ({commit, state}, usuario) {

    // console.log(usuario);

    if(usuario.id > 0){
        axios.put(`${url_base}/${usuario.id}`, usuario)
            .then((response) => {
            // console.log(response)
            alert('Usuário Atualizado')
        })
        .catch((e) => {
          alert(e)
        })
      }else{
        axios.post(url_base, usuario)
            .then((response) => {
            // console.log(response)
            alert('Novo usuário salvo')
        })
        .catch((e) => {
          alert(e)
        })
    }
}

export function getUsuarios({commit}){
    axios.get(url_base)
        .then((usuariosApi)=>{
            commit('setUsuarios',usuariosApi.data)
        })
        .catch((e)=>{
            alert(e)
        })
}
export function deleteUsuario({commit, dispatch},id){
    axios.delete(`${url_base}/${id}`)
        .then((_)=>{
            dispatch('getUsuarios')
        })
        .catch((e)=>{
            alert(e)
        })
}


