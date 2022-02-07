import React, {useState, useEffect, useRef} from "react"

import styled from 'styled-components'
import {Me, MePicture, MeSkill, SkillFace, MeMask} from './me/Me'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

import body from '../../image/me/body.png'
import mask from '../../image/me/mask.png'

import html from '../../image/me/html_logo.png'
import css from '../../image/me/css_logo.png'
import js from '../../image/me/js_logo.png'
import react from '../../image/me/react_logo.png'


function Hero(){
  const bodyRef = useRef(null)
  const maskRef = useRef(null)
  const skillRef = useRef(null)
  const meRef = useRef(null)
  const containerRef = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()

    tl.from(bodyRef.current,{
      opacity:0,
      duration:.9,
      y:'240px',
      delay:.4,
    })
    tl.from(maskRef.current,{
      opacity:0,
      duration:.9,
      x:'200px',
      delay:.5,
      ease:"elastic.out( 1, 0.3)"
    })
    tl.from(
      skillRef.current,
      {
        opacity:0,
        duration:.5,
        ease:'none',
      }
    )

    tl.fromTo(
      skillRef.current,
      {rotationY:0},
      {rotationY:360, duration:3, repeat:-1,ease:'none'}
    )
    tl.fromTo(
      meRef.current,
      {y:'0',x:'0'},
      {
        x:'-1600px',
        scrollTrigger:{
          trigger: '#acceuil',
          //trigger: containerRef.current,
          scrub:0,
        },
        ease:'none'
      },)
    
    tl.fromTo(
      '#text_hero',
      {y:'0',x:'0'},
      {
        y:'-1400px',
        scrollTrigger:{
          trigger: '#acceuil',
          scrub:0,
        },
        ease:'none'
      },)

    ScrollTrigger.create({
      trigger:'#accueil',
      start:'top',
      end:'+=650',
      pin:true,
    })


  })
  return <Container id='accueil' ref={containerRef}>
    <TextHero  name = 'Vira Lok' step={200}/>
    <Me ref={meRef}>
      <MePicture ref={bodyRef}> <img src={body} alt="" /> </MePicture>
      <MeMask ref={maskRef}> <img src={mask} alt="" /> </MeMask>

      <MeSkill ref={skillRef}>
        <SkillFace img={html} />
        <SkillFace img={js} />
        <SkillFace img={css} />
        <SkillFace img={react} />
      </MeSkill>

    </Me>
  </Container>

}


const TextHero = ({name, step }) => {
  const [currentName, setCurrentName] = useState("")
  useEffect(() => {
    [...name].forEach((e,i)=>{
      setTimeout(()=>{

        setCurrentName(name.slice(0,i+1))
      },i*step)
    })
  },[]);



  return <TextHeroStyled  id='text_hero'>
    <p> Bonjour, je suis </p>
    <p className='name'> {currentName && currentName.split('').map((e,i) => <span className='letter' key={i}>{e}</span> )} </p>
    <p>Développeur, intégrateur web junior ReactJS</p>
  </TextHeroStyled>
}

const TextHeroStyled = styled.div`
  background:rgba(135, 206, 235,.6) url('./asset/bg-pattern.svg');
  backdrop-filter: blur( 3px );
  background-size:80%;
  background-repeat:no-repeat;
  background-position: -20% -30%;
  z-index:100;
  padding:3em;
  border-radius:2em;
  box-shadow:0 0 40px 0 teal;
  user-select:none;
  .name{
    .letter{
      display:inline-block;
      padding:.1em;
      font-size:3em;
      font-weight:bold;
      :hover{
        transition:.4s;
      }

      :nth-of-type(3n){
        color:#00bfff;
        transform:translateY(-4px);
        animation: 2s showletterup;

        :hover{
          transform:translateY(-4px) scale(1.9) rotateX(360deg);
        }

        @keyframes showletterup{
          from{
            transform:rotate(-360deg) translateY(100px) scale(3) ;
            opacity:0;
          }
          to{
            transform:rotate(0deg) translateY(-4px);
            opacity:1;
          }
        }

      }
      :nth-of-type(3n+1){
        color:khaki;
        transform:translateY(0);
        animation: showletter 2s;

        :hover{
          transform:translateY(-4px) scale(1.9) rotateY(360deg);
        }
        @keyframes showletter{
          from{
            transform:rotate(-360deg) translateY(100px) scale(3) ;
            opacity:0;
          }
          to{
            transform:rotate(0deg) ;
            opacity:1;
          }
        }
      }
      :nth-of-type(3n+2){
        color:lightsalmon;
        transform:translateY(4px);
        animation: 2s showletterdown;

        :hover{
          transform:translateY(-4px) scale(1.9) rotateZ(360deg);
        }
        @keyframes showletterdown{
          from{
            transform:rotate(-360deg) translateY(100px) scale(3) ;
            opacity:0;
          }
          to{
            transform:rotate(0deg) translateY(4px);
            opacity:1;
          }
        }
      }

    }

  }
`

const Container = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  align-items:center;
  height:100vh;
  overflow:hidden;
  background-color:tranparent
`

export default Hero
