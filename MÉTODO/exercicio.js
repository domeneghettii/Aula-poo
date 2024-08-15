class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos de idade e tenho ${this.altura} de altura`);
}
}

const user = new Pessoa("Luana", 17, 1.60)
const user1 = new Pessoa ("Beatriz", 17, 1.77)

user.seApresentar();
user1.seApresentar();