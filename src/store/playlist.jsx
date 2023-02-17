import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playlists: []
}

export const playlist = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        addPlaylist: (state, action) => {
            state.playlists = action.payload
        }
    }
})

export const { addPlaylist } = playlist.actions
export default playlist.reducer