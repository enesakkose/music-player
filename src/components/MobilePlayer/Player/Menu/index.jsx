import React, { useState } from 'react'
import MediaInfo from '@/components/MediaInfo'
import PlaylistMenu from '@/components/MobilePlayer/Player/Menu/PlaylistMenu'
import Button from '@/components/UI/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '@/components/MobilePlayer/Player/Menu/Menu.module.scss'

function Menu({ setOpenMenu, setExpand }) {
  const [ openPlaylist, setOpenPlaylist ] = useState(false)
  const { current } = useSelector(state => state.player)
  const navigate = useNavigate()

  const navigateAlbum = () => {
    navigate(`/album/${current.key}`)
    setOpenMenu(false)
    setExpand(false)
  }

  const openPlaylistHandle = () => {
    setOpenPlaylist(prevState => !prevState)
  }

  return (
    <div className={styles.menu}>
      <MediaInfo img='3rem' song={current}/>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Button onClick={navigateAlbum}>
            Go to album
          </Button>
        </li>
        <li className={styles.item}>
          <Button onClick={openPlaylistHandle}>
            Add to playlist
          </Button>
        </li>
      </ul>
      {openPlaylist && <PlaylistMenu setOpenPlaylist={setOpenPlaylist} setOpenMenu={setOpenMenu} />}
      <Button align='center' onClick={() => setOpenMenu(false)}>
        CLOSE
      </Button>
    </div>
  )
}

export default Menu