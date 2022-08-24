import React from 'react'
import Icon from '@/components/Icon'
import '@/components/Main/View/NavigationButton.scss'

function NavigationButton() {
  return (
    <div className="navigationButton">
        <button>
            <Icon name='Left' size={24}/>
        </button>
        <button>
            <Icon name='Right' size={24}/>
        </button>
    </div>
  )
}

export default NavigationButton