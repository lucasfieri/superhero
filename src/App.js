import SearchBox from './components/molecules/SearchBox/SearchBox'
import HomeTitle from './components/molecules/HomeTitle/HomeTitle'
import Container from './components/atoms/Container/Container'
import Glossary from './components/atoms/Glossary/Glossary'

function App () {
  return (
    <Container>
      <HomeTitle />
      <SearchBox />
      <Glossary />
    </Container>
  )
}

export default App
