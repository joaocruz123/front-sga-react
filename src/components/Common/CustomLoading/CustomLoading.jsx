import React from 'react'
import ReactLoading from 'react-loading'
import { Wrapper } from './styles'
import Theme from './../../../theme.json'

export const CustomLoading = (props) => {
  const {
    type,
    color,
    id,
    height,
    width
  } = props

  return (
    <Wrapper id={id}>
      <ReactLoading type={type} color={color ?? Theme.main.general.primaryColor} height={height} width={width} />
    </Wrapper>
  )
}
