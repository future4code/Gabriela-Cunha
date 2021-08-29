import React from "react";
import styled from "styled-components";
import imagemDeFundo from "./image/imagemdefundo.jpeg";
import Playlists from "./components/playlist";

const ContainerPrincipal = styled.div`
  background: url(${imagemDeFundo});
  background-size: contain;
  width: 80vw;
  height: 75vh;
  margin: auto;
  margin-top: 1%;
  display: flex;
  flex-direction: inline;
  justify-content: space-between;
`;
const MenuLateral = styled.div`
  background-color: #5f9ea0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: fantasy;
  font-size: 200%;
  margin: 1%;
  border-radius: 15px;
  width: 20%;
  opacity: 0.9;
`;
const MenuPrincipal = styled.div`
  background-color: #2f4f4f;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-family: fantasy;
  font-size: 200%;
  border-radius: 15px;
  margin-top: 12%;
  margin-right: 1%;
  opacity: 0.9;
`;
const TituloLabefy = styled.h1`
  margin-top: -140px;
  font-size: 250%;
  color: orange;
`;
const TituloPlaylists = styled.h3`

`;


const DivMusicas = styled.h3`
  margin-bottom: 100%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
`;
const BuscarMusica = styled.input`
  width: 100%;
  height: 8%;
  margin-top: 10%;
  border-radius: 20px;
`;
const OnClickBuscar = styled.button`
margin-bottom: 100%;
margin-left: 40%;
`;

export default class App extends React.Component {
  render() {
    return (
      <ContainerPrincipal>
        <MenuLateral>
          <TituloPlaylists>Playlists</TituloPlaylists>
          <Playlists />
        </MenuLateral>
        <MenuPrincipal>
          <TituloLabefy>LABEFY</TituloLabefy>
          <DivMusicas>
            {" "}
            | Músicas |
            <div>
              <BuscarMusica placeholder={"Buscar playlist"}></BuscarMusica>
              <OnClickBuscar>Buscar</OnClickBuscar>
            </div>
          </DivMusicas>
        </MenuPrincipal>
      </ContainerPrincipal>
    );
  }
}
