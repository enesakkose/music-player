import React from 'react'
import Icon from '@/components/Icon'
import Card from '@/components/Card'
import { setCurrent, setCurrentSongs, playPause } from '@/store/player'
import { useDispatch, useSelector } from 'react-redux'
import { modal } from '@/utils'

function PlaylistInfoCard({playlist, userName = false}) {
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)
  const { user } = useSelector(state => state.auth)
  const validCoverImg = playlist.coverURL === null && playlist.addedSongs.length > 0
  const coverImage = playlist?.addedSongs[0]?.track?.images?.coverart
  const haveSongs = playlist.addedSongs.some(song => song.id === current.key)
  
  const playInPlaylist = () => {
    if(!user) return modal('UnauthSongModal', playlist.addedSongs[0].track)
    if(current.key !== playlist.addedSongs[0].id && haveSongs) 
    return dispatch(playPause(!isPlaying))

    dispatch(setCurrent(playlist.addedSongs[0].track))
    dispatch(setCurrentSongs(playlist.addedSongs))

    if(current.key === playlist.addedSongs[0].id) return dispatch(playPause(!isPlaying))
    if(current.key !== playlist.addedSongs[0].id) return dispatch(playPause(true))
  }

  return (
    <Card
      onClick={playlist.addedSongs.length > 0 ? playInPlaylist : undefined}
      playPause={isPlaying && haveSongs}
      title={playlist.name}
      name={userName}
      playBtn={playlist.addedSongs.length > 0}
      href={`/playlist/${playlist.id}`}
    >     
      {playlist.coverURL !== null 
          ? (<img src={playlist.coverURL} alt="cover" loading='lazy'/>)
          
          : (validCoverImg 
              ? <img src={coverImage} alt="cover" loading='lazy'/>  
              : <Icon name='Music' size={52}/>
            )
      }
    </Card>
  )
}
export default PlaylistInfoCard