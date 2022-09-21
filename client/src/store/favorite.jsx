import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    like: false,
    favorites: []
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
        },
        deleteFavorites: (state,action) => {
            state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload.id)
        }
    }
})

export const { setLike, setFavorites, deleteFavorites } = favorite.actions
export default favorite.reducer