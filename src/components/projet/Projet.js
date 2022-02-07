import React  from "react"
import styled from 'styled-components'

import SectionContainer from '../../styled/SectionContainer'
import ProjetItem from './ProjetItem'
import amazonfont from '../../image/projets/amazonfront.png'
import calculator from '../../image/projets/calculator.png'
import tesla from '../../image/projets/tesla-vitrine.png'
import rpc from '../../image/projets/rock-papper-scissors.png'
import splitter from '../../image/projets/tip-calculator.png'

function Projet(){

  const projets = [
    {
      title:'amazon-clone',
      img:amazonfont,
      desc:"Amazon-clone est une reproduction de la partie frontend du site Amazon. Les produits sont issues de l'api public fakestoreAPI",
      link:"https://e-clone-36390.firebaseapp.com/"
    },
    {
      title:'calculator',
      img:calculator,
      desc:'Calculator est ma proposition de challenge frontendmentor qui a été réalisé en pure html, css, js',
      link:"https://virus936.github.io/calculator-js/"
    },
    {
      title:'tesla-vitrine',
      img:tesla,
      desc:'Tesla-vitrine est une reproduction du site vitrine de tesla réalisé en ReactJS',
      link:"https://virus936.github.io/tesla-vitrine/"
    },
    {
      title:'pierre-papier-ciseaux',
      img:rpc,
      desc:"On connait tous le Pierre-Papier-Ciseaux, Sheldon(The Big Bang Theory) a une version 'améliorée'. J'ai développé en Full ReactJS cette version dans le cadre d'un challenge frontendmentorr",
      link:"https://virus936.github.io/rock-paper-scissors-spock-lizard/"
    },
    {
      title:'Splitter',
      img:splitter,
      desc:"Dans plusieurs pays, le service n'est pas intégré à l'addition. Tip-Calculator est un outil développé en ReactJS pour faciliter le calcul.",
      link:"https://virus936.github.io/tip-calculator/",
      library:["React Hook Form"]
    },
  ]

  return <Container>
    <h1>Mes réalisations</h1>

    {projets && projets.map((projet, _index)=> <ProjetItem key={_index} {...projet} />)}

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
