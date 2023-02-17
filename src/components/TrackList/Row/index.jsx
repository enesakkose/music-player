import React from 'react'
import clsx from 'clsx'
import PlayBtn from '@/components/TrackList/Row/PlayBtn'
import MediaInfo from '@/components/MediaInfo'
import Dropdown from '@/components/TrackList/Row/Dropdown'
import { getBreakPoint } from '@/utils/helpers/media'
import { modal } from '@/utils/helpers'
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
  customDropdownItem = false,
  ...props
}) {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { current, isPlaying } = useSelector(state => state.player)
  const SM = getBreakPoint('SM')

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
          img={SM ? '' : '2.5rem'}
          favBtn='22'
          song={song}
          loading='lazy'
        >
          {children}
        </MediaInfo>
      </div>
      {user && actionBtns && !SM && <Dropdown song={song} {...props}>
        {customDropdownItem}
      </Dropdown>}
      <div onClick={playSong} className={styles.playSong} />
    </li>
  )
}

export default Row