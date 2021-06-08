/*Exercícios de escrita de código: 

Exercício1:
a) O código pega o número que o usuário digitar e verifica se o resto da divisão por 2 é igual a zero. Se for, retorna 'Passou no teste', se não, retorna 'Não passou no teste'

b)Números em que o resto da divisão por 2 seja igual a zero

c)Número em que o resto da divisão por 2 seja diferente de zero

Exercício2: 

a) É uma condição de escolha, em que o usuário escolheria qual a fruta quer selecionar para automaticamente receber o preço da fruta escolhida como retorno.

b)2.25

c)Caso não houvesse o break após pêra, seria impresso o mesmo valor de default, isto é, 5.

Exercício3: 

a) A primeira linha está pedindo para o usuário digitar um número!

b)Se o número for 10, irá imprimir a mensagem 'Esse número passou no teste'. No caso de ser -10, não será impresso nada.

c) Sim. O console.log(mensagem) está no escopo global, mas 'mensagem' está dentro de um escopo local, e por isso não pode ser acessado fora de seu escopo.


*/

//Exercícios de escrita de código:

//Exercício1

let idade = prompt(`Quantos anos você tem?`)
let anos = Number(idade)

if(anos>=18){
    console.log(`Você tem ${anos} anos, e por isso já pode dirigir!`)
} else{
    console.log(`Você tem ${anos} anos, e por isso não pode dirigir!`)
}

//Exercício2:

let turno = prompt(`Em qual turno você estuda?`)

if(turno === 'M'){
    console.log(`Bom dia!`)
} else if(turno === 'V'){
    console.log(`Boa tarde!`)
} else{
    console.log('Boa noite!')
}

//Exercício3:

let turno2 = prompt('Em qual turno você estuda?')
switch(turno2){
    case 'M':
        console.log('Bom dia')
        break
    case 'V':
        console.log('Boa tarde')
        break
    default:
        console.log('Boa noite')
        break
}

//Exercício4:

let genero = prompt('Qual é o gênero do filme?') === 'fantasia'
let preco = prompt('Qual o preço do ingresso?') <= 15

if(genero && preco){
    let lanchinho = prompt('Qual lanchinho você vai comprar?')         //Exercício 1 do desafio
    console.log(`Bom filme e aproveite o seu lanchinho ${lanchinho}`)
} else{
    console.log('Escolha outro filme :(')
}

//Desafios

//Exercício1: está atrelado ao exercício 4 de escrita de código



