import React, { useState } from 'react'
import { Resizable } from 're-resizable'
import Navbar from '@/components/Sidebar/Navbar'
import Library from '@/components/Sidebar/Library'
import Playlist from '@/components/Sidebar/Playlist'
import Logo from '@/components/Sidebar/Logo'

function Sidebar() {
  const [ width, setWidth ] = useState(300)

  return (
    <sidebar className='sidebar'>
      <Resizable
        className='resizeable'
        maxWidth={400}
        defaultSize={{ width }}
        minWidth={300}
        enable={{ right: true }}
        handleWrapperClass='sidebar__resizer'
        onResizeStop={(d) => {
        setWidth({ width: width + d.width})}}
      >
        <div className="sidebar__content">
          <Logo/>
          <Navbar/>
          <Library/>
          <Playlist/>
        </div>
      </Resizable>
    </sidebar>
  )
}

export default Sidebar