// Não esquecer de instalar (Para poder simular):
// npm install prompt-sync

const prompt = require('prompt-sync')();

function calculaMedia(nota1,nota2){
    return (nota1+nota2)/2
}

function verificaSituacao(media,frequencia){
    if (media >= 7 && frequencia >= 75){return "Aprovado"};
    if (media >= 4 && frequencia >= 75){return "Recuperação"};
    return "Reprovado";
}

function exibeBoletim(nome){
    console.log("");
    console.log(`BOLETIM - Aluno ${nome + 1}`);

    console.log("Nome: " + aluno[nome]);
    console.log("Nota 1: " + nota1[nome]);
    console.log("Nota 2: " + nota2[nome]);
    console.log("Frequência: " + frequencia[nome] + "%");
    console.log("Média: " + media[nome]);
    console.log("Situação: " + situacao[nome]);
}

function exibeResumo(){
    console.log("");
    console.log("=====================");
    console.log("RESUMO GERAL DA TURMA");
    console.log("Aprovados: " + aprovados);
    console.log("Recuperação: " + recuperacao);
    console.log("Reprovados: " + reprovados);
}

// Desenvolver a codificação do 2º desafio à partir deste ponto
const aluno = [];
const nota1 = [];
const nota2 = [];
const frequencia = [];

console.log("");
console.log("--- Gerenciador de Boletim ---");
console.log("");

// Estrutura de repetição para coletar o nome dos 5 filmes
for (let i = 0; i<=2; i++){
    console.log(`--- Aluno ${i + 1} ---`);
    aluno[i] = prompt(`Nome: `);
    nota1[i] = parseFloat(prompt(`Nota 1: `));
    nota2[i] = parseFloat(prompt(`Nota 2: `));
    frequencia[i] = prompt(`Frequência: `);

    console.log("");
}

//RESUMO GERAL
const media = [];
const situacao = [];

console.log("");
console.log("RESULTADO DO BOLETIM");

let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

for (let i = 0; i<=2; i++){
    media[i] = calculaMedia(nota1[i],nota2[i]);
    situacao[i] = verificaSituacao(media[i],frequencia[i]);

    exibeBoletim(i);

    if (situacao[i] === "Aprovado"){aprovados += 1;}
    if (situacao[i] === "Recuperação"){recuperacao += 1;}
    if (situacao[i] === "Reprovado"){reprovados += 1;}
}

exibeResumo();
