import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido] = useState(true)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const[comentado, setComentado] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [iconeCurtida, setIconeCurtida] = useState(iconeCoracaoBranco)
  const [comentarios, setComentarios] = useState([])

  

  const onClickCurtida = () => {
    if(curtido) {
      setIconeCurtida(iconeCoracaoPreto)
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
    } else {
      setIconeCurtida(iconeCoracaoBranco)
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
    }
  };

  const onClickComentario = () => {
    setComentado(!comentado)

  };


  const enviarComentario = (comentario) => {
    setNumeroComentarios(numeroComentarios + 1)
    const listaDeComentarios = [...comentarios, comentario]

      setComentarios(listaDeComentarios)
      setComentado(false)

  }


  const caixaDeComentario = comentado? (
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (

    comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post