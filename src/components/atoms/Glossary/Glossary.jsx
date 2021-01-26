import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Glossary = () => {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz']

  return (
    <div className='glossary'>
      {
        alphabet.map((letter, index, arr) => {
          return (
            <Fragment key={index}>
              <Link to={`/${letter}`}>
                {letter}
              </Link>
              {arr.length - 1 !== index && '-'}
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default Glossary
