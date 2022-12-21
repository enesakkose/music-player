import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import CustomInput from '@/components/CustomInput'
import { addComment } from '@/firebase/db'
import { Form, Formik } from 'formik'
import { useSelector } from 'react-redux'

function CommentModalForm({playlistId}) {
  const { profile: user } = useSelector(state => state.profiles)
  const commentSubmit = (values, actions) => {
    actions.resetForm()
    addComment(playlistId, user, values)
  }

  return (
    <Formik
      initialValues={{ comment: '' }}
      onSubmit={commentSubmit}
    >
      {({isSubmitting, values}) => (
        <Form className='commentForm'>
          <CustomInput
            labelClassName='commentFormLabel'
            className='commentFormInput'
            type='text'
            name='comment'
            placeholder='Comment'
            autoComplete='off'
            autoFocus={true}
          />
          <button
            disabled={values.comment.length < 1}
            type='submit' 
            className={clsx(
              'commentBtn', 
              isSubmitting ? 'submittingBtn' : '',
              values.comment.length < 1 ? 'submittingBtn' : ''
            )}
          >
            <Icon name='Send' size={20}/>
          </button>
          <button type='button' className='emojiBtn'>
            <Icon name='Smile' size={22}/>
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default CommentModalForm