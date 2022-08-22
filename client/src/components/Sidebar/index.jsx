import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Resizable } from 're-resizable'
import '@/components/Sidebar/Sidebar.scss'

function Sidebar() {
  const [ width, setWidth ] = useState(300)
  return (
    <sidebar className='sidebar'>
      <div className="sidebar__content">
        Sidebar 
        </div>
      <Resizable
      className='eee'
        maxWidth={400}
        defaultSize={{ width }}
        minWidth={200}
        enable={{ right: true }}
        onResizeStop={(d) => {
        setWidth({ width: width + d.width})}}
      >
        
        
      </Resizable>
    </sidebar>
  )
}

export default Sidebar