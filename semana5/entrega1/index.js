/*Exercícios de interpretação

1) Será impresso no console 1 de cada vez nessa ordem: valor de cada elemento do array, posição do elemento e array inteiro

2) Será impresso no console os nomes dos usuarios

3) O código irá filtrar e imprimir apenas os elementos em que o apelido do usuário não for 'Chijo'


*/

//Exercícios de escrita de código

//Exercício1)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const nomePets = (nomePet) => {                          //a
    return nomePet.nome
}

const imprimirNomes = pets.map(nomePets)
console.log(imprimirNomes)


const salsicha = pets.filter((salsichas) =>{            //b
    return salsichas.raca == 'Salsicha'
})

console.log(salsicha)


const poodle = pets.filter((racaPoodle) =>{            //c
    return racaPoodle.raca == 'Poodle'
})

const nomePoodle = poodle.map((nomePoodle) => {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar seu pet ${nomePoodle.nome}`)
})

//Exercício2)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeProduto = produtos.filter((produto) => {            //a
    console.log(produto.nome)
 })

//_______________________________________________________________________________

 const produtoComDesconto = (produto) =>{                      //b
    produto.preco = (produto.preco -((5/100)*produto.preco)).toFixed(2)
    return produto
 }

console.log(produtos.map(produtoComDesconto)
)

//________________________________________________________________________________

const bebidas = produtos.filter((produto) =>{               //c
    return produto.categoria == 'Bebidas'
})

console.log(bebidas)

//_________________________________________________________________________________

const ype = produtos.map((produto) => {                 //d , e
    if (produto.nome.includes('Ypê')){
        console.log(produto)
        console.log(`Compre ${produto.nome} por ${produto.preco}`)
    } 
})




