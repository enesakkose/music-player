import UserInfoModal from "@/modals/UserInfoModal"
import PlaylistInfoModal from "@/modals/PlaylistInfoModal"
import PlaylistDeleteModal from "@/modals/PlaylistDeleteModal"
import PasswordChangeModal from "@/modals/PasswordChangeModal"
import CommentModal from "@/modals/CommentModal"

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
    },
    {
        name: 'CommentModal',
        element: CommentModal
    }
]

export default modals