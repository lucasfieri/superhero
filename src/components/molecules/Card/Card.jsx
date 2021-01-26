import React from 'react'
import Subtitle from '../../atoms/Subtitle/Subtitle'
import notFound from '../../../assets/images/notfound.jpg'
import { string, func, number } from 'prop-types'

import './style.scss'

const Card = ({
  imageSrc,
  heroName,
  heroPublisher,
  handleClick,
  index
}) => {
  return (
    /* eslint-disable no-return-assign */
    <div
      className='card'
      role='button'
      onClick={handleClick}
      tabIndex={index}
    >
      <img
        className='card__image'
        src={imageSrc}
        alt={heroName}
        onError={(e) => e.target.src = notFound}
      />
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
  heroPublisher: string,
  handleClick: func,
  index: number
}
