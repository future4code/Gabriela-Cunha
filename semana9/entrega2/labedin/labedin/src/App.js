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
          imagem="https://image.flaticon.com/icons/png/512/163/163802.png" 
          nome="Gabriela Fogaça Cunha" 
          descricao="Oi, eu sou a Gabi! Gerencio sistemas e processos na empresa Descomplica e estudo programação na Labenu no curso de Frontend!"
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
          imagem="https://image.flaticon.com/icons/png/512/2637/2637203.png" 
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
