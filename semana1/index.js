//Exercício 1.1
let a = 10
let b = 10

console.log(b)   //Vai imprimir o número 10

b = 5
console.log(a, b)   //Vai imprimir 10 que foi a atribuição para 'a' e 5 que é a nova atribuição para 'b'


//Exercício 1.2_____________________________________________________________

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)  // Todos os valores serão 10

//Exercício 1.3____________________________________________________________

let HorasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioPorDia/HorasTrabalhadasPorDia} por hora`)

//Exercício 2.1___________________________________________________________

let nome 
let idade

console.log(typeof nome, typeof idade)  //Vai imprimir undefined pra ambos porque as variáveis não foram definidas.

const nomeUsuario = prompt('Qual é o seu nome?')
const idadeUsuario = Number(prompt('Qual é a sua idade?'))
console.log(typeof nome, typeof idade)    //O tipo de nome será string e o tipo de idade será number. Isso porque solicitei ao que o prompt convertesse idade em para number. 

console.log(`Olá ${nomeUsuario}! Você tem ${idadeUsuario} anos!`)

//Exercício 2.2 __________________________________________________________________

let legal = 'O Bruno é legal?'
let urso = 'Ursos podem voar?'
let banana = 'banana é um tipo de legume?'

let respLegal = true
let respUrso = false
let respBanana = false

console.log(`${legal} ${respLegal}`)
console.log(`${urso} ${respUrso}`)
console.log(`${banana} ${respBanana}`)

//Exercício 2.3___________________________________________________________________

let a = 10
let b = 25

let i = b    //Lógica - criei uma variável coringa que chamei de 'i' para armazenar o valor de b e não perdê-lo na troca.
b = a
a = i

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10