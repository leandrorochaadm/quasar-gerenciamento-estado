export function listaNome ( state ) {
    var listaNome = []
    state.usuarios.map((u)=>{
        listaNome.push(u.nome)
        console.log(u.nome);
    })
    // return state.stringOptions
    // return ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
    return listaNome
}
