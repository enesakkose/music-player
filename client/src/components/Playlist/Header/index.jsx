import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import NavigateBtn from '@/components/Playlist/Header/NavigateBtn'
import { getMobileTabletSize } from '@/utils/size'
import styles from '@/components/Playlist/Header/Header.module.scss'

function Header({
  className,
  children,
  style,
  type,
  title,
  img = null,
  validProfile = false,
  scrollTop = false,
  bg = undefined,
  ...props }) {
  const size = getMobileTabletSize()

  return (
    <header className={clsx(styles.header, className)} style={style}>
      {size && <NavigateBtn scrollTop={scrollTop} bg={bg} />}
      <div {...props} className={styles.cover}>
        {img === null && <Icon name={title === 'LIKED SONGS' ? 'Favorite' : 'Music'} size={75} />}
        {img !== null && <img
          referrerPolicy="no-referrer"
          src={img}
          alt="img"
          loading='lazy'
        />}
        {validProfile && <span className={styles.pencil}>
          <Icon name='Pencil' size={48} className={styles.pencilIcon}/>
        </span>}
      </div>
      {!size && <div className={styles.info}>
        <h6 className={styles.type}>{type}</h6>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>}
    </header>
  )
}

export default Header