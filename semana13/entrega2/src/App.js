import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    pagina: "PagInicial",
    listaDeUsuarios: [],
    inputNome: "",
    inputEmail: "",
  };

  ApagarUsuario = (id) => {
    return axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: { Authorization: "gabi-fogaca-johnson" },
        }
      )
      .then(() => {
        this.getAllUsuarios().then((response) => {
          alert('Usuário removido com sucesso')
          this.setState({listaDeUsuarios: response.data})
        });
      });
  };

  componentDidMount = () => {
    this.getAllUsuarios().then((response) => {
      this.setState({ listaDeUsuarios: response.data });
    });
  };

  getAllUsuarios = () => {
    return axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: { Authorization: "gabi-fogaca-johnson" },
      }
    );
  };

  CriarUsuarios = () => {
    return axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          name: this.state.inputNome,
          email: this.state.inputEmail,
        },
        {
          headers: { Authorization: "gabi-fogaca-johnson" },
        }
      )
      .then(() => {
        this.setState({ InputNome: "" });
        this.setState({ InputEmail: "" });
        this.getAllUsuarios().then((response) => {
          alert("Usuário criado com sucesso!");
          this.setState({ listaDeUsuarios: response.data });
        });
      });
  };

  OnChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  OnChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  OnClickTrocarPagina = () => {
    if (this.state.pagina === "PagInicial") {
      this.setState({ pagina: "UserList" });
    } else if (this.state.pagina === "UserList") {
      this.setState({ pagina: "PagInicial" });
    }
  };

  render() {
    const renderizarPagina = () => {
      if (this.state.pagina === "PagInicial") {
        return (
          <>
            <h1>LABENUSERS</h1>
            <button onClick={this.OnClickTrocarPagina}>Trocar de página</button>
            <h2>Criar usuário</h2>
            <input
              placeholder={"Nome"}
              value={this.state.InputNome}
              onChange={this.OnChangeNome}
            />
            <input
              placeholder={"E-mail"}
              value={this.state.InputEmail}
              onChange={this.OnChangeEmail}
              type="email"
            />
            <button onClick={this.CriarUsuarios}>Criar</button>
          </>
        );
      } else if (this.state.pagina === "UserList") {
        return (
          <div>
            <h1>LABENUSERS</h1>
            <button onClick={this.OnClickTrocarPagina}>Trocar de página</button>
            <h2>Lista de usuários</h2>
            {this.state.listaDeUsuarios.map((usuarios, i) => {
              return (
                <div>
                  <p key={i}>{usuarios.name}</p>
                  <button onClick={() => {this.ApagarUsuario(usuarios.id)}}>X</button>
                </div>
              );
            })}
          </div>
        );
      }
    };
    return (
      <>
        <div className="App">{renderizarPagina()}</div>
      </>
    );
  }
}
