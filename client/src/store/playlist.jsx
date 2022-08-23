import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playlists: []
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
        }
    }
})

export const { addPlaylist, reset } = playlist.actions
export default playlist.reducer