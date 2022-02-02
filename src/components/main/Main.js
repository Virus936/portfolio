import React, {useState} from "react"
import styled from 'styled-components'
import Menu from '../menu/Menu'
import Presentation from '../presentation/Presentation'
import Projet from '../projet/Projet'


function Main(){
  return(
    <Container>
      <Menu font='orange' background='lightgreen' />
      <Presentation />
      <Projet />

    </Container>
    )
}

const Container = styled.main`


`
export default Main
