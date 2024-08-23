// Desafio 4: Iterando sobre as Propriedades
// Descrição: Crie uma função que receba um objeto como parâmetro e itere sobre suas propriedades,
// exibindo cada chave e valor no console.
// Use o objeto carro como argumento para testar a função.

const carro = {
    marca: "Chevrolet",
    modelo: "Celta",
    ano: 2023,
    cor: "Azul",
    descrever: function() {
        console.log(`Este carro é um ${this.marca} ${this.modelo} do ano ${this.ano} na cor ${this.cor}.`)
    }
};

function objectGrab(objeto) {
    for (let i in objeto) {
        console.log(`${i}: ${objeto[i]}`)
    }
};

objectGrab(carro);