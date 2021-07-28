import React from 'react';
import './App.css';
import DadosGerais from './components/pages/DadosGerais';
import EnsinoSuperior from './components/pages/EnsinoSuperior';
import EnsinoGeral from './components/pages/EnsinoGeral';
import Final from './components/pages/Final';

export default class App extends React.Component{
  state = {
    pagina: "DadosGerais"
  }

  trocarPagina = () => {
    if(this.state.pagina === "DadosGerais"){
      this.setState({pagina: "EnsinoSuperior"})

    }else if(this.state.pagina === "EnsinoSuperior"){
      this.setState({pagina: "EnsinoGeral"})

    } else if(this.state.pagina === "EnsinoGeral"){
      this.setState({pagina:"Final"})
    }
  }

  render(){
    const renderizarPagina = () => {
      if (this.state.pagina === "DadosGerais") {
        return <DadosGerais TrocarPagina={this.trocarPagina} />;

      } else if(this.state.pagina === "EnsinoSuperior"){
        return <EnsinoSuperior TrocarPagina={this.trocarPagina} />

      }else if(this.state.pagina === "EnsinoGeral"){
        return <EnsinoGeral TrocarPagina={this.trocarPagina} />

      }else if(this.state.pagina === "Final"){
        return <Final />
      }
    };
    return <div className="App">{renderizarPagina()}</div>; 
  }
}


