import React, {
	useEffect,
	useState
} from 'react'
import { connect } from 'react-redux'

import { CustomLoading, InputRounded } from '../Common'
import { signUpUser, setSignUp, getSignUp } from './../../redux/actions/auth'

import {
	Wrapper,
	Header,
	Title,
	Form,
	FormFieldName,
	FormFieldLastName,
	FormFieldEmail,
	FormFieldBirthDate,
	FormFieldCPF,
	FormFieldPassword,
	FormFieldRepeatPassword,
	RegisterButton,
	TermsOfServiceLabel,
	FormFieldPhone
} from './styles'
import { ErrorOptions, SuccessOptions } from '../../utils/styleNotification'
import { useSnackbar } from 'react-simple-snackbar'

function SignUp(props) {
	const {
		setSignUp,
		signUpUser,
		signUp,
		setVisibleSignUp,
		getSignUp
	} = props

	const [loading, setLoading] = useState(false)
	const [loaded, setLoaded] = useState(false)
	const [ready, setReady] = useState(false)
	const [phoneReady, setPhoneReady] = useState(false)
	const [values, setValues] = useState({ ...signUp })
	const [openSuccessSnackbar] = useSnackbar(SuccessOptions({ modal: true }))
	const [openErrorSnackbar] = useSnackbar(ErrorOptions({ modal: true }))

	const {
		name,
		lastName,
		email,
		birthDate,
		CPF,
		password,
		password2,
		phone
	} = values

	useEffect(() => {
		//openSuccessSnackbar(`Cadastro realizado com sucesso`)
		setPhoneReady(false)
		document.querySelector('#root').style.background = '#fff'

		if (!loaded && !loading) {
			setLoading(false)
			setLoaded(true)
			setReady(true)

			const signUp = getSignUp()

			setSignUp({
				...signUp,
				resend: false
			})
		}

		return () => { }
	}, [
		loaded,
		loading,
		ready,
		phoneReady,
		setSignUp,
		signUp,
		getSignUp
	])

	function handleInput(event) {
		const {
			name,
			value
		} = event.target

		const newValue = {
			[name]: value
		}

		if (name === 'ddi') {
			const value = event.target.value.split('|')
			const country = value[0]
			const ddi = value[1]

			Object.assign(newValue, {
				country,
				ddi
			})
		}

		setValues({
			...values,
			...newValue
		})
	}

	function handleBirthDateKeyDown(event) {
		const { keyCode } = event

		if (!(
			(keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) ||
			keyCode === 8 ||
			keyCode === 9 ||
			keyCode === 46 ||
			keyCode === 37 ||
			keyCode === 39
		)) {
			event.preventDefault()
		}

		if (keyCode === 191 && birthDate && (birthDate.indexOf('/') > -1 || birthDate.length !== 5)) {
			event.preventDefault()
		}

		if (
			birthDate &&
			(birthDate.length === 2 || birthDate.length === 5) &&
			keyCode !== 8 && keyCode !== 9 && keyCode !== 37 && keyCode !== 39 && keyCode !== 46
		) {
			handleInput({
				...event,
				target: {
					...event.target,
					name: 'birthDate',
					value: `${birthDate}/`
				}
			})
		}
	}

	function handleCPFKeyDown(event) {
		const { keyCode } = event

		if (!(
			(keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) ||
			keyCode === 8 ||
			keyCode === 9 ||
			keyCode === 46
		)) {
			event.preventDefault()
		}

		if (CPF && (CPF.length === 3 || CPF.length === 7) && keyCode !== 8 && keyCode !== 46) {
			handleInput({
				...event,
				target: {
					...event.target,
					name: 'CPF',
					value: `${CPF}.`
				}
			})
		}

		if (CPF && (CPF.length === 11) && keyCode !== 8 && keyCode !== 46) {
			handleInput({
				...event,
				target: {
					...event.target,
					name: 'CPF',
					value: `${CPF}-`
				}
			})
		}
	}

	async function handleSubmit() {
		setLoading(true)

		setSignUp({
			...signUp,
			...values,
			success: false
		})

		const result = await postSignUp()

		if (result && result.success) {
			const user = result.user && result.user.name
			openSuccessSnackbar(`Cadastro realizado com sucesso, ${user}`)
			setSignUp({})
			setLoading(false)
			setVisibleSignUp(false)
			return
		}

		openErrorSnackbar(result.message ?? 'Não foi possível fazer o cadastro!', 10000)
		setLoading(false)
	}

	async function postSignUp() {
		const form = {
			...signUp,
			...values,
		}
		const response = await signUpUser(form)

		return response
	}
	return (
		<Wrapper>
			{!phoneReady &&
				<>
					<Header>
						<Title>Cadastrar nova conta</Title>
					</Header>
					<Form onSubmit={(event) => { event.preventDefault() }}>
						<FormFieldName>
							<InputRounded
								placeholder="Nome"
								name='name'
								value={name}
								onChange={handleInput}
								disabled={loading}
							/>
						</FormFieldName>
						<FormFieldLastName>
							<InputRounded
								placeholder="Sobrenome"
								name='lastName'
								value={lastName}
								onChange={handleInput}
							/>
						</FormFieldLastName>
						<FormFieldEmail>
							<InputRounded
								placeholder="E-mail"
								name='email'
								value={email}
								onChange={handleInput}
							/>
						</FormFieldEmail>
						<FormFieldBirthDate>
							<InputRounded
								placeholder="Data de nascimento"
								maxLength={10}
								name='birthDate'
								value={birthDate}
								onChange={handleInput}
								onKeyDown={handleBirthDateKeyDown}
							/>
						</FormFieldBirthDate>
						<FormFieldCPF>
							<InputRounded
								placeholder="CPF"
								className='half'
								maxLength={14}
								name='CPF'
								value={CPF}
								onKeyDown={handleCPFKeyDown}
								onChange={handleInput}
							/>
						</FormFieldCPF>
						<FormFieldPhone>
							<InputRounded
								placeholder="Telefone"
								className='half'
								maxLength={12}
								name='phone'
								value={phone}
								onChange={handleInput}
							/>
						</FormFieldPhone>
						<FormFieldPassword>
							<InputRounded
								placeholder="Senha"
								type='password'
								name='password'
								value={password}
								onChange={handleInput}
							/>
						</FormFieldPassword>
						<FormFieldRepeatPassword>
							<InputRounded
								placeholder="Confirmar senha"
								type='password'
								name='password2'
								value={password2}
								onChange={handleInput}
							/>
						</FormFieldRepeatPassword>
						<RegisterButton
							onClick={() => { handleSubmit() }}
						>
							{loading ?
								<CustomLoading
									color={'#fff'}
									type={'spin'}
									id='default-loading'
									height={30}
									width={30} /> :
								'Cadastrar'}
						</RegisterButton>
						<TermsOfServiceLabel>
							Ao se cadastrar você concorda com os <a href='#a'>Termos de Uso</a>
						</TermsOfServiceLabel>
					</Form>
				</>
			}
		</Wrapper>
	)
}

const mapStateToProps = (state) => {
	return {
		signUp: (state.auth.signUp) || {},
	}
}

export default connect(
	mapStateToProps, {
	signUpUser,
	setSignUp,
	getSignUp
})(SignUp);
