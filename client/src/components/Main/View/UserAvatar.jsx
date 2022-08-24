import React, { useState } from 'react'
import Icon from '@/components/Icon'
import { Link } from 'react-router-dom'
import { useClickOutside } from '@/hooks/useClickOutside'
import '@/components/Main/View/UserAvatar.scss'


function UserAvatar() {
  const [ openAvatarMenu, setOpenAvatarMenu] = useState(false)

  const domNode = useClickOutside(() => { 
    setOpenAvatarMenu(false)
  })

  return (
    <div ref={domNode} className="userAvatar">
      <button 
        onClick={() => setOpenAvatarMenu(!openAvatarMenu)} className='avatar__btn'
      >
        <Icon name='Avatar' size={28} style={{ color: 'gray'}}/>
        <span>Aaa</span>
        <Icon name='Down' className={openAvatarMenu ? 'rotate' : null}/>
      </button>

      {openAvatarMenu && 
        <div className="userAvatar__widgetMenu">
          <ul>
            <li>
              <Link to='/'>
                Hesap
              </Link>
            </li>
            <li>
              <Link to='/'>
                Menu
              </Link>
            </li>
            <li>
              <button>Oturumu Kapat</button>
            </li>
          </ul>
          
        </div>
      }
    </div>
  )
}

export default UserAvatar