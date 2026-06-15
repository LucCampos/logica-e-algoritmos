// Instrução para poder rodar
// npm install prompt-sync
const prompt = require('prompt-sync')();

let nomeUsuario = prompt("Informe o nome do usuário: ");
let senha = prompt("Informe a senha: ");

console.log(""); //Linha em branco

// Referências
let loginBanco = "Lucas";
let senhaBanco = "123";

// Condicional SE + E
if (nomeUsuario === loginBanco && senha === senhaBanco) {
    console.log("Acesso autorizado!");
} 
else {
    console.log("Acesso negado!");
}