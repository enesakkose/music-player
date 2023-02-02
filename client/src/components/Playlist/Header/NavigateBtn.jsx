import React from 'react'
import NavBtn from '@/components/NavigateBtn'
import { useNavigate } from 'react-router-dom'
import styles from '@/components/Playlist/Header/Header.module.scss'

function NavigateBtn({ bg, scrollTop }) {
  const navigate = useNavigate()

  return (
    <div
      style={scrollTop >= 100 ? { '--bg': `#${bg}`} : undefined}
      className={styles.navigateBtn}
    >
      <NavBtn onClick={() => navigate(-1)}/>
    </div>
  )
}

export default NavigateBtn