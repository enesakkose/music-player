import React, { useState } from 'react'
import { Resizable } from 're-resizable'
import Navbar from '@/components/Sidebar/Navbar'
import Library from '@/components/Sidebar/Library'
import Playlist from '@/components/Sidebar/Playlist'
import Logo from '@/components/Sidebar/Logo'
import SidebarAlbumCover from '@/components/Sidebar/SidebarAlbumCover'
import { useSelector } from 'react-redux'
import '@/components/Sidebar/Sidebar.scss'

function Sidebar() {
  const [ width, setWidth ] = useState(300)
  const { openCover } = useSelector(state => state.playlist)

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
          {openCover && <SidebarAlbumCover/>}
        </div>
      </Resizable>
    </sidebar>
  )
}

export default Sidebar