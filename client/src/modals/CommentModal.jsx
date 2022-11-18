import React from 'react'
import CustomInput from '@/components/CustomInput'
import Icon from '@/components/Icon'
import ModalHeader from '@/components/Modal/ModalHeader'
import Comment from '@/components/Modal/Comment'
import EmptyField from '@/components/EmptyField'
import { useFindPlaylist } from '@/hooks/useFindPlaylist'
import { Form, Formik } from 'formik'
import { addComment } from '@/firebase/db'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import clsx from 'clsx'
import '@/modals/CommentModal.scss'

function CommentModal({ outClickRef, data: playlistId }) {
  const { user } = useSelector(state => state.auth)
  const findPlaylist = useFindPlaylist(playlistId)
  
  const commentSubmit = async(values, actions) => {
    await addComment(playlistId, {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      comment: values.comment,
      createdAt: new Date().toISOString(),
      id: uuidv4()
    })
    actions.resetForm()
  }

  return (
    <div ref={outClickRef} className='modalContent commentModal'>
      <ModalHeader title='Comments'/>
      <section className='commentModal__main'>
        <div className="commentModal__main__comment">
          {findPlaylist.comments.map(comment => (
            <Comment key={comment.id} comment={comment}/>
          ))}
          {findPlaylist.comments.length === 0 && <EmptyField icon='Comment'/>}
        </div>

        <div className='commentModal__main__footer'>
          <Formik
            initialValues={{ comment: '' }}
            onSubmit={commentSubmit}
          >
            {({isSubmitting}) => (
              <Form className='commentModal__main__footer__form'>
                <CustomInput
                  labelClassName='commentForm'
                  className='commentFormInput'
                  type='text'
                  name='comment'
                  placeholder='Comment'
                  autoComplete='off'
                  autoFocus={true}
                />
                <button type='button' className='emojiBtn'>
                  <Icon name='Smile' size={20}/>
                </button>
                <button 
                  type='submit' 
                  className={clsx('commentBtn', isSubmitting ? 'submittingBtn' : '')}
                >
                  <Icon name='Send' size={20}/>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  )
}

export default CommentModal