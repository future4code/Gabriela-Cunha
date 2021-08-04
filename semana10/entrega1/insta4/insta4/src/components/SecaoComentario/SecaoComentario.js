import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		comentario: '',
		listaDeComentarios : []
	}

	onChangeComentario = (event) => {
		console.log('MUDOU', event.target.value)
		this.setState({comentario: event.target.value})
	}

	adicionarComentario = () =>{
		const novoComentario = {
			coment: this.state.comentario
		}
		const maisComentarios = [...this.state.listaDeComentarios, novoComentario]
		this.setState({listaDeComentarios: maisComentarios})
	}

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
