import styled from 'styled-components'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'

function App() {
  return <Container>
    <Hero/>
    <Main />
  </Container>
}

const Container = styled.div`
`

export default App;
