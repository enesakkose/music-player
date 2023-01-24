import { addPlaylistHandle } from "@/firebase/db"
import { v4 as uuidv4 } from "uuid"

export const addPlaylist = (playlists, uid, navigate) => {
  const id = uuidv4()

  addPlaylistHandle(playlists, id, uid)
  navigate(`/playlist/${id}`, { replace: true })
}