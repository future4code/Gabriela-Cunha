/*Interpretação de código 
Exercício 1:
Será impresso: Matheus Nachtergaele, Virginia Cavendish, {canal: "Globo", horario: "14h"}

Exercício 2: 
a) {nome: "Juca", idade: 3, raca: "SRD"}, {nome: "Juba", idade: 3, raca: "SRD"}, {nome: "Jubo", idade: 3, raca: "SRD"}
b) A sintaxe dos 3 pontos puxa as informações do objeto solicitado para um novo objeto

Exercício 3: 
false e undefined

*/

//Exercícios de escrita.  1:

const pessoa = {
    nome: 'Gabriela',
    apelidos: ['Gabi', 'Fogaça', 'Bi']
}

function apresentacao(pessoa){
    console.log(`Ola, meu nome é ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}

apresentacao(pessoa)

//Exercício 2:

const obj1 = {
    nome: 'Gabi',
    idade: 21,
    profissao: 'Analista financeiro'
}

const obj2 = {
    nome: 'Vanessa',
    idade: 24,
    profissao: 'Estudante de medicina'
}

function imprimirObjs(obj){
    console.log([obj.nome,obj.nome.length-1, obj.idade, obj.profissao, obj.profissao.length-1])
}

imprimirObjs(obj1)
imprimirObjs(obj2)
console.log(typeof obj1, typeof obj2)   //Desafio exercício 1

//Exercício 3: 

carrinho = []

const fruta1 ={
    nome: 'banana',
    disponibilidade: true
}

const fruta2 ={
    nome: 'maça',
    disponibilidade: true
}

const fruta3={
    nome: 'abacaxi',
    disponibilidade:true
}

function guardaFruta(fruta){
    carrinho.push(fruta)
}

guardaFruta(fruta1)
guardaFruta(fruta2)
guardaFruta(fruta3)
console.log(carrinho)

function estoque(fruta){                     //Exercício 3 do desafio
    fruta.disponibilidade = false
    console.log(fruta)  
}

estoque(fruta1)

/*Desafios:

O exercício 1 dos desafios foi mesclado ao exercício 2 de escrita de código*/

//Exercício 2:

const filme1 ={
    nome: 'As branquelas',
    anoDeLancamento: 2004

}

const filme2 ={
    nome: 'Shrek',
    anoDeLancamento:2001
}

function filmes(filme1, filme2){
    console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.anoDeLancamento>filme2.anoDeLancamento}`)

    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoDeLancamento===filme2.anoDeLancamento}`)
}

filmes(filme1,filme2)

//Exercício 3: mesclado ao exercício 3 de esrita de código