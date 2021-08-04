import React from 'react'

export default class Final extends React.Component{
    render(){
        return(
            <>
            <h1>O FORMULÁRIO ACABOU</h1>
            <button onClick={this.props.voltarPagina}>Voltar</button>
            <h3>Muito obrigado por participar! Entraremos em contato!</h3>
            </>
        )
    }
}