import React from 'react'
import '@/components/SearchError.scss'

function SearchError({ text, status }) {
  const errorCode = status === 404 || status === 422

  return (
    <div className='searchError'>
      <p className='searchError__text'>
        {!errorCode && 'Something went wrong'}
        {errorCode && `No result found "${text}"`}
      </p>
    </div>
  )
}

export default SearchError