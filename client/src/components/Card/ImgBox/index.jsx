import React from 'react'
import Button from '@/components/UI/Button'
import { getBreakPoint } from '@/utils/helpers/media'
import { useNavigate } from 'react-router-dom'
import styles from '@/components/Card/ImgBox/ImgBox.module.scss'

function ImgBox({ children, style, href }) {
  const navigate = useNavigate()
  const SM = getBreakPoint('SM')
  
  const SmImgContainer = () => {
    return (
      <Button onClick={() => navigate(href)} className={styles.imgContainer}>
        {children}
      </Button>
    )
  }

  return (
    <div className={styles.imgBox} style={style}>
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