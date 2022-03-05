import React, {useEffect, useRef} from "react"
import styled from 'styled-components'
import SectionContainer from '../../styled/SectionContainer'
import Observe, {displayComponents} from '../../effect/Effect'


function Presentation(){
  const ref = useRef(null)
  useEffect(() => {
    const all = ref.current.querySelectorAll('*')
    all.forEach(el => {
      Observe(el, displayComponents)
    })
  })

  return <Container id='presentation' ref ={ref}>
    <h1>Présentation</h1>
    <p>Passionné dans le domaine du web, je suis actuellement développeur orienté frontend</p>
  </Container>
}

const Container = styled(SectionContainer)`
  display:flex;
  background:pink url('./asset/bg-pattern.svg');
  background-repeat:no-repeat;
  background-size:70vh;
  background-position: 75% 135%;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color:hsl(11,73%,66%);
  h1,p{
    transition:800ms;
  }
  h1{
    width:100%;
    text-align:center;
    line-height:4em;
    font-size:2em;
    text-transform:capitalize;
  }
`

export default Presentation
