import React, { useState } from 'react'
import Navbar from '@/Parts/Sidebar/Navbar'
import Library from '@/Parts/Sidebar/Library'
import Playlists from '@/Parts/Sidebar/Playlists'
import BrandLogo from '@/components/UI/BrandLogo'
import SongCover from '@/components/SongCover'
import { Resizable } from 're-resizable'
import { useSelector } from 'react-redux'
import styles from '@/Parts/Sidebar/Sidebar.module.scss'

function Sidebar() {
  const [ width, setWidth ] = useState(300)
  const { openCover } = useSelector(state => state.song)
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
        onResizeStop={(d) => { setWidth({ width: width + d.width }) }}
      >
        <div className={styles.content}>
          <BrandLogo size={35}/>
          <Navbar/>
          <Library/>
          {user && <Playlists/>}
          {openCover && <SongCover size='full'/>}
        </div>
      </Resizable>
    </aside>
  )
}

export default Sidebar