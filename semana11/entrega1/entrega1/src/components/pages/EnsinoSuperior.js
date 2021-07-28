import React from 'react'

export default class EnsinoSuperior extends React.Component{
    render(){
        return(
            <>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <button onClick={this.props.TrocarPagina}>Pŕoxima etapa</button>
            </>
        )
    }
}