import React from 'react'
import styled from 'styled-components'

export default class DadosGerais extends React.Component{
    render(){
        
        return(
            <>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <form>
                <p>1 - Qual é o seu nome?</p>
                <input />
                <p>2 - Qual é a sua idade?</p>
                <input />
                <p>3 - Qual é o seu e-mail?</p>
                <input />
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option value='MedioIncompleto'>Ensino Médio Incompleto</option>
                    <option value='MedioCompleto'>Ensino Médio Completo</option>
                    <option value='SuperiorIncompleto'>Ensino Superior Incompleto</option>
                    <option value='SuperiorCursando'>Ensino Superior Cursando</option>
                    <option value='SuperiorCompleto'>Ensino Superior Completo</option>
                </select>
                </form>
                <br />
                <button onClick={this.props.TrocarPagina}>Próxima etapa</button>
            </>
        )
    }
}