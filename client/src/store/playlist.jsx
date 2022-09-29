import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playlists: [],
    favoritesPlaylist: [],
    openCover: false
}

export const playlist = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        addPlaylist: (state, action) => {
            state.playlists = [
                action.payload,
                ...state.playlists
            ]
        },
        setFavoritesPlaylist: (state, action) => {
            state.favoritesPlaylist = [
                action.payload,
                ...state.favoritesPlaylist
            ]
        },
        deleteFavorites: (state,action) => {
            state.favoritesPlaylist = state.favoritesPlaylist.filter(favorite => favorite.key !== action.payload)
        },
        setOpenCover: (state, action) => {
            state.openCover = action.payload
        }
    }
})

export const { addPlaylist, setFavoritesPlaylist, deleteFavorites, setOpenCover } = playlist.actions
export default playlist.reducer