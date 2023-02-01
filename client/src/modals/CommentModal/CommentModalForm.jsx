import React, { forwardRef } from 'react'
import clsx from 'clsx'
import Button from '@/components/Button'
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
            type='text'
            name='comment'
            placeholder='Comment'
            autoComplete='off'
          />
          <Button
            disabled={values.comment.trim().length < 1 || isSubmitting}
            type='submit' 
            className={styles.submitBtn}
          >
            <Icon name='Send' size={20}/>
          </Button>
        </Form>
      )}
    </Formik>
  )
})

export default CommentModalForm