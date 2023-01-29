import React from 'react'
import Loading from '@/components/Loading'
import PlaylistWrapper from '@/components/Wrappers/PlaylistWrapper'
import { useSelector } from 'react-redux'
import { useGetTrackDetailsQuery } from '@/services/music'
import '@/Pages/Lyric.scss'

function Lyric() {
  const { current } = useSelector(state => state.player)
  const { data: trackDetails, isFetching, error } = useGetTrackDetailsQuery(current?.key)

  if(isFetching) return <Loading/>
  if(error) return 'Something went wrong'

  const backgroundColor = current?.images?.joecolor?.slice(18,24)
  const track = trackDetails?.sections[1].type === 'LYRICS'
  const textColor = current?.images?.joecolor.slice(2,8)
  
  return (
    <PlaylistWrapper className='lyrics' 
      style={{ 
        backgroundColor: `#${backgroundColor}`, 
        color: `#${textColor}`
      }}
    >
      {track && trackDetails?.sections[1].text.map((lyrics, i) => (
        <p key={i} className='lyrics__text'>{lyrics}</p>
      ))}
      {!track && <p className='lyrics__errorText'>Lyrics not found</p>}
    </PlaylistWrapper>
  )
}

export default Lyric