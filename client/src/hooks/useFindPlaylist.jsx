import { useSelector } from "react-redux"

export const useFindPlaylist = (playlistId) => {
    const { playlists } = useSelector(state => state.playlist)
    const foundPlaylist = playlists.find(playlist => playlist.id === playlistId)

    return foundPlaylist
}