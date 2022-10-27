import React from 'react'
import CustomInput from '@/components/CustomInput'
import Icon from '@/components/Icon'
import ModalCloseBtn from '@/modals/ModalCloseBtn'
import { Form, Formik } from 'formik'
import { playlistInfoSchema } from '@/forms/schemas'
import '@/modals/PlaylistInfoModal.scss'

function PlaylistInfoModal({data, outClickRef}) {
  
  const onSubmit = async(values) => {
    await new Promise(resolve => setTimeout(resolve, 4000));
    return console.log(values.playlistName)
  }

  return (
    <div ref={outClickRef} className='playlistInfoModal'>
      <header className='playlistInfoModal__header'>
        <h3 className='playlistInfoModal__header__title'>
          Edit Details
        </h3>
        <ModalCloseBtn/>
      </header>
      <Formik 
        initialValues={{ playlistName: data?.name }}
        validationSchema={playlistInfoSchema}
        onSubmit={onSubmit}
      >
        {({isSubmitting}) => (
          <Form className='playlistInfoModal__form'>
            <div className="playlistInfoModal__form__img">
              <Icon name='Music' size={64}/>
              <button className='playlistInfoModal__form__img__changeBtn'>
                <Icon name='Pencil' size={16}/>
              </button>
            </div>
            <div className='playlistInfoModal__form__input'>
              <CustomInput
                labelClassName='playlistInfoModal__form__input__item'
                type='text'
                name='playlistName'
                placeholder='Playlist Name'
                autoComplete='off'
              >
                <span className='playlistInfoModal__form__input__item__name'>
                  Playlist Name
                </span>
              </CustomInput>
              <button 
                type='submit' 
                className={`playlistInfoModal__form__input__submit ${isSubmitting ? 'isSubmitting' : ''}`}
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PlaylistInfoModal