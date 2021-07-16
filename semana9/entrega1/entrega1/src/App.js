import './App.css';
import CardVideo from './components/CardVideo'
import BotaoMenu from './components/BotaoMenu';

function App() {
  const reproduzirVideo = () =>{
    alert('O vídeo está sendo reproduzido')
  }
  return (
    <div className="App">
       <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"></input>
        </header>
        <main>
            <nav className="menu-vertical">
                <ul>
                  <BotaoMenu titulo={'Início'}/>
                  <BotaoMenu titulo={'Em alta'}/>
                  <BotaoMenu titulo={'Inscrições'}/>
                  <hr />
                  <BotaoMenu titulo={'Biblioteca'}/>
                  <BotaoMenu titulo={'Histórico'}/> 
                  <BotaoMenu titulo={'Originais'}/>                  
                </ul>
            </nav>
            <section className="painel-de-videos">
              <CardVideo foto={'https://picsum.photos/400/400?a=1'} texto={'Vídeo 1'}/>
              <CardVideo foto={'https://picsum.photos/400/400?a=2'} texto={'Vídeo 2'}/>
              <CardVideo foto={'https://picsum.photos/400/400?a=3'} texto={'Vídeo 3'}/>
              <CardVideo foto={'https://picsum.photos/400/400?a=4'} texto={'Vídeo 4'}/>
              <CardVideo foto={'https://picsum.photos/400/400?a=5'} texto={'Vídeo 5'}/>
              <CardVideo foto={'https://picsum.photos/400/400?a=6'} texto={'Vídeo 6'}/>       
            </section>
        </main>
        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
  );
}

export default App
