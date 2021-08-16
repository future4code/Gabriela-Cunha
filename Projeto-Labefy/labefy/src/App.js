import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import imagemDeFundo from '../src/imagemdefundo.jpeg'

const ContainerPrincipal = styled.div`
  background-color: black;
  background-image: 'https://www.pexels.com/pt-br/foto/aurora-boreal-1938351/';
  width: 80vw;
  height: 75vh;
  margin: auto;
  margin-top: 7%;
  display: flex;
  flex-direction: block;
  justify-content: space-between;
`
const MenuLateral = styled.div`
  background-color: grey;
  margin: 1%;
`
const MenuPrincipal = styled.div`
  background-color: grey;
`

export default class App extends React.Component{
  render(){
    return(
      <ContainerPrincipal>
        <MenuLateral>
          Teste
        </MenuLateral>
        <MenuPrincipal>
          Teste
        </MenuPrincipal>
        
      </ContainerPrincipal>
    )
  }
} 