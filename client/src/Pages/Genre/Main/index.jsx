import React, { useRef } from 'react'
import Header from '@/Pages/Genre/Main/Header'
import List from '@/Pages/Genre/Main/List'
import { useHandleScroll } from '@/hooks/useScroll'
import { getMobileTabletSize } from '@/utils/size'

function Main({ bg, title, songs, song }) {
  const ref = useRef(null)
  const scrollTop = useHandleScroll(ref)
  const size = getMobileTabletSize()

  return (
    <div 
      ref={ref}  
      style={ size ? { overflow: 'scroll' } : undefined }
    >
      <Header bg={bg} title={title} song={song} scrollTop={scrollTop}/>
      <List songs={songs} song={song} title={title} bg={bg}/>
    </div>
  )
}

export default Main