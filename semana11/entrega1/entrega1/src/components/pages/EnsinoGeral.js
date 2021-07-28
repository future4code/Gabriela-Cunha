import React from 'react'

export default class EnsinoGeral extends React.Component{
    render(){
        return(
            <>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <button onClick={this.props.TrocarPagina}>Próxima etapa</button>
            </>
        )
    }
}