import React from 'react'
import popups from '@/components/Popup'
import { useSelector } from 'react-redux'

function Popup() {
  const { name } = useSelector(state => state.popup)
  const popup = popups.find(popup => popup.name === name)

  return (
      <div>
        <popup.element/>
      </div>
  )
}

export default Popup