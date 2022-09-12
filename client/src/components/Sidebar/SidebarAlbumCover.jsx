import React from 'react'
import { useDispatch } from 'react-redux'
import { setOpenCover } from '@/store/playlist'
import Icon from '@/components/Icon'

function SidebarAlbumCover() {
  const dispatch = useDispatch()
    
  return (
    <div className="sidebar__content__music__cover">
        <img src="https://i.scdn.co/image/ab67616d0000b2735ceefb72ace6475e8c0e2ce3" alt="" />
        <button 
          className='closeCover' 
          onClick={() => dispatch(setOpenCover(false))}
        >
          <Icon name='Left' size={20}/>
        </button>
    </div>
  )
}

export default SidebarAlbumCover