import React, { useEffect } from 'react'
import { popup } from '@/utils'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import '@/components/Popup/Popup.scss'

function Popup() {
  const { text } = useSelector(state => state.popup)
  
  useEffect(() => {
    const t = setTimeout(() => {
      popup(false)
    }, 2500)

    return () => {
      clearTimeout(t)
    }

  }, [text])

  return (
    //key added, React will mount component and in this way refresh animation time in css 
    <div key={uuidv4()} className='popupLayout'>
      <h5 className='popupLayout__text'>
        {text}
      </h5>
    </div>
  )
}

export default Popup