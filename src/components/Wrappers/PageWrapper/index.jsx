import React from 'react'
import clsx from 'clsx'
import ScrollWrapper from '@/components/Wrappers/ScrollWrapper'
import styles from '@/components/Wrappers/PageWrapper/PageWrapper.module.scss'

function PageWrapper({ as = 'section', children, className }) {
  return React.createElement(
    as,
    { className: clsx(styles.pageWrapper, className) },
    <ScrollWrapper>
      {children}
    </ScrollWrapper>
  )
}

export default PageWrapper