const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia de Inteligência Artificial?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Você gosta da ideia de Inteligência Artificial?"
            },
            {
                texto: "Não",
                afirmativa: "Você gosta da ideia de Inteligência Artificial?"
            }
        ]
    },
    {
        enunciado: "Vocẽ já usou a Inteligência Artificial?",
        alternativas: [
            {
                texto: "Nunca usei",
                afirmativa: "Vocẽ já usou a Inteligência Artificial?"
            },
            {
                texto: "já usei",
                afirmativa: "Vocẽ já usou a Inteligência Artificial?"
            }
        ]
    },
    {
        enunciado: "Ela já te ajudou de alguma forma?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Ela já te ajudou de alguma forma?"
            },
            {
                texto: "Não",
                afirmativa: "Ela já te ajudou de alguma forma?"
            }
        ]
    }
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmativa;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
caixaPergunta.textContent = "Em 25 anos...";
textoResultado.textContent = respostas;
caixaAlternativa.textContent = "";
}
mostraPergunta();