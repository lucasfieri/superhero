import { Provider } from 'react-redux'
import SearchBox from './components/molecules/SearchBox/SearchBox'
import HomeTitle from './components/molecules/HomeTitle/HomeTitle'
import Container from './components/atoms/Container/Container'
import Glossary from './components/atoms/Glossary/Glossary'
import store from './store'

function App () {
  return (
    <Provider store={store}>
      <Container>
        <HomeTitle />
        <SearchBox />
        <Glossary />
      </Container>
    </Provider>
  )
}

export default App
