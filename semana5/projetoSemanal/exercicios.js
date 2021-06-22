let lista = [1,2,3,4,5,6,7]
// EXERCÍCIO 01
function inverteArray(array) {
  let novaLista = []
  for(let i = array.length -1; i >= 0; i = i - 1){
    novaLista.push(array[i])
  }
  return novaLista
}

inverteArray(lista)

// EXERCÍCIO 02

function retornaNumerosParesElevadosADois(array) {
  let arrayPares = []
  for(let numero in array){
    if(array[numero] % 2 == 0){
      arrayPares.push(array[numero]**2)
    }
  }
  return arrayPares
}

retornaNumerosParesElevadosADois(lista)

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arraySomentePares = []
  for(let i in array){
    if(array[i] % 2 == 0){
      arraySomentePares.push(array[i])
    }
  }
  return arraySomentePares
}

retornaNumerosPares(lista)

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  maiorNumero = 0
  for(let numero in lista){
    if(array[numero] > maiorNumero){
      maiorNumero = array[numero]
    }
  }
  return maiorNumero
}

retornaMaiorNumero(lista)

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  quantidade = 0
  for(let numero in array){
    quantidade = quantidade + 1
  }
  return quantidade
}

retornaQuantidadeElementos(lista)

// EXERCÍCIO 06

function retornaExpressoesBooleanas() {  
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  const arrayBoolean = []

  arrayBoolean.push(booleano1 && booleano2 && !booleano4)

  arrayBoolean.push((booleano1 && booleano2) || !booleano3 )

  arrayBoolean.push((booleano2 || booleano3) && (booleano4 || booleano1))

  arrayBoolean.push(!(booleano2 && booleano3) || !(booleano1 && booleano3))

  arrayBoolean.push(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))

  return arrayBoolean

}

retornaExpressoesBooleanas()

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let par = 0
  let listaPares = []

  for(let i = 1; i <= n; i++){
    listaPares.push(par)
    par = par + 2
  }
  return listaPares
}

retornaNNumerosPares(3)

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a == b && b == c){
    return 'Equilátero'

  }else if (a == b || b == c || a == c){
    return 'Isósceles'

  }else{
    return 'Escaleno'
  }
}

checaTriangulo(2,3,4)

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  maiorNumero = 0
  divisao = 0

  if(num1> num2){
    maiorNumero = num1
    divisao = num1 % num2 == 0
    diferenca = num1 - num2

  }else{
    maiorNumero = num2
    divisao = num2 % num1 == 0
    diferenca = num2 - num1
  }
  const obj = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: divisao,
    diferenca: diferenca
  }
  return obj
}

comparaDoisNumeros(15,30)

// EXERCÍCIO 10
const arrayEx10 = [30,20,50,70,30,100]

function segundoMaiorEMenor(array) {
  for(let i = 0; i <=array.length -1; i++){
    for(let j = i+1; j <= array.length; j++){
      if(array[i]> array[j]){
        let aux = array[i]
        array[i] = array[j]
        array[j] = aux
      }
    }
}
    let novoarray = []
    novoarray.push(array[array.length-2])
    novoarray.push(array[1])
    return novoarray
}

segundoMaiorEMenor(arrayEx10)


// EXERCÍCIO 11
listaEx11 = [2,5,7,8,3,9]
function ordenaArray(array) {
  for(let i = 0; i <=array.length -1; i++){
    for(let j = i+1; j <= array.length; j++){
      if(array[i]> array[j]){
        let aux = array[i]
        array[i] = array[j]
        array[j] = aux
      }
    }
  }
  return array
}

ordenaArray(listaEx11)

// EXERCÍCIO 12
function filmeFavorito() {
  let filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  return filme
}

filmeFavorito()

// EXERCÍCIO 13
function imprimeChamada() {

  let filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

imprimeChamada()

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

  let retangulo = { 
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  return retangulo
}

criaRetangulo(10,12)

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  pessoa.nome = 'ANÔNIMO'
  return pessoa
}

const pessoa = {
  nome: "Gabi",
  idade: 21,
  email: "gabi.hahahaha@gmail.com",
  endereco: "Tão tão distante"
}

anonimizaPessoa(pessoa)

// EXERCÍCIO 16A

const pessoasEx16 =[

	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

function maioresDe18(arrayDePessoas) {
  const retornaPessoa = arrayDePessoas.filter((pessoa) =>{
    if(pessoa.idade >= 18){
      return true
    }
  })
  return retornaPessoa
}

maioresDe18(pessoasEx16)


// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menores = arrayDePessoas.filter((pessoa) =>{
    if(pessoa.idade < 18){
      return true
    }
  })
  return menores
}

menoresDe18(pessoasEx16)

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let novaLista = []
  for(let i in array){
    novaLista.push(array[i]*2)
  }
  return novaLista
}

multiplicaArrayPor2(lista)

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let novaLista = []
  for (let i in array){
    novaLista.push((array[i]*2).toString())
  }
  return novaLista
}

multiplicaArrayPor2S(lista)


// EXERCÍCIO 17C
function verificaParidade(array) {
  let novaLista = []
  for(let i in array){
    if(array[i]%2 ==0){
      novaLista.push(`${array[i]} é par`)

    }else{
      novaLista.push(`${array[i]} é ímpar`)
    }
  }
  return novaLista
}

verificaParidade(lista)

// EXERCÍCIO 18A

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = pessoas.filter((pessoa) =>{
    if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >=1.5){
      return true
    }
  })
  return pessoasAutorizadas
}

retornaPessoasAutorizadas(pessoas)

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter((pessoa) =>{
    if(pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura < 1.5){
      return true
    }
  })
  return pessoasNaoAutorizadas
}

retornaPessoasNaoAutorizadas(pessoas)

// EXERCÍCIO 19A
const consultas = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
]
function ordenaPorNome(consultasNome) {
  for(let i = 0; i < consultasNome.length; i++) {
    for(let j = 0; j < consultasNome.length - i - 1; j++) {
      if(consultasNome[j].nome > consultasNome[j + 1].nome) {
        const temp = consultasNome[j]
        consultasNome[j] = consultasNome[j + 1]
        consultasNome[j + 1] = temp
      }
    }
  }
  return consultasNome
}

ordenaPorNome(consultas)
// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function calculaSaldo(contas) {
  const saldoFinal = contas.map((cliente) =>{
    cliente.saldoTotal = cliente.saldoTotal - soma(cliente.compras)
    return cliente
  })
  return saldoFinal
}

function soma(valores){
  let soma = 0
  for(let i in valores){
    soma = soma + valores[i]
  }
  return soma
}

calculaSaldo(contas, soma)
