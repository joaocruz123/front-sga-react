import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { InputRounded, Button, CustomLoading } from '../../Common'

import { postSendNewPassword } from '../../../redux/actions/auth'

import {
	Wrapper,
	Form,
	Title,
	ActionsWrapper,
	FormField,
	Description
} from './styles'
import { useSnackbar } from 'react-simple-snackbar'
import { ErrorOptions, SuccessOptions } from '../../../utils/styleNotification'

function ForgotPassword(props) {
	const {
		postSendNewPassword,
		backStep
	} = props

	const [email, setEmail] = useState(null)
	const [pending, setPending] = useState(false)
	const [isValid, setIsValid] = useState(false)
	const [openSuccessSnackbar] = useSnackbar(SuccessOptions({ modal: true }))
	const [openErrorSnackbar] = useSnackbar(ErrorOptions({ modal: true }))

	const handleSubmit = async () => {
		setPending(true)
		const result = await postSendNewPassword(email)

		if (result && result.success) {
			openSuccessSnackbar('Nova senha enviada para seu e-mail!')
			backStep()
		} else {
			openErrorSnackbar(result.message)
		}

		setPending(false)
	}

	const handleEmailChange = (value) => {
		setEmail(value)
		validateEmail(value)
	}

	const validateEmail = (email) => {
		const emailRegex = /\S+@\S+\.\S+/
		setIsValid(emailRegex.test(email))
	}

	return (
		<Wrapper>
			<Form onSubmit={(event) => {
				event.preventDefault()
			}}>
				<Title>Esqueci minha senha</Title>
				<Description>Uma nova senha será enviada no e-mail cadastrado.</Description>
				<FormField>
					<InputRounded
						value={email}
						onChange={e => handleEmailChange(e.target.value)}
						type="text"
						name="email"
						placeholder="Insira o email cadastrado"
					/>
				</FormField>
				<ActionsWrapper>
					<Button
						onClick={() => handleSubmit()}
						disabled={pending || !isValid}
					>
						{pending ?
							<CustomLoading
								color={'#fff'}
								type={'spin'}
								id='default-loading'
								height={30}
								width={30} /> :
							'Enviar nova senha'}
					</Button>
					<Button
						onClick={() => { backStep() }}
						type='button'
						className='back'
					>
						Voltar
					</Button>
				</ActionsWrapper>
			</Form>
		</Wrapper>
	)
}

ForgotPassword.propTypes = {
	postSendNewPassword: PropTypes.func,
	backStep: PropTypes.number
}


const mapStateToProps = (state) => {
	return {
		signUp: (state.auth.signUp) || {},
	}
}

export default connect(
	mapStateToProps, {
	postSendNewPassword
})(ForgotPassword);
