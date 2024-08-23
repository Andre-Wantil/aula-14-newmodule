// Desafio 2: Acesso e Modificação de Propriedades

// Descrição: Usando o objeto carro criado no Desafio 1, altere o valor da propriedade ano para 2023.
// Em seguida, adicione uma nova propriedade chamada cor com o valor "azul".
// Exiba o objeto atualizado no console.

const carro = {
    marca: "Chevrolet",
    modelo: "Celta",
    ano: 2006
};

carro.ano = 2023;
carro.cor = "azul";

console.log(carro);