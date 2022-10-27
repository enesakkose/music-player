import UserInfoModal from "@/modals/UserInfoModal"
import PlaylistInfoModal from "@/modals/PlaylistInfoModal"
import PlaylistDeleteModal from "@/modals/PlaylistDeleteModal"
import PasswordChangeModal from "@/modals/PasswordChangeModal"

const modals = [
    {   
        name: 'UserInfoModal',
        element: UserInfoModal
    },
    {
        name: 'PlaylistInfoModal',
        element: PlaylistInfoModal
    },
    {
        name: 'PlaylistDeleteModal',
        element: PlaylistDeleteModal
    },
    {
        name: 'PasswordChangeModal',
        element: PasswordChangeModal
    }
]

export default modals