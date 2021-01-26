import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { fetchHeroesOnLoadPage } from '../../ducks/search'
import { ReactComponent as Spinner } from '../../assets/images/spinner.svg'
import SearchBox from '../../components/organims/SearchBox/SearchBox'
import Title from '../../components/atoms/Title/Title'
import Container from '../../components/atoms/Container/Container'
import Glossary from '../../components/atoms/Glossary/Glossary'
import CardGrid from '../../components/template/CardGrid/CardGrid'

import './style.scss'

function Search () {
  const dispatch = useDispatch()
  const history = useHistory()
  const { results, isFetching } = useSelector(state => ({
    results: state.search.results,
    isFetching: state.search.isFetching
  }))
  const { search } = useParams()

  const hasHeroes = results.some(result => result.id)
  const handleClick = () => history.push('/')

  useEffect(() => {
    if (!hasHeroes) {
      dispatch(fetchHeroesOnLoadPage(search))
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch(fetchHeroesOnLoadPage(search))
    // eslint-disable-next-line
  }, [search])

  return (
    <Container variation='container__home'>
      <Title text='Superhero' className='search__title' onClick={handleClick} />
      <SearchBox hasFilter />
      <Glossary />
      {isFetching && <Spinner />}
      {(!hasHeroes && !isFetching) && <div>Sem resultados</div>}
      {(hasHeroes && !isFetching) && <CardGrid />}
    </Container>
  )
}

export default Search
