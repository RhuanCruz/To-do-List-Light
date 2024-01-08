
document.addEventListener('DOMContentLoaded', function() {
    var btn_criar = document.querySelectorAll('#botao_add')
    var tela_modal_criar = document.getElementById('janela-modal')
    var btn_fechar_tela_modal_criar = document.getElementById('btnFecharModal')
    

        btn_criar.forEach(function(btn_criar) {
            btn_criar.addEventListener('click', function abre_tela_criar() {
                console.log("Ola")
                tela_modal_criar.style.display ='flex'
            })    
        });  


    if(btn_fechar_tela_modal_criar){
        btn_fechar_tela_modal_criar.addEventListener('click', function FechaTelaModal() {
            tela_modal_criar.style.display ='none'
        })
    }

function handleClick(event) {
            // Obtém o elemento que foi clicado
            var elementoClicado = event.target;
            
            // Faz algo com o elemento clicado
            console.log("Clicou no elemento:", elementoClicado.textContent);
        }

})
    
