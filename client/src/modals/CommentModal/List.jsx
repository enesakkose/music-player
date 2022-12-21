import React, { useRef, useState, useEffect } from 'react'
import useScroll from '@/hooks/useScroll'
import Loading from '@/components/Loading'
import Comment from '@/components/Modal/Comment'
import EmptyField from '@/components/EmptyField'
import BottomScrollBtn from '@/components/Modal/BottomScrollBtn'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as Listt } from 'react-window'

function List({ findPlaylist }) {
  const scrollRef = useRef(null)
  const scrollBtn = useScroll(scrollRef)
  const [bottom, setBottom] = useState(false)

  const onScroll = () => {

      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
      
      if(scrollTop + clientHeight === scrollHeight) {
        setBottom(true)
      }else{
        setBottom(false)
      }
    
  }

  const Row = ({ index, style }) => (
    <div style={style} key={findPlaylist.comments[index].id}>
      <Comment comment={findPlaylist.comments[index]}/>
    </div>
  );
  
  return (
    <div className="commentList">
      {!bottom && <BottomScrollBtn onClick={() => scrollBtn()}/>} 
    <div ref={scrollRef} onScroll={onScroll} className="inner">
        <AutoSizer>
          {({ height, width }) => (
          
            <Listt
              className='inner'
              height={height}
              width={width}
              itemCount={findPlaylist.comments.length}
              itemSize={75}
            >
            {Row}
            </Listt>
            
          )}
        </AutoSizer>
        {/*findPlaylist.comments.length === 0 && <EmptyField icon='Comment'/>*/}
        </div>
    </div>
  )
}

export default List