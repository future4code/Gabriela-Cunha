import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Maria'}
          fotoUsuario={'https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142839436'}
          fotoPost={'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp'}
        />
                <Post
          nomeUsuario={'Gabi'}
          fotoUsuario={'https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142836522'}
          fotoPost={'https://img.elo7.com.br/product/zoom/1C340F5/quadro-tela-paisagens-natureza-praia-coqueiro-mar-areia-004-quadro-tela.jpg'}
        />
                <Post
          nomeUsuario={'Vanessa'}
          fotoUsuario={'https://i.pinimg.com/236x/55/45/ba/5545bacfc43524c82fb2dd12bf4a1630.jpg'}
          fotoPost={'https://www.queroviajarmais.com/wp-content/uploads/2020/08/lago-louise.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
