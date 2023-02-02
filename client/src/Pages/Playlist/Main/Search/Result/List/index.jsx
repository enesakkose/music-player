import React from 'react'
import Row from '@/components/TrackList/Row'
import TrackList from '@/components/TrackList'
import LightBtn from '@/components/LightBtn'
import { addToPlaylist } from '@/utils/song'
import styles from '@/Pages/Playlist/Main/Search/Result/List/List.module.scss'

function List({ result, playlist, show }) {
  const resultSong = show ? [] : result?.tracks?.hits?.slice(1,11)

  return (
    <TrackList className={styles.resultList}>
      {resultSong.map((song,index) => (
        <Row
          key={song.track.key}
          index={index}
          song={song.track}
          songs={resultSong}
          actionBtns={false}
        >
          <LightBtn
            text='Add'
            onClick={() => addToPlaylist(playlist.id, song.track)}
            className={styles.addBtn}
          />
        </Row>
      ))}
    </TrackList>
  )
}

export default List