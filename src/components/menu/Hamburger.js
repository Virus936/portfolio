import styled from 'styled-components'

const Hamburger = ({active, color, onClick}) => {
  const className = ''+(active?'active':'')

  return <Container onClick={onClick} >
    <Pan className={className} color={color} />
  </Container>
}

const Container = styled.div`

  
  position:relative;
  display:flex;
  align-items:center;
  cursor:pointer;
  height:2em;
  width:2em;

`
const Pan = styled.div`
  position:absolute;
  display:block;
  background-color:${props => props.color};
  height:.3em;
  width:2em;
  border-radius:100vh;
  transition:.2s;

  :before,:after{
    content:'';
    position:absolute;
    border-radius:100vh;
    height:.3em;
    width:2em;
    background-color:${props => props.color};
    transition:.2s;

  }
  :before{
    top:-200%;
  }
  :after{
    bottom:-200%;
  }
  &.active{
    background-color:transparent;
    transition:.2s;
    :before{
      top:0;
      transform:rotate(45deg);
      transition:.2s ;
    }
    :after{
      bottom:0;
      transform:rotate(-45deg);
      transition:.2s;
    }


  }
`
export default Hamburger
