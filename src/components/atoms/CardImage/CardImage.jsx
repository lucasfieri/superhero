import React, { useState, useEffect } from 'react'
import notFound from '../../../assets/images/notfound.jpg'
import { string } from 'prop-types'

const CardImage = ({
  imageSrc,
  heroName
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(false);
  }, [imageSrc])

  const handleImageLoaded = () => {
    setIsLoaded(true)
  }

  return (
      <img
        className={`card__image${isLoaded ? '--loaded' : ''}`}
        src={imageSrc}
        alt={heroName}
        onError={(e) => e.target.src = notFound}
        onLoad={handleImageLoaded}
      />
  )
}

export default CardImage

CardImage.propTypes = {
  imageSrc: string,
  heroName: string,
}
