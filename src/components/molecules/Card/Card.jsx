import React from 'react'
import Subtitle from '../../atoms/Subtitle/Subtitle'
import notFound from '../../../assets/images/notfound.jpg'
import { string } from 'prop-types'

import './style.scss'

const Card = ({ imageSrc, heroName, heroPublisher }) => {
  return (
    /* eslint-disable no-return-assign */
    <div className='card'>
      <img className='card__image' src={imageSrc} alt={heroName} onError={(e) => e.target.src = notFound} />
      <div className='card__bottom'>
        <Subtitle text={heroName} />
        <Subtitle text={heroPublisher} />
      </div>
    </div>
    /* eslint-disable no-return-assign */
  )
}

export default Card

Card.propTypes = {
  imageSrc: string,
  heroName: string,
  heroPublisher: string
}
