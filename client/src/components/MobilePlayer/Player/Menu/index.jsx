import React, { useState } from 'react'
import MediaInfo from '@/components/MediaInfo'
import PlaylistMenu from '@/components/MobilePlayer/Player/Menu/PlaylistMenu'
import Button from '@/components/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '@/components/MobilePlayer/Player/Menu/Menu.module.scss'

function Menu({ setOpenMenu, setExpand }) {
  const [openPlaylist, setOpenPlaylist] = useState(false)
  const { current } = useSelector(state => state.player)
  const navigate = useNavigate()

  const navigateAlbum = () => {
    navigate(`/album/${current.key}`)
    setOpenMenu(false)
    setExpand(false)
  }

  return (
    <div className={styles.menu}>
      <MediaInfo as='h4' img='3rem' song={current} />
      <ul className={styles.list}>
        <li onClick={navigateAlbum}>
          Go to album
        </li>
        <li onClick={() => setOpenPlaylist(prevState => !prevState)}>
          Add to playlist
        </li>
      </ul>
      {openPlaylist && <PlaylistMenu setOpenPlaylist={setOpenPlaylist} setOpenMenu={setOpenMenu} />}
      <Button className={styles.close} onClick={() => setOpenMenu(false)}>
        CLOSE
      </Button>
    </div>
  )
}

export default Menu