import React from 'react'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenCover } from '@/store/playlist'
import styles from '@/components/Sidebar/AlbumCover/AlbumCover.module.scss'

function SidebarAlbumCover() {
  const dispatch = useDispatch()
  const { current } = useSelector(state => state.player)
    
  return (
    <div className={styles.albumCover}>
        <img src={current?.images.coverart} alt={current?.title}/>
        <Button 
          className={styles.closeBtn} 
          onClick={() => dispatch(setOpenCover(false))}
        >
          <Icon name='Left' size={20}/>
        </Button>
    </div>
  )
}

export default SidebarAlbumCover