export function setUsuarioNome ( state, nome) {
    state.usuario.nome = nome
}

export function setUsuarioEmail ( state, email) {
    state.usuario.email = email
}

export function setUsuarioSenha ( state, senha) {
    state.usuario.senha = senha
}

export function setUsuarios ( state, usuarios) {
    console.log(usuarios);
    state.usuarios = []

    usuarios.map((usuario)=> 
        state.usuarios.push(usuario)
    );
}