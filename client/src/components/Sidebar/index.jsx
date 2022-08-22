import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Resizable } from 're-resizable'
import '@/components/Sidebar/Sidebar.scss'

function Sidebar() {
  const [ width, setWidth ] = useState(300)
  return (
    <sidebar className='sidebar'>
      <Resizable
        maxWidth={400}
        defaultSize={{ width }}
        minWidth={200}
        enable={{ right: true }}
        handleWrapperClass='sidebar__resizer'
        onResizeStop={(d) => {
        setWidth({ width: width + d.width})}}
      >
        <div className="sidebar__content">
        Sidebar 
        </div>
        
      </Resizable>
    </sidebar>
  )
}

export default Sidebar