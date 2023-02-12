import React from 'react'
import Or from '@/Pages/Auth/Or'
import BrandLogo from '@/components/UI/BrandLogo'
import GoogleBtn from '@/components/IconButtons/GoogleBtn'
import styles from '@/Pages/Auth/Layout/Layout.module.scss'

function Layout({ children }) {
  return (
    <div className={styles.content}>
      <BrandLogo color='secondary' size={35}/>
      <GoogleBtn text='CONTINUE WITH GOOGLE'/>
      <Or />
      {children}
    </div>
  )
}

export default Layout