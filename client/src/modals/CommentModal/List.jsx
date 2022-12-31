import React, { useRef, useState, useEffect, useMemo } from 'react'
import Loading from '@/components/Loading'
import Comment from '@/components/Modal/Comment'
import EmptyField from '@/components/EmptyField'
import { useSelector } from 'react-redux'
import { useScroll, useScrollEnd } from '@/hooks/useScroll'
import { getComments, getNextComments } from '@/firebase/db'

function List({ findPlaylist }) {
  const { profile: { uid } } = useSelector(state => state.profiles)
  const [items, setItems] = useState(null)
  const [lastVisible, setLastVisible] = useState(null)
  const containerRef = useRef(null)
  const commentLength = findPlaylist.commentsCount === items?.length
  console.log(items?.length)
  const onScroll = () => {
      const scrollEnd = useScrollEnd(containerRef)
      if(scrollEnd === true){
        getNextComments(findPlaylist.id, lastVisible, setLastVisible, setItems, items, uid)
      }
  }

  useEffect(() => {
    getComments(findPlaylist.id, setLastVisible, setItems, uid)
  }, [])

  return (
    <div 
      ref={containerRef} 
      onScroll={!commentLength ? onScroll : undefined} 
      className="commentList"
    >
      {items?.map((item) => (
        <Comment key={item.data().id} comment={item.data()}/>
      ))}
      {items?.length === 0 && <EmptyField icon='Comment'/>}
    </div>
  )
}

export default List