import React from 'react'
import ProfileCard from '@/components/ProfileCard'
import '@/Pages/Profile/Slug/PageLayout.scss'

function PageLayout({ users, title, children }) {
  return (
    <div className='pageLayout'>
      <h3 className='pageLayout__title'>{title}</h3>
      <div className="pageLayout__list">
        {children}
      </div>
    </div>
  )
}

export default PageLayout