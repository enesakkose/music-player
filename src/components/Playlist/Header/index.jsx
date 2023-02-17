import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/UI/Icon'
import NavigateBtn from '@/components/Playlist/Header/NavigateBtn'
import { getBreakPoint } from '@/utils/helpers/media'
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
  const SM = getBreakPoint('SM')
  const imgSrc = img === null || img === ''
  const P = type === 'PROFILE'
  const SUBACTIONS = type === 'PLAYLIST' || type === 'PROFILE' || !SM

  return (
    <header className={clsx(styles.header, className)} style={style}>
      {SM && <NavigateBtn scrollTop={scrollTop} bg={bg} />}
      <div className={clsx(styles.cover, P ? styles.profileCover : '')} {...props}>
        {imgSrc && <Icon
          name={title === 'LIKED SONGS' ? 'Favorite' : P ? 'Avatar' : 'Music'}
          size={P ? '100%' : 75}
        />}

        {!imgSrc && <img referrerPolicy="no-referrer" src={img} alt="img"/>}
        {validProfile && <span className={styles.pencil}>
          <Icon name='Pencil' size={48} className={styles.pencilIcon} />
        </span>}
      </div>
      {SUBACTIONS && <div className={styles.info}>
        {!SM && <h6 className={styles.type}>{type}</h6>}
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>}
    </header>
  )
}

export default Header