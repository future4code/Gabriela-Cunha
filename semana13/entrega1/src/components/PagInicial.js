import React from 'react'
import styled from 'styled-components'


export default class PagInicial extends React.Component{

    render(){

        return(
            <>
                <h1>LABENUSERS</h1>
                <button onClick={this.props.trocarPagina}>Trocar de página</button>
                <h2>Criar usuário</h2>
                <input placeholder={'Nome'} onChange={this.props.OnChangeNome} value={this.props.valorInputNome}/>
                <input placeholder={'E-mail'} onChange={this.props.OnChangeEmail} value={this.props.valorInputEmail}/>
                <button onClick={this.props.CriarUsuario}>Criar</button>
            </>
        
        )
    }
}