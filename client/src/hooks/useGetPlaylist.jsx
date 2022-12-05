import React, { useEffect, useState } from "react"
import { getPlaylist } from "@/firebase/db"
import { useSelector } from "react-redux"

export const useGetPlaylist = (playlistId) => {
    const [playlist, setPlaylist] = useState(null)

    useEffect(() => {
        (async () => {
            const res = await getPlaylist(playlistId)
            setPlaylist(res)
        })()
    }, [playlistId])
    
    return playlist
}