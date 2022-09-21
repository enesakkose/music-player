import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    like: false,
    favorites: null
}

export const favorite = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        setLike: (state,action) => {
            state.like = action.payload
        },
        setFavorites: (state, action) => {
            state.favorites = [
                ...state.favorites,
                action.payload
            ]
        }
    }
})

export const { setLike, setFavorites } = favorite.actions
export default favorite.reducer