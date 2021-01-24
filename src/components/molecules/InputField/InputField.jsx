import { string, number, oneOfType } from 'prop-types'
import Label from '../../atoms/Label/Label'
import Input from '../../atoms/Input/Input'
import './style.scss'

const InputField = ({
  id,
  label,
  placeholder = null,
  name,
  value,
  inputType = 'text',
  ...props
}) => {
  return (
    <div className='inputField'>
      <Label htmlFor={id} className='inputField__label'>{label}</Label>
      <Input
        name={name}
        placeholder={placeholder}
        type={inputType}
        id={id}
        value={value}
        className='input-text inputField__input'
        {...props}
      />
    </div>
  )
}

export default InputField

InputField.propTypes = {
  id: string,
  label: string,
  placeholder: string,
  name: string,
  value: oneOfType([string, number]),
  inputType: string
}
