import React from 'react'

import {
  InputCustom,
  InputCustomImg,
  Paragraph
} from './styles'

export { Input } from './styles'

export const InputRounded = (props) => {
  const {
    mainType,
    name,
    type,
    notification
  } = props

  if (mainType === 'input') {
    return (
      <>
        <InputCustom {...props} onKeyDown={(event) => {
          if (type === 'number' && event.key === 'e') {
            event.preventDefault()
          }
        }} />
        {notification && notification.type === `new-address-${name}-warning` ? <Paragraph className='notification'>{notification.message}</Paragraph> : null}
      </>
    )
  }
  
  if (mainType === 'input-image') {
    return <InputCustomImg {...props} />
  }
  
  return <InputCustom {...props} />
}
