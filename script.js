const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você sabe para o que é utilizado a notação cientifica na astronomia?",
        alternativas: [
            {
                
                texto: "sim, é utilizado para representar as distâncias entre planetas e estrelas",
                afirmacao: "sim, é utilizado para representar as distâncias entre planetas e estrelas. ",
            },
            {
                
                texto: "não faço a mínima ideia para oque serve ",
                afirmacao: "não faço a mínima ideia para oque serve ",
            },
            {
                
                texto: "sei boa parte, porem não sei como é corretamente aplicada",
                afirmacao: "sei boa parte, porem não sei como é corretamente aplicada",
            },
          
          
        ]
    },
    {
        enunciado: "Qual à emportância da notação cientifica para a ciência?",
        alternativas: [
            {
                texto: "apenas utilizado por preguisa de escrever o número todo.",
                afirmacao: "apenas utilizado por preguisa de escrever o número todo"
            },
            {
                 texto: "para facilitar a escrita de números extremamente grandes ou extremamente pequenos.",
                afirmacao: "para facilitar a escrita de números extremamente grandes ou extremamente pequenos.",
            }
        ]
    },
    {
        enunciado: "Por que ARQUIMEDES criou a notação cientifica?",
        alternativas: [
            {
                texto: "fez uma estimativa para calcular o número de grãos de areia são necessários para preencher o universo",
                afirmacao: "fez uma estimativa para calcular o número de grãos de areia são necessários para preencher o universo"
            },
            {
                texto: "fez uma estimativa para calcular o número de ervilhas em um lote",
                afirmacao: "fez uma estimativa para calcular o número de ervilhas em um lote"
            },
            
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();