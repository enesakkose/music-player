import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playlists: [],
    favoritesPlaylist: [],
    favorite: false,
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
        setFavorite: (state,action) => {
            state.favorite = action.payload
        },
        setOpenCover: (state, action) => {
            state.openCover = action.payload
        }
    }
})

export const { 
    addPlaylist, 
    setFavoritesPlaylist, 
    deleteFavorites,
    setFavorite, 
    setOpenCover 
} = playlist.actions
export default playlist.reducer