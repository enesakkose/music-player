import React from 'react'
import clsx from 'clsx'
import PlayBtn from '@/components/TrackList/Row/PlayBtn'
import MediaInfo from '@/components/MediaInfo'
import ActionBtns from '@/components/TrackList/Row/ActionBtns'
import { getMobileTabletSize } from '@/utils/size'
import { modal } from '@/utils'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrent, playPause, setCurrentSongs } from '@/store/player'
import styles from '@/components/TrackList/Row/Row.module.scss'

function Row({
  className,
  children,
  index,
  song,
  songs,
  actionBtns = true,
  customPlaylistDropdownItem = false
}) {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { current, isPlaying } = useSelector(state => state.player)
  const size = getMobileTabletSize()

  const playSong = () => {
    if (!user) return modal('UnauthSongModal', song)

    if (current.key !== song.key) {
      dispatch(setCurrent({ song, index }))
      dispatch(setCurrentSongs(songs))
    }

    if (current.key === song.key) return dispatch(playPause(!isPlaying))
    if (current.key !== song.key) return dispatch(playPause(true))
  }

  const validMusic = current.key === song.key && isPlaying

  return (
    <li
      className={clsx(
        styles.row,
        validMusic ? styles.playingRow : '',
        className,
      )}
    >
      <div className={styles.rowInfo}>
        <PlayBtn validMusic={validMusic} index={index} />
        <MediaInfo
          as='h5'
          img='2.5rem'
          favBtn='22'
          song={song}
          loading='lazy'
        >
          {children}
        </MediaInfo>
      </div>
      {user && actionBtns && !size && <ActionBtns song={song} customPlaylistDropdownItem={customPlaylistDropdownItem} />}
      <div onClick={playSong} className={styles.playSong} />
    </li>
  )
}

export default Row