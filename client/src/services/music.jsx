import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const musicApi = createApi({
    reducerPath: 'musicApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_APP_RAPIDAPI_KEY)

            return headers
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => '/charts/world'
        }),
        getTrackDetails: builder.query({
            query: (songId) => `/tracks/details?track_id=${songId}`
        }),
        getChartsByGenre: builder.query({
            query: (genre) => `/charts/genre-world?genre_code=${genre}`
        }),
        getSearchSongs: builder.query({
            query: (value) => `/search/multi?offset=0&query=${value}&search_type=SONGS`
        })
    }),
})

export const { 
    useGetTopChartsQuery,
    useGetTrackDetailsQuery,
    useGetChartsByGenreQuery,
    useGetSearchSongsQuery
} = musicApi