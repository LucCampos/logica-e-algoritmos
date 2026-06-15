// Não esquecer de instalar (Para poder simular):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Desenvolver a codificação do 1º desafio à partir deste ponto
// Criando o Vetor para guardar os valores
const pessoa = [];
const idade = [];

console.log("");
console.log("--- Conclusão de Cadastro ---");
console.log("");

// Estrutura de repetição para coletar o nome dos 5 filmes
for (let i = 0; i<=2; i++){
    console.log(`--- Pessoa ${i + 1} ---`);
    pessoa[i] = prompt(`Nome: `);
    idade[i] = prompt(`Idade: `);

    console.log("");
}


let visualizar = prompt("Deseja visualizar os dados? (sim/não): ");

//Respostas caso o usuário deseje visualizar os dados
if (visualizar === "sim" || visualizar === "nao"){
    if (visualizar === "sim"){
        console.log("");
        console.log("");
        console.log("--- Visualização dos dados ---");
        console.log("");
        
        for (let i = 0; i<=2; i++){
            console.log(`--- Pessoa ${i + 1} ---`)
            console.log("Nome: " + pessoa[i]);
            console.log("Idade: " + idade[i]);
            if (idade[i] < 18){console.log("Classificação: Menor de Idade")}
            else if (idade[i] < 59){console.log("Classificação: Maior de Idade")}
            else{console.log("Classificação: Idoso")}

            console.log("");
        }
    }
    if (visualizar === "nao"){console.log("Programa finalizado com sucesso!")}
}  
else{
    console.log("Resposta inválida! Tente novamente!");
}