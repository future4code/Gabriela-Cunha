import React from 'react'
import '../App.css'

const BotaoMenu = (props) =>{
    return(
        <li className="botoes-meunu-vertical">{props.titulo}</li>
    )
}

export default BotaoMenu