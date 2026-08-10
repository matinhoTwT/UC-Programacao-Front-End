const pessoa = {
    nome: "Anderson",
    idade: 21,
    vacinas: [],

    exemplo: function () {
        console.log(this)
    },

    vacinar: function (vacina) {
        this.vacinas.push(vacina);
    }
}

const pessoa2 = {
    nome: "Laura",
    idade: 20,
    vacina: []
}

pessoa.exemplo();

pessoa.vacinar("Sarampo");
pessoa.vacinar("Covid-19");
pessoa.vacinar("BCG");

pessoa.email = "anderson@gmail.com";
// delete pessoa.nome;

console.log(pessoa["nome"]);
console.log(pessoa.idade);
console.log(pessoa.email);
console.log(pessoa.vacinas)