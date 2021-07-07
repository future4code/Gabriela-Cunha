function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let soma = 0
  for(let i = 0; i < arrayDeNumeros.length; i ++){
    numeroEscolhido === arrayDeNumeros[i] ? soma += 1 : false
  }
  return soma === 0 ? `Número não encontrado` : `O número ${numeroEscolhido} aparece ${soma}x` 
  
}