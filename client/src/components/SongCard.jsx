import React from 'react'
import Card from '@/components/Card'
import { setCurrent, playPause, setCurrentSongs } from '@/store/player'
import { useDispatch, useSelector } from 'react-redux'
import { modal } from '@/utils'

function SongCard({ song, index, data, ...props }) {
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)
  const { user } = useSelector(state => state.auth)

  const updateCurrent = () => {
    if(!user) return modal('UnauthSongModal', song)

    if(current.key !== song.key) {
      dispatch(setCurrent({ song, index }))
      dispatch(setCurrentSongs(data))
    }

    if(current.key === song.key) return dispatch(playPause(!isPlaying))
    if(current.key !== song.key) return dispatch(playPause(true))
  }

  const backgroundColor = song?.images?.joecolor?.slice(18, 24)
  const isActiveBtn = current?.key === song?.key && isPlaying

  return (
    <Card
      style={{ backgroundColor: `#${backgroundColor}` }}
      onClick={updateCurrent}
      className={isActiveBtn ? 'showBtn' : ''}
      playPause={isActiveBtn}
      title={song.title}
      name={song.subtitle}
      href={`/album/${song.key}`}
      {...props}
    >
      <img src={song?.images?.coverart} alt={song?.title} /*loading='lazy'*//>
    </Card>
  )
}

export default SongCard