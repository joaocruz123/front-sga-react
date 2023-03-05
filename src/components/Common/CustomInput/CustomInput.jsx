import { TextField } from '@mui/material'
import React from 'react'
import InputMaskCPF from '../../InputMaskCPF'
import InputMaskPhone from '../../InputMaskPhone'
import {
	InputCustom,
	InputCustomImg,
	Paragraph
} from './styles'

export { Input } from './styles'

export const CustomInput = (props) => {
	const {
		inputtype,
		id,
		name,
		type,
		notification,
		label,
		defaultValue,
		margin,
		autoComplete,
		size,
		variant,
		maskType = null
	} = props

	if (inputtype === 'input') {
		return (
			<>
				<TextField
					margin={margin}
					id={id}
					label={label}
					name={name}
					defaultValue={defaultValue}
					autoComplete={autoComplete}
					size={size}
					variant={variant}
					{...props}
					onKeyDown={(event) => {
						if (type === 'number' && event.key === 'e') {
							event.preventDefault()
						}
					}} />
				{notification && notification.type === `input-${name}-warning` ? <Paragraph className='notification'>{notification.message}</Paragraph> : null}
			</>
		)
	}

	if (inputtype === 'mask') {
		return (
			<>
				<TextField
					margin={margin}
					id={id}
					label={label}
					name={name}
					defaultValue={defaultValue}
					autoComplete={autoComplete}
					size={size}
					variant={variant}
					InputProps={{
						inputComponent: maskType === "cpf" ? InputMaskCPF : InputMaskPhone,
					}}
					{...props}
					onKeyDown={(event) => {
						if (type === 'number' && event.key === 'e') {
							event.preventDefault()
						}
					}} />
				{notification && notification.type === `input-${name}-warning` ? <Paragraph className='notification'>{notification.message}</Paragraph> : null}
			</>
		)
	}

	if (inputtype === 'input-image') {
		return <InputCustomImg {...props} />
	}

	return <InputCustom {...props} />
}
