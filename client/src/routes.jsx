import { Suspense } from "react"
import Home from '@/Pages/Home'
import Search from '@/Pages/Search'
import Profile from '@/Pages/Profile'
import ProfilesResult from "@/Pages/Search/ProfilesResult"
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
import RecentSongs from "@/Pages/RecentSongs"
import MainLayout from "@/components/MainLayout"
import PrivateRoute from "@/components/PrivateRoute"

export const routes = [
    {
        element: <Suspense><MainLayout/></Suspense>,
        children: [
            {
                path: '/',
                element: <Home/>,
                index: true
            },
            {
                path: 'songs',
                element: <Suspense><Songs/></Suspense>
            },
            {
                path: 'search',
                element: <Suspense><Search/></Suspense>,
                children: [
                    {
                        path: 'profiles',
                        element: <Suspense><ProfilesResult/></Suspense>
                    }
                ] 
            },
            {
                path: 'profile/:id',
                element: <Suspense><Profile/></Suspense>
            },
            {
                path: 'playlist/:playlistId',
                element: <Suspense><Playlist/></Suspense>
            },
            {
                element: <PrivateRoute/>,
                children: [
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
                ]
            },
            {
                path: 'songs',
                element: <Suspense><Songs/></Suspense>,
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
            },
            {
                path: 'recentSongs',
                element: <Suspense><RecentSongs/></Suspense>
            }
        ]
    },
    {
        path: 'auth',
        element: <Suspense><Auth/></Suspense>
    },
    {
        path: '*',
        element: <Suspense><App404/></Suspense>
    }
]