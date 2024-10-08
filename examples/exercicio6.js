// Desafio 6: Removendo uma Propriedade

// Descrição: Remova a propriedade cor do objeto carro.
// Em seguida, exiba o objeto atualizado no console para verificar se a propriedade foi removida.

const carro = {
    marca: "Chevrolet",
    modelo: "Celta",
    ano: 2023,
    cor: "Azul",
    descrever: function() {
        console.log(`Este carro é um ${this.marca} ${this.modelo} do ano ${this.ano} na cor ${this.cor}.`)
    },
    preco: 20000
};

delete carro.cor;

console.log(carro)