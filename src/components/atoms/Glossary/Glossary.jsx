import { Fragment } from 'react'
import './style.scss'

const Glossary = () => {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
  return (
    <div className='glossary'>
      {
        alphabet.map((letter, index, arr) => {
          return (
            <Fragment key={index}>
              <a href='te'>{letter}</a>
              {arr.length - 1 !== index && '-'}
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default Glossary
