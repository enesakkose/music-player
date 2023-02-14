import React from 'react'
import Button from '@/components/UI/Button'
import { getBreakPoint } from '@/utils/helpers/media'
import styles from '@/components/Card/Info/Info.module.scss'

function Info({ title, name, onClick }) {
  const SM = getBreakPoint('SM')

  const SmTitleBtn = () => {
    return(
      <Button className={styles.title} onClick={onClick} >
        {title}
      </Button>
    )
  }

  return (
    <div className={styles.info}>
      {!SM ? <h5 className={styles.title}>{title}</h5> : <SmTitleBtn/>}
      {!SM && <span className={styles.subtitle}>{name}</span>}
    </div>
  )
}

export default Info