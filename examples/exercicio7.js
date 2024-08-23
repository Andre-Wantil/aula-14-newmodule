// Desafio: Manipulando Dados em JSON
// Descrição: Você recebeu uma string no formato JSON representando uma lista de alunos e suas notas.
// Seu objetivo é converter essa string em um objeto JavaScript,
// calcular a média de notas de cada aluno, e exibir o nome do aluno com a maior média.

// Lista bagunçada de string ai
const listaDeAlunos = `[
    {
        "nome": "Claudio",
        "notas": [9, 7, 3]
    },
    {
        "nome": "Paulo",
        "notas": [4, 2, 8]
    },
    {
        "nome": "José",
        "notas": [1, 6, 3]
    },
    {
        "nome": "Aderbal",
        "notas": [10, 11, 10.5]
    }
]`;

// Transformando em array/objeto
let listaDeAlunosJSON = JSON.parse(listaDeAlunos);

// Função que calcula a média '-'
function cacularMedia(media, notas) {
    return (media / notas.length).toFixed(2)
}

//Checa os objetos da array e repete de acordo com a quantidade mudando de objeto toda vez que repete
for (let chave in listaDeAlunosJSON) {
    // Desconstoí o objeto em duas variaveis temporárias
    let { nome, notas } = listaDeAlunosJSON[chave]
    
    // Criando a variavel media(média)
    let media = 0

    // Pega a variavel notas e vai somando os numeros à variavel media
    for (let x = 0; x < notas.length; x++) {
        media += notas[x]
    }

    // Uhhhhh... eu... mostro o nome com a média do lado... tá bem óbvio não?
    console.log(`${nome}:`, cacularMedia(media, notas));
}
