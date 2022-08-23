import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@/components/Icon'
import { useSelector, useDispatch } from 'react-redux'
import { addPlaylist } from '@/store/Playlist'
import '@/components/Sidebar/Sidebar.scss'

function Playlist() {
  const dispatch = useDispatch()
  const { playlists } = useSelector(state => state.playlist)
  
  const handleAdd = () => {
    dispatch(addPlaylist(`${playlists.length + 1}. playlist`))
  }
  console.log(playlists)
  return (
    <div className="sidebar__content__playlist">
        <h4>
         YOUR PLAYLIST
         <button onClick={handleAdd} className='add-btn'>
          <Icon name='Add' size={23}/> 
         </button>
        </h4>
        <ul className="sidebar__content__playlist__items">
          {playlists.map((playlist, index) => (
            <Link key={index} to='/'>
              {playlist}
            </Link>
          ))}
        </ul>
    </div>
  )
}

export default Playlist