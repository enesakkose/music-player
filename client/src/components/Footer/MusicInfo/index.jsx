import React from 'react'
import MediaInfo from '@/components/MediaInfo'
import Icon from '@/components/Icon'
import clsx from 'clsx'
import Button from '@/components/Button'
import { setOpenCover } from '@/store/playlist'
import { useSelector, useDispatch } from 'react-redux'
import styles from '@/components/Footer/MusicInfo/MusicInfo.module.scss'

function MusicInfo() {
  const dispatch = useDispatch()
  const { openCover } = useSelector(state => state.playlist)
  const { current } = useSelector(state => state.player)

  return (
    <>
      {current.key && <div className={clsx(styles.musicInfo, openCover ? styles.openCover : '')}>
        <div className={styles.cover}>
          <img
            src={current?.images?.coverart}
            alt={current?.title}
          />
          <Button
            onClick={() => dispatch(setOpenCover(!openCover))}
            className={styles.expandBtn}
          >
            <Icon name='Left' size={20}/>
          </Button>
        </div>
        <MediaInfo className={styles.info} as='h5' favBtn='22' song={current} />
      </div>}
    </>
  )
}

export default MusicInfo