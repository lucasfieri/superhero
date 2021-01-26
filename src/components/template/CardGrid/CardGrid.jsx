import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from 'rc-pagination'
import { changeOffSet, getCards } from '../../../ducks/pagination'
import { ReactComponent as LeftArrow } from '../../../assets/images/left-arrow.svg'
import { ReactComponent as RightArrow } from '../../../assets/images/right-arrow.svg'
import Card from '../../../components/molecules/Card/Card'

import './style.scss'

const CardGrid = () => {
  const dispatch = useDispatch()
  const { results, offset, data, perPage } = useSelector(state => ({
    results: state.search.results,
    offset: state.pagination.offset,
    perPage: state.pagination.perPage,
    data: state.pagination.data
  }))

  /* eslint-disable */



  useEffect(() => {
    dispatch(getCards())
  }, [offset])
  /* eslint-disable */

  const handlePageClick = (selectedPage) => {
    dispatch(changeOffSet(selectedPage))
  }
  return (
    <>
      <div className='cardGrid'>
        {data.map((hero, index) => (
        <Card
          key={index}
          heroName={hero?.name}
          heroPublisher={hero?.biography?.publisher || 'Sem editora'}
          imageSrc={hero?.image?.url}
        />))}
      </div>
      <Pagination
        pageSize={data.length}
        current={offset}
        onChange={(e) => handlePageClick(e)}
        total={results.length}
        className='pagination'
        locale='pt-BR'
        prevIcon={<LeftArrow />}
        nextIcon={<RightArrow />}
        defaultPageSize={perPage}
        disabled={data.length < 8}
      />
    </>
  )
}

export default CardGrid
