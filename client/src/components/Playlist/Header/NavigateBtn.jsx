import React, { useState } from 'react'
import Icon from '@/components/Icon'
import { useNavigate } from 'react-router-dom'
import styles from '@/components/Playlist/Header/Header.module.scss'

function NavigateBtn({ bg, scrollTop, className }) {
  const navigate = useNavigate()

  return (
    <div 
      style={scrollTop >= 100 ? { '--bg': `#${bg}`} : undefined} 
      className={styles.navigateBtn}
    >
      <button onClick={() => navigate(-1)}>
        <Icon name='left' size={25}/>
      </button>
    </div>
  )
}

export default NavigateBtn