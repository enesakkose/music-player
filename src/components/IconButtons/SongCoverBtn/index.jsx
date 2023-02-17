import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'
import { setOpenCover } from '@/store/song'
import { useDispatch, useSelector } from 'react-redux'
import styles from '@/components/IconButtons/SongCoverBtn/SongCoverBtn.module.scss'

function SongCoverBtn({ icon, className, ...props }) {
  const dispatch = useDispatch()
  const { openCover } = useSelector(state => state.song)

  const openCoverHandle = () => {
    dispatch(setOpenCover(!openCover))
  }

  return (
    <Button
      onClick={openCoverHandle}
      hover='h-primary'
      className={clsx(styles.songCoverBtn, className)} 
      {...props}
    >
      <Icon name={icon} size={20}/>
    </Button>
  )
}

export default SongCoverBtn