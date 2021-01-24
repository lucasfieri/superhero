import { string, bool } from 'prop-types'

import './style.scss'
import Label from '../../atoms/Label/Label'
import Input from '../../atoms/Input/Input'

const RadioField = ({ id, label, name, checked, ...props }) => {
  return (
    <Label>
      <Input name={name} type='radio' checked={checked} id={id} {...props} />
      <span className='radio_field'>
        {label}
      </span>
    </Label>
  )
}

export default RadioField

RadioField.propTypes = {
  id: string,
  label: string,
  name: string,
  checked: bool
}
