import React, { forwardRef } from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import CustomInput from '@/components/CustomInput'
import { addComment } from '@/firebase/db'
import { Form, Formik } from 'formik'
import { useSelector } from 'react-redux'
import styles from '@/modals/CommentModal/CommentModal.module.scss'

const CommentModalForm = forwardRef(function CommentModalForm({playlistId}, ref) {
  const { profile: user } = useSelector(state => state.profiles)

  const commentSubmit = async(values, actions) => {
    await addComment(playlistId, user, values)
    actions.resetForm()
    ref.current.scrollTop = 0
  }

  return (
    <Formik
      initialValues={{ comment: '' }}
      onSubmit={commentSubmit}
    >
      {({isSubmitting, values}) => (
        <Form className={styles.form}>
          <CustomInput
            labelClassName={styles.label}
            className={styles.input}
            type='text'
            name='comment'
            placeholder='Comment'
            autoComplete='off'
          />
          <button
            disabled={values.comment.trim().length < 1}
            type='submit' 
            className={clsx(
              styles.submitBtn, 
              isSubmitting ? 'submittingBtn' : '',
              values.comment.trim().length < 1 ? 'submittingBtn' : ''
            )}
          >
            <Icon name='Send' size={20}/>
          </button>
        </Form>
      )}
    </Formik>
  )
})

export default CommentModalForm