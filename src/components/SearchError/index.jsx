import React from 'react'
import styles from '@/components/SearchError/SearchError.module.scss'

function SearchError({ text, status }) {
  const errorCode = status === 404 || status === 422

  return (
    <div className={styles.searchError}>
      <p className={styles.text}>
        {!errorCode && 'Something went wrong'}
        {errorCode && `No result found "${text}"`}
      </p>
    </div>
  )
}

export default SearchError