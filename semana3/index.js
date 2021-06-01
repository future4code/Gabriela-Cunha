/*Exercício1: 

a) Será impresso reespecivamente 10 e 50
b) Não será impresso nada. O console.log é o comando esencial para algo ser impresso. Nesse caso, a função seria chamado, só não imprimiria nada


Exercício2:
a) A função irá transformar tudo em letras minúsculas e então procurar na frase a palavra 'cenoura' em letras minúsculas.
b) A primeira e a segunda retornarão TRUE, já que na primeira já está em letra minúscula e na segunda, as letras maiúsculas se tornatão minúsculas. A única que retorna FALSE é a última, porque a palavra está no plural 'cenouras'.
*/


//Exercício3: a)

function gabi(){
    console.log(`Oi! meu nome é Gabi, tenho 21 anos e gosto de comer brócolis`)
}

gabi()

//b)

function pessoa (nome, idade, cidade, profissao){
    console.log(`Olá! meu nome é ${nome}, tenho ${idade} anos, sou da cidade ${cidade} e sou ${profissao}!`)
}

pessoa('Gabi', 21, 'São José dos Campos', 'Analista financeiro')

//Exercício4: a)

function soma(x,y){
    soma = x + y
    return soma
}

console.log(soma(30,20))

//b)

function comparaNumeros(a,b){
    comparacao = a>= b
    return comparacao
}

console.log(comparaNumeros(21,20))

//c)

function parOuNao(n){
    verificaNumero = n%2===0
    return verificaNumero
}

console.log(parOuNao(5435))

//d)

function frase(frase){

    console.log(frase.toUpperCase(),frase.length)
}

frase('Salsichas são engraçadas')

//Exercício5: 

function operacoes(i,j){
    sum = i + j
    sub = i - j
    mult = i * j
    divi = i/j
    console.log(`soma: ${sum}, subtração: ${sub}, multiplicação: ${mult}, divisão: ${divi}` )
}

operacoes(50,10)

//Desafios: 1a)

param = (c) => console.log(c)
param(5)

//b)
funcaoParam = (w,z) =>{
    somar = w + z
   param(somar)
}

funcaoParam(7,4)

//2)

function pitagoras(lado1,lado2){
    hipotenusa = (lado1**2) + (lado2**2)
    return (hipotenusa)
}

console.log(pitagoras(2,3))


