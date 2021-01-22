import React from 'react'
import Subtitle from '../../atoms/Subtitle/Subtitle'
import './style.scss'

const Card = () => {
  return (
    <div className='card'>
      <img className='card__image' src='https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/174.jpg' alt='Scarlet Spider' />
      <div className='card__bottom'>
        <Subtitle text='Scarlet Spider' />
        <Subtitle text='Spider-Carnage' />
      </div>
    </div>
  )
}

export default Card
