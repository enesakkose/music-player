import FavoritePopup from "@/components/Popup/FavoritePopup"
import AddPlaylistPopup from "@/components/Popup/AddPlaylistPopup"
import AddSongPopup from "@/components/Popup/AddSongPopup"
import PublishPlaylistPopup from "@/components/Popup/PublishPlaylistPopup"

const popups = [
    {
        name: 'FavoritePopup',
        element: FavoritePopup
    },
    {
        name: 'AddPlaylistPopup',
        element: AddPlaylistPopup
    },
    {
        name: 'AddSongPopup',
        element: AddSongPopup
    },
    {
        name: 'PublishPlaylistPopup',
        element: PublishPlaylistPopup
    }
]

export default popups