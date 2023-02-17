import React from 'react'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import Button from '@/components/UI/Button'
import { GENRES } from '@/utils/constants/genres'
import styles from '@/Pages/Search/Categories/Categories.module.scss'

function Categories() {
  return (
    <div className={styles.categories}>
      <h3>CATEGORIES</h3>
      <CardListWrapper size='14.5rem' className={styles.list}>
        {GENRES.map((genre) => (
          <Button
            key={genre.val}
            variant='underline'
            href={`/genre/${genre.val}`}
            className={styles.card}
            style={{ backgroundColor: `${genre.joeColor}` }}
          >
            <h4 className={styles.title}>
              {genre.genre}
            </h4>
          </Button>
        ))}
      </CardListWrapper>
    </div>
  )
}

export default Categories