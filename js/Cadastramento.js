import Usuarios from "./Usuarios.js";
import verificador from "./verificador.js";

function cadastrarUser() {
var email =  window.document.getElementById('C-email').value
var user = window.document.getElementById('C-user').value
var senha =  window.document.getElementById('C-senha').value
var confirmaSenha = window.document.getElementById('ConfirmaSenha').value
console.log("Dados recebidos:", user, email, senha, confirmaSenha);
if (verificador.verificaSenha(senha, confirmaSenha) && verificador.verificaEmail(email) == true) {
            console.log("entrou")
            const novoUser = {
                user: user,
                senha: senha,
                email: email
            }
            window.alert("Cadastro concluido com Sucesso! volte para a tela de login para entrar")
            Usuarios.push(novoUser)
            console.log(Usuarios)
        }else if (verificador.verificaEmail(email) == false) {
            window.alert("email ja usado")
        }

        else{
            console.log("Senha diferentes")
            console.log(Usuarios)
        }
    }

export default{
    cadastrarUser : cadastrarUser
}
