import React from 'react'

function ContentChangeBtn({title, text, ...props}) {
  return (
    <div className='contentChangeBtn'>
      <span className='contentChangeBtn__text'>
        {title}
      </span>
      <button className='contentChangeBtn__link' {...props}>
        {text}
      </button>
    </div>
  )
}

export default ContentChangeBtn