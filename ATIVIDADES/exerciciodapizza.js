class Pizza {
    constructor(base, molho, cobertura, queijo){
        this.base = base
        this.molho = molho
        this.cobertura = cobertura
        this.queijo = queijo
    }
    descricaoPizza(){
        console.log(`Gostaria de uma pizza com a massa ${this.base}, com o molho de ${this.molho} com a cobertura de ${this.cobertura} e com queijo ${this.queijo}`);
    }
}

const recheio = new Pizza("Grossa", "Tomate", "Peperoni", "Mussarela");

recheio.descricaoPizza();