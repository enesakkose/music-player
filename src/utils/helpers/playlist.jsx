import { addPlaylistHandle, addToAddedSongs } from "@/firebase/db"
import { v4 as uuidv4 } from "uuid"

export const addPlaylist = (playlists, uid, navigate) => {
  const id = uuidv4()

  addPlaylistHandle(playlists, id, uid)
  navigate(`/playlist/${id}`)
}

export const addToCustomPlaylist = (playlistId, song) => {
  addToAddedSongs(playlistId, {
    id: uuidv4(),
    track: song,
    createdAt: new Date().toISOString()
  })
}