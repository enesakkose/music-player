import { Suspense } from "react"
import Home from '@/Pages/Home'
import Search from '@/Pages/Search'
import Library from '@/Pages/Library'
import CollectionLayout from '@/Pages/Collection'
import Playlist from "@/Pages/Playlist"
import Playlists from '@/Pages/Collection/Playlists'
import Tracks from '@/Pages/Collection/Tracks'
import Songs from "@/Pages/Songs"
import Album from "@/Pages/Album"
import Auth from "@/Pages/Auth"
import Lyric from "@/Pages/Lyric"
import Genre from "@/Pages/Genre"
import App404 from "@/Pages/404"

export const routes = [
    {
        path: '/',
        element: <Suspense><Home/></Suspense> 
    },
    {
        path: 'search',
        element: <Suspense><Search/></Suspense> 
    },
    {
        path: 'library',
        element: <Suspense><Library/></Suspense> 
    },
    {
        path: 'playlist/:playlistId',
        element: <Suspense><Playlist/></Suspense>,
    },
    {
        path: 'collection',
        element: <Suspense><CollectionLayout/></Suspense>,
        children: [
            {
                path: 'tracks',
                element: <Suspense><Tracks/></Suspense> 
            },
            {
                path: 'playlists',
                element: <Suspense><Playlists/></Suspense> 
            }
        ]
    },
    {
        path: 'songs',
        element: <Suspense><Songs/></Suspense>
    },
    {
        path: 'album/:id',
        element: <Suspense><Album/></Suspense>
    },
    {
        path: 'lyrics',
        element: <Suspense><Lyric/></Suspense>
    },
    {
        path: 'genre/:genre',
        element: <Suspense><Genre/></Suspense>
    }
]

export const defaultRoutes = [
    {
        path: 'auth',
        element: <Suspense><Auth/></Suspense>,
    },
    {
        path: '404',
        element: <Suspense><App404/></Suspense>
    }
]