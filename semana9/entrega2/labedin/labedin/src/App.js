import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://img-premium.flaticon.com/png/512/1785/premium/1785918.png?token=exp=1626399032~hmac=a613db9efa733c49ef2596fed59e4cca" 
          nome="Gabriela Fogaça Cunha" 
          descricao="Oi, eu sou a Gabriela! Gerencio sistemas e processos na empresa Descomplica e estudo programação na Labenu no curso de Frontend!"
        />
        <CardPequeno
          CardPequenoImagem='https://image.flaticon.com/icons/png/512/747/747314.png'
          tituloCardPequeno='E-mail'
          descricaoCardPequeno='gabifogaca.gabriela@gmail.com'
        />
        <CardPequeno
          CardPequenoImagem='https://image.flaticon.com/icons/png/512/1493/1493676.png'
          tituloCardPequeno='Endereço'
          descricaoCardPequeno='Rua que a Gabi mora, 244, aptoXXX - Cidade da Gabi - SP'
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/512/4342/4342755.png" 
          nome="Quero Educação" 
          descricao="Departamento jurídico do grupo Quero Educação" 
        />
        
        <CardGrande 
          imagem="https://img-premium.flaticon.com/png/512/1163/premium/1163482.png?token=exp=1626399241~hmac=f0cd883227f075e8016024f6727db20d" 
          nome="Descomplica" 
          descricao="Gerenciamento de sistemas e banco de dados" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
