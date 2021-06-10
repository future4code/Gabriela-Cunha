/* Exercícios de escrita de código: 

1) O código é uma repetição. Enquanto um número que começa com 0 for menor do que 5, o valor vai receber ele mesmo mais o contador. No final o resultado será 10.

2)
a) Será impresso todos os números maiores que 18.
b) O for of não acessa os índices do array. Para isso seria necessário fazer uma estrutura de repetição for comum dando como início o 0 percorrendo o array até lista.length 

3) Serão impressar 4 linhas, cada linha com uma quantidade de asteriscos correspondentes ao número da linha. Na linha 1 teria 1 asterisco, na 2, 2 asteriscos, e assim por diante.
*/


//Exercícios de escrita de código: 

//1)

let pet = Number(prompt(`Quantos pets você tem?`))
let nomes = []

if(pet === 0){
  console.log(`Que pena! Você pode adotar um pet, o que acha?`)

}else{
  for (let i = 1; i <= pet; i++){
    let nome = prompt(`Qual é o nome do seu pet número ${i}?`)
    nomes.push(nome)
  }
  console.log(nomes)
}

//2)
//a)

let arrayOriginal = [1,2,3,4,5,6,7,8,9]

for (let j = 0; j < arrayOriginal.length; j++){
  console.log(arrayOriginal[j])
}

//b)

for (let j = 0; j < arrayOriginal.length; j++){
  console.log(arrayOriginal[j]/10)
}

//c)

let novoArray = []
for (let j = 0; j < arrayOriginal.length; j++){
  if(arrayOriginal[j]%2===0){
    novoArray.push(arrayOriginal[j])
  }
}
console.log(novoArray)

//d)
let arrayDeFrase = []
for (let j = 0; j < arrayOriginal.length; j++){
  
  arrayDeFrase.push(`O elemento do index ${j} é ${arrayOriginal[j]}`)
}
console.log(arrayDeFrase)

//e)
let menor = 1
let maior = 0
for (let j = 0; j < arrayOriginal.length; j++){
  if(arrayOriginal[j]>maior){
    maior = arrayOriginal[j]
  }
  if(arrayOriginal<menor){
    menor = arrayOriginal[j]
  }
}

console.log(menor, maior)


//Desafios:

//1)

let escolherNumero = Number(prompt('Jogador 1, escolha um número'))
console.log('Vamos jogar!')

let adivinharNumero
do{
adivinharNumero = Number(prompt('Jogador 2, tente adivinhar o número'))

if(escolherNumero !== adivinharNumero){
  console.log('Poxa, você errou!')
  if(adivinharNumero > escolherNumero){
    console.log('O número chutado foi maior')

  }else{
    console.log('O número chutado foi menor')
  }

}else{
  console.log('Você acertou!!')
}
}while(adivinharNumero !== escolherNumero)


//2

function escolherNumero2 (min,max){
  let valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let valor = escolherNumero2(1,10)

let adivinharNumero2
do{
adivinharNumero2 = Number(prompt('Jogador 2, tente adivinhar o número'))

if(valor !== adivinharNumero2){
  console.log('Poxa, você errou!')
  if(adivinharNumero2 > valor){
    console.log('O número chutado foi maior')

  }else{
    console.log('O número chutado foi menor')
  }

}else{
  console.log('Você acertou!!')
}
}while(adivinharNumero2 !== valor)









