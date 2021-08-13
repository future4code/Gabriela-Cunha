import React from 'react'
import styled from 'styled-components'

export default class UserList extends React.Component{
    render(){
        return(
            <>
                <h1>LABENUSERS</h1>
                <button onClick={this.props.trocarPagina}>Trocar de página</button>
                <h2>Lista de usuários</h2>
            </>
        )
    }
}