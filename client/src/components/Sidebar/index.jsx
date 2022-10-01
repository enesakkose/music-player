import React, { useState } from 'react'
import { Resizable } from 're-resizable'
import Navbar from '@/components/Sidebar/Navbar'
import Library from '@/components/Sidebar/Library'
import Playlist from '@/components/Sidebar/Playlist'
import BrandLogo from '@/components/BrandLogo'
import SidebarAlbumCover from '@/components/Sidebar/SidebarAlbumCover'
import { useSelector } from 'react-redux'
import '@/components/Sidebar/Sidebar.scss'

function Sidebar() {
  const [ width, setWidth ] = useState(300)
  const { openCover } = useSelector(state => state.playlist)

  return (
    <aside className='sidebar'>
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
          <BrandLogo size={35}/>
          <Navbar/>
          <Library/>
          <Playlist/>
          {openCover && <SidebarAlbumCover/>}
        </div>
      </Resizable>
    </aside>
  )
}

export default Sidebar