import React, { useEffect, useState } from "react"
import { getComments, getNextComments } from 'firebase/db'

export const useGetComments = (playlistId, uid, scrollEnd = false, commentCount) => {
  const [items, setItems] = useState(null)
  const [lastVisible, setLastVisible] = useState(null)

  useEffect(() => {
    getComments(playlistId, setLastVisible, setItems)
  }, [])

  useEffect(() => {
    if (scrollEnd === true && commentCount !== items?.length) {
      getNextComments(playlistId, lastVisible, setLastVisible, setItems, items)
    }
  }, [scrollEnd])

  return items
}