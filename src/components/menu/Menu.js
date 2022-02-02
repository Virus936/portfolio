import React from "react"
import styled from 'styled-components'
import Hamburger from './Hamburger'
import {selectMenu} from '../../features/menu/menuSlice'
import {useSelector, useDispatch} from 'react-redux'
import {toggle} from '../../features/menu/menuSlice'

function Menu({font, background}){
  const menu = useSelector(selectMenu)
  const dispatch = useDispatch()

  return <Container>
    <Header font={font} background={background}>
      <Hamburger active={menu} onClick={() => dispatch(toggle())} color={font} />
      <h1>V.Lok</h1>
    </Header>
    <Nav background={background} font={font} className={menu?'active':''}>
      <ul >
        <li>iqwe</li>
        <li>qweqweqwe</li>
        <li>alskj</li>
      </ul>
    </Nav>
  </Container>
}

const Container = styled.div`
  z-index:90;
  position:sticky;
  top:0;
`
const Nav = styled.div`
  max-height:0;
  overflow:hidden;
  background-color:${props => props.background};
  transition:.2s;
  color:${props => props.font};
  text-align:center;
  &.active{
    max-height:50vh;
    transition:.5s;
  }
  li:hover{
    background-color:rgba(200, 200, 200, .2);
    cursor:pointer;
  }
`

const Header = styled.nav`
  position:relative;
  background-color:${props => props.background};
  display:flex;
  align-items:center;
  padding:5px max(30px, calc((100vw - 1200px)/2));
  font-size:16px;

  h1{
    margin:auto;
    color:${props => props.font};
    font-size:2em;
    font-weight:bold;
    letter-spacing:.5em;
  }
`

export default Menu
