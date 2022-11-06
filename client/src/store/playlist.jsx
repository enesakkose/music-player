import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playlists: [],
    favoritesPlaylist: [],
    defaultPlaylists: [],
    favorite: false,
    openCover: false
}

export const playlist = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        addPlaylist: (state, action) => {
            state.playlists = action.payload
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
        setFavorite: (state,action) => {
            state.favorite = action.payload
        },
        setOpenCover: (state, action) => {
            state.openCover = action.payload
        },
        deletePlaylist: (state,action) => {
            state.playlists = state.playlists.filter(playlist => playlist.id !== action.payload)
        },
        setDefaultPlaylists: (state,action) => {
            state.defaultPlaylists = action.payload
        }
    }
})

export const { 
    addPlaylist, 
    setFavoritesPlaylist, 
    deleteFavorites,
    setFavorite, 
    setOpenCover,
    deletePlaylist,
    setDefaultPlaylists
} = playlist.actions

export default playlist.reducer