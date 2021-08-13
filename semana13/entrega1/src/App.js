import React from 'react'
import PagInicial from './components/PagInicial'
import UserList from './components/UserList'
import axios from 'axios'

export default class App extends React.Component{
  state = {
    pagina: 'PagInicial',
    listaDeUsuarios: [],
    inputNome:'',
    inputEmail: ''
  }

  // componentDidMount = () => {
  //   this.getAllUsuarios().then((response) => {
  //     this.setState({ listaDeUsuarios: response.data});
  //   });
  // };

  getAllUsuarios = () => {
    return axios.get(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      {
        headers: {
          Authorization: "gabi-fogaca-johnson"
        }
      }
    )
  }


  CriarUsuarios = () => {
    return axios.post(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      {
        "name": this.state.inputNome,
        "email": this.state.inputEmail
    },
    {
      headers: {
        Authorization: "gabi-fogaca-johnson"
      }
    }
    )
    .then(() => {
      this.getAllUsuarios().then((response) => {
        this.setState({ inputNome: "", inputEmail: "" });
        this.setState({ listaDeUsuarios: response.data});
      });
    });
  }

  OnChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  OnChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  OnClickTrocarPagina  = () => {

    if(this.state.pagina === "PagInicial"){
      this.setState({pagina: "UserList"})

    }else if(this.state.pagina === "UserList"){
      this.setState({pagina: "PagInicial"})
    }
  }

  render(){
    const renderizarPagina = () => {
      if (this.state.pagina === "PagInicial") {
        return <PagInicial  
                    trocarPagina = {this.OnClickTrocarPagina} 
                    OnChangeNome={this.OnChangeNome}
                    OnChangeEmail={this.OnChangeEmail}
                    CriarUsuario={this.CriarUsuarios}
                    valorInputNome={this.state.inputNome}
                    valorInputEmail={this.state.inputEmail}
                />

      } else if(this.state.pagina === "UserList"){
        return <div>
          <UserList  trocarPagina ={this.OnClickTrocarPagina} />
          {this.state.listaDeUsuarios.map((usuarios, i) => {
          return <p key={i}>{usuarios.name}</p>;
        })}
        </div>
      }
  }
  return(
    <>
      <div className="App">{renderizarPagina()}</div>
    </>
  )
  }
}
