//Exercicio1
let array
console.log('a. ', array)   //Vai imprimir undefined, já que a variável não recebeu valor

array = null
console.log('b. ', array)  //O resultado impresso será null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  //Vai imprimir 11 que é a quantidade de casas do array

let i = 0
console.log('d. ', array[i])   //Vai pegar o array na posição zero, que contém o valor 3 e imprimir 3 no console

array[i+1] = 19
console.log('e. ', array) //Vai trocar o 4 por 19. Pegou nessa posição porque antes i equivalia a 0, somando 1 fica na posição 1, que é onde está o número 4

const valor = array[i+6]   
console.log('f. ', valor) //Vai pegar i que equivale a 0, somar 6, resultando em 6 e imprimir o valor na posição 6, que no caso é 9

//Exercicio2__________________________________________________________

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)  //O resultado será  SUBI NUM ÔNIBUS EM MIRROCOS, 27 (Os espaços em branco também contam)

//Exercício3_____________________________________________________________

let nome = prompt('Qual é o seu nome?')
let email = prompt('Qual é o seu e-mail?')
console.log(`O e-mail ${email} foi cadastrado com sucesso! Bem vindo(a) ${nome}!`)

//Exercício4________________________________________________________________________

let comidinhas = ['pizza','risotto','pastel','torta','bolo']
console.log(comidinhas)
console.log(`Essas são as minhas comidas preferidas:`)
console.log(comidinhas[0])
console.log(comidinhas[1])
console.log(comidinhas[2])
console.log(comidinhas[3])
console.log(comidinhas[4])
let comidinhaUsuario = prompt('Qual é a sua comida preferida?')
let x = 1
comidinhas[x] = comidinhaUsuario
console.log(comidinhas)

//Exercício5__________________________________________________________________

let listaDeTarefas = []
let tarefa1 = prompt('Qual a primeira tarefa do dia?')
let tarefa2 = prompt('E a segunda?')
let tarefa3 = prompt('Qual a terceira e última?')

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let check = Number(prompt('Você já fez alguma das tarefas? Se sim, qual?'))
listaDeTarefas.splice(check - 1, check - 1)
console.log(listaDeTarefas)

//Exercicio6_____________________________________________________________

let frase1 = 'O Bruno é muito legal!'
let fraseArray = frase1.split(' ')
console.log(fraseArray)

//Exercício7__________________________________________________________

let frutas = ['banana', 'morango', 'abacaxi', 'laranja', 'ameixa']

console.log(frutas.indexOf('abacaxi'), frutas.length)















