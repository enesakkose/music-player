import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playlists: [],
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
        reset: (state) =>{
            state.playlists = []
        },
        setOpenCover: (state, action) => {
            state.openCover = action.payload
        }
    }
})

export const { addPlaylist, reset, setOpenCover } = playlist.actions
export default playlist.reducer