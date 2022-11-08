import React from 'react'
import ModalCloseBtn from '@/modals/ModalCloseBtn'
import CustomInput from '@/components/CustomInput'
import Icon from '@/components/Icon'
import { Form, Formik } from 'formik'
import '@/modals/CommentModal.scss'

function CommentModal({ outClickRef}) {

  const commentSubmit = () => {

  }

  return (
    <div ref={outClickRef} className='commentModal'>
      <header className='commentModal__header'>
        <h3 className='commentModal__header__title'>
          Comments
        </h3>
        <ModalCloseBtn/>
      </header>
      <section className='commentModal__main'>
        <div className="commentModal__main__comment">
          comment
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
                <button type='submit' className='commentBtn'>
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