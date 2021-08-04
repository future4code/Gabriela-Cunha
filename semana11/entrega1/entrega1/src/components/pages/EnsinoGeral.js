import React from 'react'

export default class EnsinoGeral extends React.Component{
    render(){
        return(
            <>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>1 - Por que você não terminou um curso de graduação?</p>
                <input />
                <p>2 - Você fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de idiomas</option>
                </select>
                <br />
                <button onClick={this.props.voltarPagina}>Voltar</button>
                <button onClick={this.props.TrocarPagina}>Próxima etapa</button>
            </>
        )
    }
}