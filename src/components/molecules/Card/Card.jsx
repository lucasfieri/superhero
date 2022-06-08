import React from 'react'
import Subtitle from '../../atoms/Subtitle/Subtitle'
import CardImage from '../../atoms/CardImage/CardImage'
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
      <CardImage
        heroName={heroName}
        imageSrc={imageSrc}
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
