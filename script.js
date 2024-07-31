const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você sabe para o que é utilizado a notação científica na astronomia?",
        alternativas: [
            {
                
                texto: "Sim, é utilizado para representar as distâncias entre planetas e estrelas",
                afirmacao: " É utilizado para representar as distâncias entre planetas e estrelas",
            },
            {
                
                texto: "Não faço a mínima ideia para oque serve ",
                afirmacao: " É utilizado para representar as distâncias entre planetas e estrelas ",
            },
            {
                
                texto: "Sei boa parte, porem não sei como é corretamente aplicada",
                afirmacao: " É utilizado para representar as distâncias entre planetas e estrelas",
            },
          
          
        ]
    },
    {
        enunciado: "Qual à importância da notação científica para a ciência?",
        alternativas: [
            {
                texto: "Apenas utilizado por preguisa de escrever o número todo.",
                afirmacao: "Para facilitar a escrita de números extremamente grandes ou extremamente pequenos."
            },
            {
                 texto: "para facilitar a escrita de números extremamente grandes ou extremamente pequenos.",
                afirmacao: "Para facilitar a escrita de números extremamente grandes ou extremamente pequenos.",
            }
        ]
    },
    {
        enunciado: "Por que ARQUIMEDES criou a notação científica?",
        alternativas: [
            {
                texto: "Fez uma estimativa para calcular o número de grãos de areia são necessários para preencher o universo",
                afirmacao: "Fez uma estimativa para calcular o número de grãos de areia são necessários para preencher o universo"
            },
            {
                texto: "Fez uma estimativa para calcular o número de ervilhas em um lote",
                afirmacao: "Fez uma estimativa para calcular o número de grãos de areia são necessários para preencher o universo"
            },
            
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "depois dessas perguntas você coneguiu enchergar a importância da notação científica para a ciência e a evolução do entendimento sobre a galáxia ";

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
    caixaPerguntas.textContent = "2024";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();