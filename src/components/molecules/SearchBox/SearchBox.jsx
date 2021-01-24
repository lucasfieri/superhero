import { useState } from 'react'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import { ReactComponent as SearchIcon } from '../../../assets/images/icon_search.svg'
import './style.scss'

const SearchBox = () => {
  const [inputSearch, setInputSearch] = useState('')

  return (
    <div className='searchBox'>
      <Input
        name='search_input'
        className='searchBox__input'
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <Button
        variation='btn-primary searchBox__button'
        handleClick={() => console.log('aaa')}
        icon={<SearchIcon />}
      />
    </div>
  )
}

export default SearchBox
