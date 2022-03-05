import React, {useState, useEffect}  from "react"
import styled from 'styled-components'

import SectionContainer from '../../styled/SectionContainer'
import ProjetItem from './ProjetItem'

function Projet(){
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('data/projects.json')
      .then(response => response.json())
      .then(result => setProjects(result.projects))
      }, [])


  return <Container id='projets'>
    <h1>Mes réalisations</h1>

    {projects && projects.map((projet, _index)=> <ProjetItem key={_index} {...projet} />)}


  </Container>

}

const Container = styled(SectionContainer)`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:10px;
  background-color:lightblue;
  overflow-x:hidden;
  height:auto;
  >h1{
    color:hsl(11,73%,66%);
    width:100%;
    text-align:center;
    line-height:4em;
    font-size:2em;
    text-transform:capitalize;
  }
`




export default Projet
