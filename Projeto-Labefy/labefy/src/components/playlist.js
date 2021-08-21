import axios from 'axios'
import React from 'react'
import styled from 'styled-components'


const InputNomePlaylist = styled.input`
    width: 60%;
    height: 5%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
`
const BotaoCriarPlaylist = styled.button`

`
const Opcoes = styled.div`
    display: flex;
    flex-direction: inline;
    width: 90%;
    justify-content: space-between;
`

const OpcaoPlaylist = styled.p`
    font-size: 80%;
    margin: 2%;
`
const BotaoApagarPlaylist = styled.button `
    height: 40%;
    margin-top: 9%;
`


export default class Playlists extends React.Component{
    state = {
        listaPlaylists: [],
        inputListaPlaylists: ''
    }

    componentDidMount = () => {
        this.getAllPlaylists().then((resp) => {
            this.setState({listaPlaylists: resp.data.result.list})
        })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        return axios.delete(
            url,
            {
                headers: {Authorization: 'gabi-fogaca-johnson'},
            }
        ).then(() => {
           this.getAllPlaylists().then((resp) => {
               this.setState({listaPlaylists: resp.data.result.list})
           })
        })  
    }

    onChangeInputCriarPlaylist = (event) => {
        this.setState({inputListaPlaylists: event.target.value})
    }

    getAllPlaylists = () => {
        return axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
            {
                headers: {Authorization: 'gabi-fogaca-johnson'}
            }
        )
    }

    onClickCriarPlaylist = () => {
        return axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
            {
                name: this.state.inputListaPlaylists
            },
            {
                headers: {Authorization: 'gabi-fogaca-johnson'}
            }
        ).then(() =>{
            this.setState({inputListaPlaylists: ''})
            this.getAllPlaylists().then((resp) => {
                this.setState({listaPlaylists: resp.data.result.list})
            })
        })
    }

    render(){
        return(
            <>
                <InputNomePlaylist placeholder={'Nome da playlist'} 
                    onChange = {this.onChangeInputCriarPlaylist}
                    value = {this.state.inputListaPlaylists}
                />
                <BotaoCriarPlaylist
                    onClick = {this.onClickCriarPlaylist}
                >Criar playlist</BotaoCriarPlaylist>
                {this.state.listaPlaylists.map((nomePlaylist,i) => {
                    return(
                        <Opcoes>
                            <OpcaoPlaylist key={i}>{nomePlaylist.name}</OpcaoPlaylist>
                            <BotaoApagarPlaylist
                                onClick={() => {this.deletarPlaylist(nomePlaylist.id)}}
                            >X</BotaoApagarPlaylist>
                        </Opcoes>
                    )
                })}


            </>
        )
    }
}