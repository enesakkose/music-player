import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playlists: [],
    favoritesPlaylist: [],
    favorite: false,
    favoritePopup: false,
    openCover: false,
    playlist: []
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
        setFavorite: (state,action) => {
            state.favorite = action.payload
        },
        setFavoritePopup: (state,action) => {
            state.favoritePopup = action.payload
        },
        setOpenCover: (state, action) => {
            state.openCover = action.payload
        },
        setPlaylist: (state, action) => {
            state.playlist = [
                ...state.playlist,
                action.payload
            ]
        }
    }
})

export const { 
    addPlaylist, 
    setFavoritesPlaylist, 
    deleteFavorites,
    setFavorite, 
    setOpenCover,
    setFavoritePopup,
    setPlaylist
} = playlist.actions

export default playlist.reducer