import Usuarios from "./Usuarios.js";


// verifica os dados para login
function verificaDadosDeLogin() {
    var user = window.document.getElementById('user').value
    var senha = window.document.getElementById('senha').value
    for (const usuario of Usuarios) {
        if (usuario.user === user && usuario.senha === senha) {
            return true
        }
    }
    return false
}


function verificaSenha(senha, confirmaSenha) {
    if (senha !== null && senha !== undefined && senha === confirmaSenha) {
        return true;
    } else {
        return false;
    }
}

function verificaEmail(e) {
    for (const usuario of Usuarios) {
        if (usuario.email === e ) {
            return false
        }else{
            return true
        }
    }
}

export default {
    verificaSenha : verificaSenha,
    verificaEmail : verificaEmail,
    verificaDadosDeLogin : verificaDadosDeLogin
}