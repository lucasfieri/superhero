import { useSelector, useDispatch } from 'react-redux'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import { ReactComponent as SearchIcon } from '../../../assets/images/icon_search.svg'
import { fetchHeroes, changeInputSearch } from '../../../ducks/search'

import './style.scss'

const SearchBox = () => {
  const dispatch = useDispatch()
  const { inputSearch } = useSelector(state => ({ inputSearch: state.inputSearch }))
  return (
    <div className='searchBox'>
      <Input
        name='search_input'
        className='searchBox__input'
        value={inputSearch}
        onChange={(e) => dispatch(changeInputSearch(e.target.value))}
      />
      <Button
        variation='btn-primary searchBox__button'
        handleClick={() => dispatch(fetchHeroes())}
        icon={<SearchIcon />}
      />
    </div>
  )
}

export default SearchBox
