// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  let area = prompt('Escreva a área do triângulo')
  let largura = prompt('Escreva a largula do retângulo')
  console.log(area*largura)
}

// Exercício 2
function imprimeIdade() {
  let anoAtual = prompt('Em que ano estamos?')
  let anoDeNascimento = prompt('Em que ano você nasceu?')
  let idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  let peso = prompt('Qual é o seu peso?')
  let altura = prompt('Qual é a sua altura?')
  console.log(peso/(altura*altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  let nome = prompt('Qual é o seu nome?')
  let anos = prompt('Qual é a sua idade?')
  let email = prompt('Qual é o seu e-mail?')
  console.log(`Meu nome é ${nome}, tenho ${anos} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let cor1 = prompt('Qual é a sua cor preferida?')
  let cor2 = prompt('E a segunda?')
  let cor3 = prompt('Escolha outra cor')
  let cores = [cor1,cor2,cor3]
  console.log(cores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  let palavra = prompt('Escreva uma palavra qualquer')
  console.log(palavra.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let valorEspetaculo = Number(prompt('Quanto custa este espetáculo?'))
  let valorIngresso = Number(prompt('Quanto custa cada ingresso?'))
  console.log(valorEspetaculo/valorIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let string1 = prompt('Escreva uma palavra qualquer')
  let string2 = prompt('Escreva outra palavra')
  console.log(string1.length === string2.length)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let op1 = prompt('Digite uma palavra')
  let op2 = prompt('Digite outra palavra')
  console.log(op1.toUpperCase() == op2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  let anoAtualEx10 = Number(prompt('Em que ano estamos?'))
  let anoNascimento = Number(prompt('Em que ano você nasceu?'))
  let anoCarteira = Number(prompt('Em que ano sua carteira foi emitida?'))
  let idade = anoAtualEx10 - anoNascimento
  console.log
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  let idadeLabenu = prompt('Quantos é maior de idade (18 anos)?')
  let ensinoMedio = prompt('Você já finalizou o ensino médio?')
  let horario = prompt('Você tem disponibilidade no horário do curso?')
  
  console.log(idadeLabenu == 'sim' && ensinoMedio == 'sim' && horario =='sim')
}