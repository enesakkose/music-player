import React from 'react'
import clsx from 'clsx'
import ActionBtns from '@/components/Player/ActionBtns'
import Audio from '@/components/Player/Audio'
import '@/components/Player/Player.scss'

function Player({ volume, muted, mobile = false, btnSize }) {
  return (
    <div className={clsx(mobile ? 'mobileMusicPlayer' : "player")}>
      <ActionBtns size={btnSize}/>
      <Audio volume={volume} muted={muted}/>
    </div>
  )
}

export default Player