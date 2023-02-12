import React from 'react'
import Icon from '@/components/UI/Icon'
import Card from '@/components/Card'
import { modal } from '@/utils/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent, setCurrentSongs, playPause } from '@/store/player'

function PlaylistInfoCard({ playlist, userName = false }) {
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)
  const { user } = useSelector(state => state.auth)
  const validCoverImg = playlist.coverURL === null && playlist.addedSongs.length > 0
  const coverImage = playlist?.addedSongs[0]?.track?.images?.coverart
  const inSongs = playlist.addedSongs.some(song => song.track.key === current.key)

  const playInPlaylist = () => {
    if (!user) return modal('UnauthSongModal', playlist.addedSongs[0].track)
    if (current.key !== playlist.addedSongs[0].id && inSongs)
      return dispatch(playPause(!isPlaying))

    dispatch(setCurrent(playlist.addedSongs[0].track))
    dispatch(setCurrentSongs(playlist.addedSongs))

    if (current.key === playlist.addedSongs[0].id) return dispatch(playPause(!isPlaying))
    if (current.key !== playlist.addedSongs[0].id) return dispatch(playPause(true))
  }

  return (
    <Card
      onClick={playlist.addedSongs.length > 0 ? playInPlaylist : undefined}
      playPause={isPlaying && inSongs}
      title={playlist.name}
      name={userName}
      playBtn={playlist.addedSongs.length > 0}
      href={`/playlist/${playlist.id}`}
    >
      {playlist.coverURL !== null
        ? (<img src={playlist.coverURL} alt="cover" loading='lazy' />)

        : (validCoverImg
          ? <img src={coverImage} alt="cover" loading='lazy' />
          : <Icon name='Music' size={52} />
        )
      }
    </Card>
  )
}
export default PlaylistInfoCard