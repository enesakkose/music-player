import React, { useEffect } from 'react'
import { popup } from '@/utils/helpers'
import { useSelector } from 'react-redux'
import styles from '@/components/UI/Popup/Popup.module.scss'

function Popup() {
  const { text, id } = useSelector(state => state.popup)

  useEffect(() => {
    const t = setTimeout(() => popup(false), 2500)

    return () => clearTimeout(t)
  }, [id])

  return (
    //key added, React will mount component and in this way refresh animation time in css 
    <div key={id} className={styles.popup}>
      <h5>{text}</h5>
    </div>
  )
}

export default Popup