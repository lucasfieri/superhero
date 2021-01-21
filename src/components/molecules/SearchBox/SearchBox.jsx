import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import { ReactComponent as SearchIcon } from '../../../assets/images/icon_search.svg'
const SearchBox = () => {
  return (
    <div className='searchbox'>
      <Button handleClick={() => console.log('aaa')} icon={<SearchIcon />} />
      <Input name='search_input' />
    </div>
  )
}

export default SearchBox
