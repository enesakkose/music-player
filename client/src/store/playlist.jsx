import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playlists: [],
    favoritesPlaylist: [],
    favorite: false,
    openCover: false,
    songPlaylist: []
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
        },
        addSongToPlaylist: (state, action) => {
            state.songPlaylist = [
                ...state.songPlaylist,
                action.payload
            ]
        },
        removeSongPlaylist: (state, action) => {
            state.songPlaylist = state.songPlaylist.filter(song => song.track.key !== action.payload)
        },
        deletePlaylist: (state,action) => {
            state.playlists = state.playlists.filter(playlist => playlist.id !== action.payload)
        }
    }
})

export const { 
    addPlaylist, 
    setFavoritesPlaylist, 
    deleteFavorites,
    setFavorite, 
    setOpenCover,
    addSongToPlaylist,
    deletePlaylist,
    removeSongPlaylist
} = playlist.actions

export default playlist.reducer