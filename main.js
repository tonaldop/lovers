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
    "<h1>Tassio</h1> <span>28/10/2022</span><p>Não sou muito bom com palavras, principalmente expressar emoções. Mas quero dizer com esse pequeno texto, também demonstrar que te conhecer (mesmo pouquinho) está sendo top de mais. Nossa cara, é um sentimento tão bom falar contigo, é como se já o aguardasse há muito tempo para o conhecer. Você, sempre terás meu carinho, admiração e muita coisa.</p><p>Moss, estou bestinha, ai cara... tá parei não vou dizer mais nada, parei com essa loucura.</p>",
    "<span>1/11/2022</span><p>Não sei explicar o motivo pela qual estou fazendo isso, pode parecer estranho um recém amigo e agindo dessa forma.</p><p>Pode ser que estou muito empolgado ou estou com uma explosão de sentimentos, mas não tenhas medo dessa minha loucura.</p><p>Às vezes fico em pensamentos imaginando o que conversaria contigo, batendo aquele papo sabe? tenho tanto para te dizer cara, mas não posso então a cada dia vou alimentar essa página com minhas emoções do momento.</p><p>Até quando vai durar isso e não sei, mas vamos indo.</p><p>Peço que releve minha escrita, não sou bom com isso.</p>", "<span>2/11/2022</span><p>Nego, cada dia que passa mais cresce meu carinho, sei que és meu amigo. É até assustador ter esse sentimento, sei lá, não sei até quando tu estarás comigo então quero aproveitar cada segundinho da tua atenção e presença e dizer o máximo que posso. Na real te quero pra sempre.&#129325;</p><p>Não perderei chances e oportunidades de dizer o quanto gosto de ti. Será que posso dizer que te amo? &#x1F914; Digo com todas as palavras e mais sincero de coração que sempre terás de mim amor, carinho e respeito.</p><p>Te amo coisa incrivelmente linda.</p>"
]
// const conteudo = document.querySelector("p")
const conteudo = document.getElementById("conteudo")

var numeroMensagem = 0
conteudo.innerHTML = arrayConteudo[numeroMensagem]

ev.preventDefault();
