import React, { forwardRef } from 'react'
import SendBtn from '@/components/IconButtons/SendBtn'
import CustomInput from '@/components/UI/CustomInput'
import { commentSchema } from '@/forms/schemas'
import { addComment } from '@/firebase/db'
import { Form, Formik } from 'formik'
import { useSelector } from 'react-redux'
import styles from '@/modals/CommentModal/CommentModal.module.scss'

const CommentModalForm = forwardRef(({ playlistId }, ref) => {
  const { profile: user } = useSelector(state => state.profiles)

  const commentSubmit = async (values, actions) => {
    await addComment(playlistId, user, values)
    actions.resetForm()
    ref.current.scrollTop = 0
  }

  return (
    <Formik
      initialValues={{ comment: '' }}
      onSubmit={commentSubmit}
      validationSchema={commentSchema}
    >
      {({ isSubmitting, values }) => (
        <Form className={styles.form}>
          <CustomInput
            type='text'
            name='comment'
            placeholder='Comment'
            autoComplete='off'
          />
          <SendBtn
            disabled={values.comment.trim().length < 1 || isSubmitting}
          />
        </Form>
      )}
    </Formik>
  )
})

export default CommentModalForm