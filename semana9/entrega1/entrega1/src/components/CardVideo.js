import React from 'react'
import '../App.css'

const CardVideo = (props) =>{
    return(
        <div className="box-pagina-principal">
        <img src={props.foto} alt={props.texto}/>
        <h4>{props.texto}</h4>
        
     </div>
    )
}

export default CardVideo