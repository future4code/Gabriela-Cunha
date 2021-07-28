import React from 'react'

export default class EnsinoSuperior extends React.Component{
    render(){
        return(
            <>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <p>1 - Qual curso?</p>
                <input />
                <p>2 - Qual a unidade de ensino?</p>
                <input />
                <br />
                <button onClick={this.props.TrocarPagina}>Pŕoxima etapa</button>
            </>
        )
    }
}