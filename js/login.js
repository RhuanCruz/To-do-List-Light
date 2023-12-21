import Cadastramento from "./Cadastramento.js"
import Usuarios from "./Usuarios.js"
import verificador from "./verificador.js";

document.addEventListener('DOMContentLoaded', function() {


var btnModoLogin = window.document.getElementById('modoLogin')
var btnModoCadastro = window.document.getElementById('modoCadastrar')
var formCadastro = window.document.getElementById('FormularioDeCadastro')
var formLogin = window.document.getElementById('FormularioDeLogin')
var btnConfirmar_Cadastro = window.document.getElementById('btnCadastrar')
var btnEntrar = window.document.getElementById('entrar')


btnModoCadastro.addEventListener('click', function() {
    formLogin.style.display = "none"
    formCadastro.style.display = "flex"
    console.log("cadastro")
});

btnModoLogin.addEventListener('click', function() {
    formCadastro.style.display = "none"
    formLogin.style.display = "flex"
    console.log("login")
});

btnConfirmar_Cadastro.addEventListener('click', function() {
    Cadastramento.cadastrarUser()
});

btnEntrar.addEventListener('click' , function() {
    if (verificador.verificaDadosDeLogin()) {
        window.location.href = "home.html"
    } else {
        window.alert("Usuario ou senha incorretos")
    }
});
});