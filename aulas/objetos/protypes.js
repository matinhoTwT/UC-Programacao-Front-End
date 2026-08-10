function Pessoa(p_nome, p_idade) {
    this.nome  = p_nome
    this.idade = p_idade
}

const anderson = new Pessoa("Anderson", 21);
const laura    = new Pessoa("Laura", 20)

anderson.email = "anderson@gmail.com";

console.log(anderson);
console.log(laura);