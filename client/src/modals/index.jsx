import UserInfoModal from "@/modals/UserInfoModal"
import PlaylistInfoModal from "@/modals/PlaylistInfoModal"
import PlaylistDeleteModal from "@/modals/PlaylistDeleteModal"
import PasswordChangeModal from "@/modals/PasswordChangeModal"
import CommentModal from "@/modals/CommentModal"
import FollowersModal from "@/modals/FollowersModal"

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
    },
    {
        name: 'FollowersModal',
        element: FollowersModal
    }
]

export default modals