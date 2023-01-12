import React from 'react'
import Icon from '@/components/Icon'
import { useNavigate } from 'react-router-dom'
import styles from '@/components/Playlist/Header/Header.module.scss'

function NavigateBtn({ bg, scrollTop, className }) {
  const navigate = useNavigate()

  return (
    <button 
      style={scrollTop >= 100 ? { backgroundColor: `#${bg}`}: undefined} className={styles.navigateBtn} 
      onClick={() => navigate(-1)}
    >
      <Icon name='left' size={25}/>
    </button>
  )
}

export default NavigateBtn