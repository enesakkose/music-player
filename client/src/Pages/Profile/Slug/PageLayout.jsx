import React from 'react'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import '@/Pages/Profile/Slug/PageLayout.scss'

function PageLayout({ title, children }) {
  return (
    <PageWrapper className='pageLayout'>
      <h3>{title}</h3>
      <CardListWrapper>
        {children}
      </CardListWrapper>
    </PageWrapper>
  )
}

export default PageLayout