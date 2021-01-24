import { useState } from 'react'
import Buttom from '../../atoms/Button/Button'
import Subtitle from '../../atoms/Subtitle/Subtitle'
import InputField from '../../molecules/InputField/InputField'
import RadioField from '../../molecules/RadioField/RadioField'
import Label from '../../atoms/Label/Label'
import Input from '../../atoms/Input/Input'
import Span from '../../atoms/Span/Span'

import './style.scss'

const FilterForm = () => {
  const [range, setRange] = useState(0)
  const [nameFilter, setNameFilter] = useState('')
  const [powerSelected, setPowerSelected] = useState('')
  const powers = [
    {
      label: 'Inteligência',
      id: 'power_filter_int'
    },
    {
      label: 'Força',
      id: 'power_filter_stg'
    },
    {
      label: 'Velocidade',
      id: 'power_filter_vel'
    },
    {
      label: 'Duralilidade',
      id: 'power_filter_dur'
    },
    {
      label: 'Poder',
      id: 'power_filter_pow'
    },
    {
      label: 'Combate',
      id: 'power_filter_com'
    }
  ]

  function handleSubmit (e) {
    e.preventDefault()
  }

  function clearForm () {
    setRange(0)
    setNameFilter('')
    setPowerSelected('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Subtitle text='Filtros' className='filterForm__subtitle' />
      <InputField
        id='name_filter'
        name='name_filter'
        label='Nome'
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <Label className='filterForm__powerLabel' htmlFor='powers'>Poderes</Label>
      <div className='filterForm__powerInputs' id='powers'>
        {powers.map((power, index) => (
          <RadioField
            name='power_filter'
            key={index}
            id={power.id}
            label={power.label}
            value={power.id}
            checked={powerSelected === power.id}
            onChange={(e) => setPowerSelected(e.target.value)}
          />)
        )}
      </div>
      <div className='filterForm__rangeSlider'>
        <Input
          type='range'
          name='range_filter'
          className='input-range filterForm__rangeSlider__input'
          value={range}
          onChange={(e) => setRange(e.target.value)}
        />
        <Span className='filterForm__rangeSlider__span'>{range}</Span>
      </div>
      <div className='filterForm__buttonsContainer'>
        <Buttom
          placeholder='Aplicar'
          type='submit'
          variation='btn-primary filterForm__buttonsContainer__button'
        />
        <Buttom
          placeholder='Limpar'
          variation='btn-outline filterForm__buttonsContainer__button'
          handleClick={() => clearForm()}
        />
      </div>
    </form>
  )
}

export default FilterForm
