import React from 'react'
import Or from '@/Pages/Auth/Or'
import BrandLogo from '@/components/BrandLogo'
import GoogleBtn from '@/components/GoogleBtn'
import styles from '@/Pages/Auth/ContentLayout/ContentLayout.module.scss'

function ContentLayout({ children }) {
  return (
    <div className={styles.content}>
      <BrandLogo size={35}/>
      <GoogleBtn text='CONTINUE WITH GOOGLE'/>
      <Or/>
      {children}
    </div>
  )
}

export default ContentLayout