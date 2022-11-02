function lefClick() {
    
    if (numeroMensagem > 0) {
        numeroMensagem--
        conteudo.innerHTML = arrayConteudo[numeroMensagem]
        // console.log(numeroMensagem)
    }
}

function rightClick() {
    
    if (numeroMensagem < arrayConteudo.length -1) {
        numeroMensagem++
        conteudo.innerHTML = arrayConteudo[numeroMensagem]        
        // console.log(numeroMensagem)
    }
}

const arrayConteudo = [
    "Não sou muito bom com palavras, principalmente expressar emoções. Mas quero dizer com esse pequeno texto, também demonstrar que te conhecer (mesmo pouquinho) está sendo top de mais. Nossa cara, é um sentimento tão bom falar contigo, é como se já o aguardasse há muito tempo para o conhecer. Você, sempre terás meu carinho, admiração e muita coisa.\nMoss, estou bestinha, ai cara... tá parei não vou dizer mais nada, parei com essa loucura.",
    "Tu é meu amorzinho"
]
const conteudo = document.querySelector("p")

var numeroMensagem = 0
conteudo.innerHTML = arrayConteudo[numeroMensagem]

ev.preventDefault();
