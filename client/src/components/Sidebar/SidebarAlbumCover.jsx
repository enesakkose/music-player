import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenCover } from '@/store/playlist'
import Icon from '@/components/Icon'

function SidebarAlbumCover() {
  const dispatch = useDispatch()
  const { current } = useSelector(state => state.player)
    
  return (
    <div className="sidebar__content__music__cover">
        <img src={current?.links.images[1].url} alt={current?.name}/>
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