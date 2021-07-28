import React from 'react'
import styled from 'styled-components'

export default class DadosGerais extends React.Component{
    render(){
        return(
            <>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <button onClick={this.props.TrocarPagina}>Próxima etapa</button>
            </>
        )
    }
}