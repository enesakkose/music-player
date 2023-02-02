import React, { useState } from 'react'
import Navbar from '@/components/Sidebar/Navbar'
import Library from '@/components/Sidebar/Library'
import Playlists from '@/components/Sidebar/Playlists'
import BrandLogo from '@/components/BrandLogo'
import SidebarAlbumCover from '@/components/Sidebar/AlbumCover'
import { Resizable } from 're-resizable'
import { useSelector } from 'react-redux'
import styles from '@/components/Sidebar/Sidebar.module.scss'

function Sidebar() {
  const [width, setWidth] = useState(300)
  const { openCover } = useSelector(state => state.playlist)
  const { user } = useSelector(state => state.auth)

  return (
    <aside className={styles.sidebar}>
      <Resizable
        className={styles.resizeable}
        maxWidth={400}
        defaultSize={{ width }}
        minWidth={300}
        enable={{ right: true }}
        handleWrapperClass={styles.resizer}
        onResizeStop={(d) => {
          setWidth({ width: width + d.width })
        }}
      >
        <div className={styles.content}>
          <BrandLogo size={35}/>
          <Navbar/>
          <Library/>
          {user && <Playlists/>}
          {openCover && <SidebarAlbumCover/>}
        </div>
      </Resizable>
    </aside>
  )
}

export default Sidebar