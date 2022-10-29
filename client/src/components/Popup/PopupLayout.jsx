import React, { useEffect } from 'react'
import { popup } from '@/utils'
import { v4 as uuidv4 } from 'uuid'
import '@/components/Popup/PopupLayout.scss'

function PopupLayout({text, dep}) {
  
  useEffect(() => {
    const t = setTimeout(() => {
      popup(false)
    }, 2500);

    return () => {
      clearTimeout(t)
    }

  }, [dep])

  return (
    //key added, React will mount component and in this way refresh animation time in css 
    <div key={uuidv4()} className='popupLayout'>
      <h5 className='popupLayout__text'>
        {text}
      </h5>
    </div>
  )
}

export default PopupLayout