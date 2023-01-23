import React from 'react'
import clsx from 'clsx'
import PlayBtn from '@/components/TrackList/Row/PlayBtn'
import Cover from '@/components/TrackList/Row/Cover'
import Info from '@/components/TrackList/Row/Info'
import ActionBtns from '@/components/TrackList/Row/ActionBtns'
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
    customPlaylist = false
  }) {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { current, isPlaying } = useSelector(state => state.player)

  const playSong = () => {
    if(!user) return modal('UnauthSongModal', song)

    if(current.key !== song.key) {
      dispatch(setCurrent({ song, index }))
      dispatch(setCurrentSongs(songs))
    }

    if(current.key === song.key) return dispatch(playPause(!isPlaying))
    if(current.key !== song.key) return dispatch(playPause(true))
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
        <PlayBtn validMusic={validMusic} index={index}/>
        <Cover song={song}/>
        <Info song={song}/>
      </div>
      {children}
      {user && actionBtns && <ActionBtns song={song} customPlaylist={customPlaylist}/>}
      <div onClick={playSong} className={styles.playSong}/>
    </li>
  )
}

export default Row