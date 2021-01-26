import SearchBox from '../components/organims/SearchBox/SearchBox'
import HomeTitle from '../components/molecules/HomeTitle/HomeTitle'
import Container from '../components/atoms/Container/Container'
import Glossary from '../components/atoms/Glossary/Glossary'

function Home () {
  return (
    <Container variation='container__home'>
      <HomeTitle />
      <SearchBox />
      <Glossary />
    </Container>
  )
}

export default Home
