import React, { useRef } from 'react'
import AlbumHeader from '@/Pages/Album/AlbumHeader'
import Main from '@/Pages/Album/Main'
import Loading from '@/components/Loading'
import PlaylistWrapper from '@/components/Wrappers/PlaylistWrapper'
import { useHandleScroll } from '@/hooks/useScroll'
import { useParams } from 'react-router-dom'
import { useGetRelatedSongsQuery } from '@/services/music'
import { getMobileTabletSize } from '@/utils/size'
import styles from '@/Pages/Album/Album.module.scss'

function Album() {
  const { id } = useParams()
  const { data, isFetching, error } = useGetRelatedSongsQuery(id)
  const size = getMobileTabletSize()
  const ref = useRef(null)
  const scrollTop = useHandleScroll(ref)

  if(isFetching) return <Loading/>
  if(error) return 'Something went wrong'

  const backgroundColor = data[0]?.images?.joecolor?.slice(18,24)

  return (
    <PlaylistWrapper 
      ref={ref} 
      className={styles.album} 
    >
      <AlbumHeader 
        album={data[0]} 
        songs={data}
        backgroundColor={backgroundColor}
        scrollTop={scrollTop}
      />
      <Main
        size={size}
        findAlbum={data[0]} 
        findSongs={data} 
        backgroundColor={backgroundColor}
      />
    </PlaylistWrapper>
  )
}

export default Album