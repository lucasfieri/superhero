import { useSelector, useDispatch } from 'react-redux'
import { bool } from 'prop-types'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import { ReactComponent as SearchIcon } from '../../../assets/images/icon_search.svg'
import { ReactComponent as FilterIcon } from '../../../assets/images/icon_filter.svg'
import { fetchHeroes, changeInputSearch } from '../../../ducks/search'
import Popover from '../../molecules/Popover/Popover'
import FilterForm from '../FilterForm/FilterForm'

import './style.scss'

const SearchBox = ({ hasFilter }) => {
  const dispatch = useDispatch()
  const { inputSearch } = useSelector(state => ({ inputSearch: state.search.inputSearch }))
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
      {hasFilter && (
        <Popover
          buttonIcon={<FilterIcon />}
          buttonVariation='btn-secondary'
          positions={['bottom']}
          content={<FilterForm />}
        />
      )}
    </div>
  )
}

export default SearchBox

SearchBox.propTypes = {
  hasFilter: bool
}
