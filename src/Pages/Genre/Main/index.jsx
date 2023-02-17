import React, { useRef } from 'react'
import Header from '@/Pages/Genre/Main/Header'
import List from '@/Pages/Genre/Main/List'
import PlaylistWrapper from '@/components/Wrappers/PlaylistWrapper'
import { useHandleScroll } from '@/utils/hooks/useScroll'

function Main({ bg, title, songs, song }) {
  const ref = useRef(null)
  const scrollTop = useHandleScroll(ref)

  return (
    <PlaylistWrapper ref={ref}>
      <Header bg={bg} title={title} song={song} scrollTop={scrollTop} />
      <List songs={songs} song={song} title={title} bg={bg} />
    </PlaylistWrapper>
  )
}

export default Main