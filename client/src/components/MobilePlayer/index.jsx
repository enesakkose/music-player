import React, { useState } from 'react'
import Audio from '@/components/Player/Audio'
import Player from '@/components/MobilePlayer/Player'
import Actions from '@/components/MobilePlayer/Actions'
import Button from '@/components/Button'
import { useSelector } from 'react-redux'
import styles from '@/components/MobilePlayer/MobilePlayer.module.scss'

function MobilePlayer() {
  const [ expand, setExpand ] = useState(false)
  const { current } = useSelector(state => state.player)
  const bg = current?.images?.joecolor?.slice(18,24)

  return (
    <div style={{ '--bg': `#${bg}` }} className={styles.mobilePlayer}>
      <Actions/>
      <Audio time={false} mobile={true} muted={false}/>
      {expand && <Player expand={expand} setExpand={setExpand}/>}
      <Button className={styles.expandBtn} onClick={() => setExpand(prevState => !prevState)}/>
    </div>
  )
}

export default MobilePlayer