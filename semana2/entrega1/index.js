//Exercício1
const bool1 = true
const bool2 = false
const bool3 = !bool2   //bool3 será true

let resultado = bool1 && bool2 
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) //true 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) //boolean 

//Exercício2 ________________________________________________________

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)  //O problema é que os números em prompt estão sendo tratados como strings, e ele não colocou Number na frente

//Exercício3________________________________________________________ 

let primeiroNumero1 = Number(prompt("Digite um numero!"))
let segundoNumero1 = Number(prompt("Digite outro numero!"))     //Coloquei 1 nos nomes das variáveis pra não dar conflito na hora de rodar o código

const soma1 = primeiroNumero1 + segundoNumero1

console.log(soma1) 

//Exercício4 _______________________________________________________

let idadeUsuario = Number(prompt('Qual é a sua idade'))
let idadeAmigo = Number(prompt('Qual é a idade do seu melhor amigo?'))

console.log('Sua idade é maios do que a do seu melhor amigo?', idadeUsuario>idadeAmigo)
console.log(`A diferença de idade entre vocês é de ${idadeUsuario- idadeAmigo}`)

//Exercício5 ________________________________________________________

let par = Number(prompt('Digite um número par'))
console.log(par%2) //Quando digitar um número ímpar, o resto da divisão é 1 

//Exercício6

let idade = Number(prompt('Qual é a sua idade?'))
console.log(`Sua idade em meses é de ${idade*12}`)
console.log(`Sua idade em dias é de ${idade*365}`)
console.log(`Sua idade em horas é de ${idade*365*24}`)

//Exercício6____________________________________________________________
let num1 = Number(prompt('Digite um número'))
let num2 = Number(prompt('Digite outro número'))

console.log('O primeiro numero é maior que segundo?', num1>num2)
console.log('O primeiro numero é igual ao segundo?', num1 === num2)
console.log('O primeiro numero é divisível pelo segundo?', num1%num2 == 0)
console.log('O segundo numero é divisível pelo primeiro?', num2%num1 == 0)

//Exercício7_______________________________________________________________

/*let fahrenheit = (celsius)*(9/5) + 32
let kelvin = (fahrenheit- 32)*(5/9) + 273.15*/

let kelvin1 = (77- 32)*(5/9) + 273.15
console.log(kelvin1)

let fahrenheit1 = (80)*(9/5) + 32
console.log(fahrenheit1)

let fahrenheit2 = (30)*(9/5) + 32
console.log(fahrenheit2)

let kelvin2 = (fahrenheit2- 32)*(5/9) + 273.15
console.log(kelvin2)

let celsiusUsuario = Number(prompt('Quantos graus vocês quer converter?'))
let fahrenheitUsuario = (celsiusUsuario)*(9/5) + 32
console.log(`${celsiusUsuario} graus Celsius em Fahrenheit é igual a ${fahrenheitUsuario}`)
console.log(`${celsiusUsuario} graus Celsius em Kelvin é igual a ${(fahrenheitUsuario- 32)*(5/9) + 273.15}`)

//Exercício8___________________________________________________________________

let quilowatt = Number(prompt('Quantos quilowatt a residência gasta por hora?'))
console.log(`Essa residência paga ${quilowatt * 0.05} reais por hora`)
let desconto = (15/100)* (quilowatt * 0.05)
let aplicaDesconto = (quilowatt * 0.05) - desconto
console.log(`Com 15% de desconto, a residência irá pagar ${aplicaDesconto} reais por hora`)

//Exercício9_______________________________________________________________________

console.log(`20 libras equivalem a ${20 * 0.453592} kg!`)

console.log(`10.5 onças equivalem a ${10.5 * 0.0283495} kg!`)

console.log(`100 milhas equivalem a ${100 * 1609.34} metros!`)

console.log(`50 pés equivalem a ${50 * 0.3048} metros!`)

console.log(`103.56 galões equivalem a ${103.56 * 3.78541} litros!`)

console.log(`450 xícaras equivalem a ${10.5 * 0.24} litros!`)


