import React from 'react'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import '@/Pages/Profile/Slug/PageLayout.scss'

function PageLayout({ title, children }) {
  return (
    <PageWrapper className='pageLayout'>
      <h3 className='pageLayout__title'>{title}</h3>
      <CardListWrapper className="pageLayout__list">
        {children}
      </CardListWrapper>
    </PageWrapper>
  )
}

export default PageLayout