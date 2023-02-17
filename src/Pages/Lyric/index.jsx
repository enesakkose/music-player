import React from 'react'
import Loading from '@/components/UI/Loading'
import PlaylistWrapper from '@/components/Wrappers/PlaylistWrapper'
import { useSelector } from 'react-redux'
import { useGetTrackDetailsQuery } from '@/services/music'
import styles from '@/Pages/Lyric/Lyric.module.scss'

function Lyric() {
  const { current } = useSelector(state => state.player)
  const { data: trackDetails, isFetching, error } = useGetTrackDetailsQuery(current?.key)

  if (isFetching) return <Loading />
  if (error) return 'Something went wrong'

  const backgroundColor = current?.images?.joecolor?.slice(18, 24)
  const track = trackDetails?.sections[1].type === 'LYRICS'
  const textColor = current?.images?.joecolor.slice(2, 8)

  return (
    <PlaylistWrapper className={styles.lyrics}
      style={{
        backgroundColor: `#${backgroundColor}`,
        color: `#${textColor}`
      }}
    >
      {track && trackDetails?.sections[1].text.map((lyrics, i) => (
        <p key={i} className={styles.text}>{lyrics}</p>
      ))}
      {!track && <p className={styles.error}>Lyrics not found</p>}
    </PlaylistWrapper>
  )
}

export default Lyric