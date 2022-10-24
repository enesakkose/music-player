import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setOpenPopup } from '@/store/popup'
import { v4 as uuidv4 } from 'uuid'
import '@/components/Popup/PopupLayout.scss'

function PopupLayout({text, dep}) {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const t = setTimeout(() => {
      dispatch(setOpenPopup({ open: false }))
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