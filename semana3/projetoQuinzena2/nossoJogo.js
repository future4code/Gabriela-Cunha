/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log('Bem vindos ao jogo de BlackJack!')
    let jogar = confirm('Quer iniciar uma nova rodada?')
    
    if (jogar){
    
       let usuarioCarta1 = comprarCarta()
       let usuarioCarta2 = comprarCarta()
       let computadorCarta1 = comprarCarta()
       let computadorCarta2 = comprarCarta()
    
       console.log(`Usuário: ${usuarioCarta1.texto} e ${usuarioCarta2.texto}. Pontuação: ${usuarioCarta1.valor + usuarioCarta2.valor}`)
       console.log(`Computador: ${computadorCarta1.texto} e ${computadorCarta2.texto}. Pontuação: ${computadorCarta1.valor + computadorCarta2.valor}`)
       if(usuarioCarta1.valor + usuarioCarta2.valor > computadorCarta1.valor + computadorCarta2.valor){
          console.log(`O usuário ganhou!`)
    
       }else if(computadorCarta1.valor + computadorCarta2.valor > usuarioCarta1.valor + usuarioCarta2.valor){
          console.log(`O computador ganhou!`)
    
       }else{
          console.log(`Empate!`)
       }
    }else{
       console.log(`O jogo acabou! ~Nem começou na verdade kkk~`)
    
    }





