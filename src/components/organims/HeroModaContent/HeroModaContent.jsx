import { useSelector } from 'react-redux'
import CardImage from '../../atoms/CardImage/CardImage'

const HeroModaContent = () => {

  const { selectedHero } = useSelector(state => ({
    selectedHero: state.modal.content
  }))

  return (
    <>
      <div className='modal__content'>
        <div className='modal__content__image'>
        <CardImage
          heroName={selectedHero?.name}
          imageSrc={selectedHero?.image?.url}
        />
      </div>
      </div>
    </>
  )
}

export default HeroModaContent
