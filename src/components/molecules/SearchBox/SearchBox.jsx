import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import { ReactComponent as SearchIcon } from '../../../assets/images/icon_search.svg'
import './style.scss'

const SearchBox = () => {
  return (
    <div className='searchbox'>
      <Input name='search_input' className='search_input' />
      <Button handleClick={() => console.log('aaa')} icon={<SearchIcon />} className='search_button' />
    </div>
  )
}

export default SearchBox
