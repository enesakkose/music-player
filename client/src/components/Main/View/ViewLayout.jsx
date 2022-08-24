import React from 'react'
import ViewLayoutHeader from '@/components/Main/View/ViewLayoutHeader'
import '@/components/Main/View/ViewLayout.scss'

function ViewLayout({ children }) {
  return (
    <section className='viewLayout'>
        <ViewLayoutHeader/>
    </section>
  )
}

export default ViewLayout