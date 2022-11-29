import React from 'react'
import LightBtn from '@/components/LightBtn'
import { Link } from 'react-router-dom'
import '@/modals/NotUserModal.scss'

function NotUserModal({ outClickRef, data: songData }) {

  const backgroundColor = songData?.images?.joecolor.slice(18,24)

  return (
    <div ref={outClickRef} className='notUserModal' style={{ backgroundColor: `#${backgroundColor}`}}>
      <img src={songData?.images?.coverart} alt={songData.title}/>
      <div className='notUserModal__info'>
        <h3>Start listening with your account</h3>
        <Link to='/auth'>
          <LightBtn text='SIGN UP FREE' className='notUserModal__info__logBtn'/>
        </Link>
        <Link to='/auth'>
          <LightBtn text='LOG IN ACCOUNT' className='notUserModal__info__signBtn'/>
        </Link>
      </div>
    </div>
  )
}

export default NotUserModal