
// mensagem no console quando o site carrega
console.log("Portfólio do Augusto carregado com sucesso!");


// ===== BOTÃO VOLTAR AO TOPO =====

const botaoTopo = document.getElementById("topoBtn");

if (botaoTopo) {
    botaoTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ===== CLIQUE NOS PROJETOS =====

const projetos = document.querySelectorAll(".projeto");

projetos.forEach(function(projeto){
    projeto.addEventListener("click", function(){
        alert("Abrindo projeto: " + projeto.innerText);
    });
});


// ===== MENSAGEM DE BOAS VINDAS =====

window.addEventListener("load", function(){
    console.log("Bem-vindo ao meu portfólio!");
});
