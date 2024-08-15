class Pessoa {
    constructor(nome, idade, altura){
        this.name = nome
        this.idade = idade
        this.altura = altura
    }
}

const user = new Pessoa("Luana", 17, 1.60)
const user1 = new Pessoa ("Beatriz", 17, 1.77)

console.log(user);
console.log(user1);