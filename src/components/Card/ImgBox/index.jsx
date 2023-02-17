import React from 'react'
import clsx from 'clsx'
import Button from '@/components/UI/Button'
import { getBreakPoint } from '@/utils/helpers/media'
import styles from '@/components/Card/ImgBox/ImgBox.module.scss'

function ImgBox({ children, style, className, href }) {
  const SM = getBreakPoint('SM')
  
  const SmImgContainer = () => {
    return (
      <Button href={href} className={styles.imgContainer}>
        {children}
      </Button>
    )
  }

  return (
    <div className={clsx(styles.imgBox, className)} style={style}>
      <div className={styles.cardImg}>
        {!SM 
          ? <div className={styles.imgContainer}>{children}</div> 
          : <SmImgContainer/>
        }
      </div>
    </div>
  )
}

export default ImgBox