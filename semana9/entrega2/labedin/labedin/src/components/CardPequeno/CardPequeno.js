import React from 'react'
import './CardPequeno.css'

function CardPequeno (props){
    return(
        <div className='cardPequenoContainer'>
            <img src={props.CardPequenoImagem}/>
            <div>
                <h4>{props.tituloCardPequeno}</h4>
                <p>{props.descricaoCardPequeno}</p>
            </div>
        </div>
    )
}

export default CardPequeno