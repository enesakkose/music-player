import { Suspense } from "react";
import Home from '@/Pages/Home'
import Search from '@/Pages/Search'
import Library from '@/Pages/Library'
import CollectionLayout from '@/Pages/Collection'
import PlaylistLayout from '@/Pages/Playlist'
import Playlist from '@/Pages/Playlist/Playlist'
import Playlists from '@/Pages/Collection/Playlists'
import Tracks from '@/Pages/Collection/Tracks'

//! Suspect tags used for unexpected token error

const routes = [
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
        path: 'playlist',
        element: <Suspense><PlaylistLayout/></Suspense>,
        children: [
            {
                path: ':id',
                element: <Suspense><Playlist/></Suspense> 
            }
        ]
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
    }
]

export default routes