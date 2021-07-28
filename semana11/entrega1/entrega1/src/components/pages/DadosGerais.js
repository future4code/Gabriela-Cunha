import React from 'react'
import styled from 'styled-components'

export default class DadosGerais extends React.Component{
    render(){
        return(
            <>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1 - Qual é o seu nome?</p>
                <input />
                <p>2 - Qual é a sua idade?</p>
                <input />
                <p>3 - Qual é o seu e-mail?</p>
                <input />
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Cursando</option>
                    <option>Ensino Superior Completo</option>
                </select>
                <br />
                <button onClick={this.props.TrocarPagina}>Próxima etapa</button>
            </>
        )
    }
}