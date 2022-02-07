import React, {useRef, useEffect} from "react"
import styled from 'styled-components'
import Observe, {displayComponents} from '../../effect/Effect'

function ProjetItem({img, title, desc, link}){
  const ref = useRef(null)
  useEffect(() => {
    Observe(ref.current,displayComponents)
  })


  return <Container ref={ref}  background={img} >
    <a href={link}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </a>
  </Container>
}

const Container = styled.article`
  display:flex;
  justify-content:center;
  align-items:center;
  background-image: url('${props => props.background}') ;
  background-size:cover;
  background-position:top center;
  border-radius:.5em;
  font-size:16px;
  width:18em;
  aspect-ratio:4/3;
  overflow:hidden;
  transition:.3s;
  a{
    backdrop-filter: blur( 3px );
    display:block;
    width:100%;
    height:100%;
    background:rgba(147, 112, 219,.8);
    opacity:0;
    border-radius:.5em;
    box-shadow:0 0 4px 5px rgba(147, 112, 219,.8);
    border:rgba(147, 112, 219,.8);
    color:ivory;
    h1{
      text-align:center;
      text-transform:capitalize;
      line-height:2em;
      font-size:1.5em;
    }
    p{
      margin:1em;
      font-size:.8em;
    }
  }
  :hover{
    a{
      opacity:1;
      transform:scale(.9);
      transition:.3s;
    }
  }

`

ProjetItem.defaultProps = {
  img:'ici une image',
  title:'Nom du projet',
  desc:'brève description'
}

export default ProjetItem

