import FavoritePopup from "@/components/Popup/FavoritePopup"
import AddPlaylistPopup from "@/components/Popup/AddPlaylistPopup"
import AddSongPopup from "@/components/Popup/AddSongPopup"
import RemoveSongPopup from "@/components/Popup/RemoveSongPopup"

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
        name: 'RemoveSongPopup',
        element: RemoveSongPopup
    }
]

export default popups