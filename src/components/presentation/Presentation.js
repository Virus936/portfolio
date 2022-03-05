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
    <h2>Qui suis-je ?</h2>
    <p>Animateur dans une structure de soutien scolaire et d'aide aux devoirs, je me spécialise dans les mathématiques.</p> 
    <p>Ça fait quelques années que l'algorithmie et le langage informatique apparait dans le programme scolaire des lycéens. J'apprend donc en full autodidacte le langage python et le javascript... Et quelle découverte ? Je découvre une nouvelle discipline à laquelle je prend rapidement goût</p>
    <p>L'idée d'en faire mon métier émmerge dans un coin de ma tête. C'est ce foutu covid qui précipite ma décision de me lancer. En Mars 2021, le youtuber GodofMacro lance une piscine d'une semaine pour apprendre et se perfectionner en javascript. J'y participe et ça confirme mon désir de devenir développeur.</p>
    <p>Je découvre ReactJS, je réalise plusieurs clone de site web, je participe à plusieurs challenge du site <a href="https://www.frontendmentor.io/home">frontendmentor.io</a>. Tous ces projets m'ont permis de me donner la confiance nécessaire pour affirmer que je suis développeur, intégrateur ReactJS.</p>
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
  p{
    margin-bottom:1em;
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
