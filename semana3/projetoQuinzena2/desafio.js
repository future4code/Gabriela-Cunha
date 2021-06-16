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
       let lista = [usuarioCarta1.texto, usuarioCarta2.texto, computadorCarta1.texto, computadorCarta2.texto]   //Aqui guardei as cartas iniciais para usar na condição das cartas 'A' (linha 28)
       let cartasDoUsuario = [usuarioCarta1.texto, usuarioCarta2.texto]      //Aqui guardei as 2 cartas iniciais do usuario para imprimir no final
       let cartasDoComputador = [computadorCarta1.texto, computadorCarta2.texto]   //Fiz a mesma coisa com as cartas iniciais do computador
    
       if(usuarioCarta1.valor == 'A' && usuarioCarta2.valor == 'A' || computadorCarta1.valor == 'A' && computadorCarta2.valor == 'A'){
    
          for (let cartas in lista){       //Aqui está a regra da repetição das cartas 'A' 
             cartas = comprarCarta()
             lista.push(cartas)
          }
       }
       let pontuacaoUsuario = usuarioCarta1.valor + usuarioCarta2.valor         //A pontuação inicial do usuário e computador é a soma das 2 cartas iniciais de cada
       let pontuacaoComputador = computadorCarta1.valor + computadorCarta2.valor
    
       let comprarMais = ''           //Esse comprarMais será usado dentro do escopo de repetição do/while (linha 40)
       do{                           
          comprarMais = confirm(`Suas cartas são ${usuarioCarta1.texto} e ${usuarioCarta2.texto}, e a carta revelada do computador é ${computadorCarta1.texto} \n Deseja comprar mais uma carta?`)                            
    
       if(comprarMais){                                //Se o usuário clicar no ok do confirm, vem para essa condição
          maisCartasUsuario = comprarCarta()             //Aqui é feita a compra de mais cartas pelo usuário
          maisCartasComputador = comprarCarta()          //E aqui o computador compra mais cartas a medida que o usuário compra
          cartasDoUsuario.push(maisCartasUsuario.texto)              //Aquele array de cartas do usuário mencionado na linha 25 vai puxar as novas cartas do usuário
          cartasDoComputador.push(maisCartasComputador.texto)        //E o array da linha 26 vai puxar os novos valores do computador
    
          console.log(`Suas cartas são ${cartasDoUsuario} \n A carta revelada do computador é: ${cartasDoComputador[0]}`) //Revela apenas 1 carta do computador e deixa as outras ocultas
    
          pontuacaoUsuario = pontuacaoUsuario + maisCartasUsuario.valor              //Aqui a pontuação da linha 35 vai somar os novos valores
          pontuacaoComputador = pontuacaoComputador + maisCartasComputador.valor     //E aqui irá somar com os valores da linha 36
       }
       }while(comprarMais && pontuacaoUsuario <= 21)   //Estrutura de repetição - Enquanto o usuário solicitar mais cartas ou até a pontuação ser menor ou igual a 21
       
    
       console.log(`Usuário: ${cartasDoUsuario}. Pontuação: ${pontuacaoUsuario}`)       //Quanto sais da repetição de compra, o console revela todas as cartas
       console.log(`Computador: ${cartasDoComputador}. Pontuação: ${pontuacaoComputador}`)    //Não s'do usuário, mas revela do computador também, diferente da linha 48 que só revela 1 carta do computador e deixa as outras ocultas
    
       if(pontuacaoComputador > 21 && pontuacaoUsuario > 21){      //Se ambas as pontuações forem maiores que 21 dá empate
          alert('Ninguém ganhou essa rodada :(')
    
       }else if(pontuacaoComputador === pontuacaoUsuario){      //Se as pontuações forem iguais dá empate
          alert('Empate')
       }
       else if (pontuacaoComputador > 21 && pontuacaoUsuario <=21 || pontuacaoComputador <=21 && pontuacaoUsuario <=21 && pontuacaoUsuario > pontuacaoComputador){
          alert(`O usuário ganhou!`)   //Nessas condições o usuário ganha 
    
       }else if (ppontuacaoUsuario > 21 && pontuacaoComputador <=21 || pontuacaoComputador <=21 && pontuacaoUsuario <=21 && pontuacaoComputador > pontuacaoUsuario){
          alert(`O computador ganhou!`)      //E nessas o computador ganha
    
       }
    
    }else{
       alert(`O jogo acabou! ~Nem começou na verdade kkk~`)    //Caso o usuário escolha não jogar logo de começo, aparecerá um alert com essa mensagem
    }