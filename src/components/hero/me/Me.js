import styled from 'styled-components'


export const SkillFace = ({img}) => {
  return <Face>
      <img src={img} alt="" />
    </Face>
}

const Face = styled.div`
  display: block;
  position: absolute;
  width: 100px;
  height: 40px;
  font-size: 30px;

  backface-visibility: hidden;
  text-align: center;
  img{
    height: 100px;
  }
  &:nth-of-type(1){
    transform: translateZ(50px);
  }
  &:nth-of-type(2){
    transform: rotateY(180deg) translateZ(50px);  
  }

  &:nth-of-type(3){
    transform: rotateY(90deg) translateZ(50px);
  }
  &:nth-of-type(4){
    transform: rotateY(-90deg) translateZ(50px);
  }

`

export const MePicture = styled.div`
  position:absolute;
`

export const MeMask = styled.div`
  position:absolute;
  right:169px;
  top:-393px;
`

export const MeSkill = styled.div`
  position:absolute;
  width:90px;
  right:285px;

  height:40px;
  perspective-origin: center;
  transform-style: preserve-3d;
`

export const Me = styled.div`
  display:flex;
  position:relative;
  align-items: center;
  justify-content: flex-end;
  @media(max-width:800px){
    transform:scale(.5);
  }
`
