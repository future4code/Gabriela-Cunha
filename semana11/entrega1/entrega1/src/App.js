import React from 'react';
import './App.css';
import DadosGerais from './components/pages/DadosGerais';
import EnsinoSuperior from './components/pages/EnsinoSuperior';

export default class App extends React.Component{
  state = {
    pagina: "DadosGerais"
  }

  trocarPagina = () => {
    if(this.pagina.state === "DadosGerais"){
      this.setState({pagina: "EnsinoSuperior"})

    }else if(this.pagina.state === "EnsinoSuperior"){
      this.setState({pagina: "EnsinoGeral"})

    } else if(this.pagina.state === "EnsinoGeral"){
      this.setState({pagina:"Final"})
    }
  }

  render(){
    const renderizarPagina = () => {
      if (this.state.pagina === "DadosGerais") {
        return <DadosGerais TrocarPagina={this.trocarPagina} />;

      } else if(this.state.pagina === "EnsinoSuperior"){
        return <EnsinoSuperior TrocarPagina={this.trocarPagina} />
      }
    };
    return <div className="App">{renderizarPagina()}</div>; 
  }
}


