// Desafio 5: Verificando a Existência de Propriedades

// Descrição: Verifique se o objeto carro tem uma propriedade chamada preco.
// Se não tiver, adicione a propriedade com um valor de sua escolha.
// Se já existir, exiba o valor no console.

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

function checarPreco(objeto) {
    if (!objeto.preco) {
        objeto.preco = 30000
        console.log(`O novo preço é: ${objeto.preco}.`);
    } else {
        console.log(`O preço é: ${objeto.preco}`);
    }
}

checarPreco(carro);