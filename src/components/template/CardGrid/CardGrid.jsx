import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeOffSet, getCards } from '../../../ducks/pagination'
import Card from '../../../components/molecules/Card/Card'
import Modal from '../../molecules/Modal/Modal'
import ReactPaginate from 'react-paginate';

import './style.scss'
import { selectHero } from '../../../ducks/modal'
import HeroModaContent from '../../organims/HeroModaContent/HeroModaContent'

const CardGrid = () => {
  const dispatch = useDispatch()
  const modalRef = useRef(null)

  const { pageCount, itensOffset, currentItems } = useSelector(state => ({
    currentItems: state.pagination.currentItems,
    itensOffset: state.pagination.itemOffset,
    perPage: state.pagination.perPage,
    pageCount: state.pagination.pageCount
  }))

  /* eslint-disable */
  useEffect(() => {
    dispatch(getCards())
  }, [itensOffset])
  /* eslint-disable */

  const handlePageClick = (selectedPage) => {
    dispatch(changeOffSet(selectedPage))
  }
  return (
    <>
      <div className='cardGrid'>
        {currentItems.map((hero, index) => (
          <Card
            key={index}
            index={index}
            heroName={hero?.name}
            heroPublisher={hero?.biography?.publisher || 'Sem editora'}
            imageSrc={hero?.image?.url}
            handleClick={() => {
              dispatch(selectHero(hero))
            }}
          />))}
      <Modal ref={modalRef} fade >
        <HeroModaContent />
      </Modal>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Próximo >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        previousLabel="< Anterior"
        renderOnZeroPageCount={null}
        className='pagination'
      />
    </>
  )
}

export default CardGrid
