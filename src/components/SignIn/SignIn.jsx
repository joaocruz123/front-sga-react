import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Logo from './../../assets/logo_giraffas.png'

import {
	login, 
	postFacebookLogin, 
	postGoogleLogin, 
	setMethodAccess, 
	setRequiredAuth,
	setSignUp,
} from '../../redux/actions/auth'

import {
	CustomLoading,
	InputRounded
} from './../Common'

import {
	Wrapper,
	Form,
	FormField,
	StoreLogoImage,
	SubmitButton,
	SingUpButton,
	TermsOfServiceLabel,
	ForgotPasswordLink,
	Divider,
	DividerLabel,
	FacebookButton,
	GoogleButton,
} from './styles'

import { ReactComponent as IconGoogle } from '../../assets/icons/icon_google_multicolor.svg'
import { ReactComponent as IconFacebook } from '../../assets/icons/icon_facebook.svg'

import { useSnackbar } from 'react-simple-snackbar'
import { ErrorOptions } from '../../utils/styleNotification'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
import { FACEBOOK_APP_ID, GOOGLE_CLIENT_ID } from '../../config'

function SignIn(props) {
	const {
		setVisibleSignIn,
		login,
		setVisibleSignUp,
		setVisibleForgotPassword,
		setRequiredAuth,
		postFacebookLogin, 
		postGoogleLogin, 
		setMethodAccess,
		setSignUp,
		isMobile
	} = props

	const storeLogo = Logo

	const [email, setEmail] = useState(null)
	const [password, setPassword] = useState(null)
	const [loading, setLoading] = useState(false)
	const [openErrorSnackbar] = useSnackbar(ErrorOptions({ modal: true }))

	useEffect(() => {
		setEmail('')
		setPassword('')

		return () => ({})
	}, [])

	const SubmitLogin = async () => {
		setLoading(true)

		if (email && password) {
			const result = await login({ email, password })

			setMethodAccess('email')
			if (result.success && result.accessToken && result.subscriptionStatus === 2) {
				setVisibleSignIn(false)
				setLoading(false)
				setRequiredAuth(false)

				return
			} else if (!result.success && result.message && result.subscriptionStatus !== 2) {
				openErrorSnackbar(result.message, 50000)
				setLoading(false)

				return
			} else {
				openErrorSnackbar('Falha ao tentar fazer o login. Tente novamente!')
				setLoading(false)
			}
		} else {
			openErrorSnackbar('Preenchar o campo de email e senha!')
			setLoading(false)
		}
	}

	const handleSubmitFacebookLogin = async (form) => {
		const errorMessage = 'Erro ao realizar o login com o Facebook, por favor tente novamente'
		if (form && form.error) {
			openErrorSnackbar(errorMessage)

			return
		}

		setMethodAccess('facebook')

		setLoading(true)
		const result = await postFacebookLogin(form)

		handleSocialLoginResult(result, form, errorMessage, 'facebook')
	}

	const handleSubmitGoogleLogin = async (form) => {
		const errorMessage = 'Erro ao realizar o login com o Google, por favor tente novamente'
		if (form && form.error) {
			openErrorSnackbar(errorMessage)

			return
		}

		setMethodAccess('gmail')

		setLoading(true)
		const result = await postGoogleLogin(form)

		handleSocialLoginResult(result, form, errorMessage, 'google')
	}

	const handleSocialLoginResult = (result, form, errorMessage, vendor) => {
		if (result && result.user && result.user.signUp && form && form.profileObj && vendor === 'google') {
			setSignUp({
				name: form.profileObj.givenName,
				lastName: form.profileObj.familyName,
				email: form.profileObj.email,
				image: form.profileObj.imageUrl,
				googleToken: form.accessToken,
				googleUserId: form.googleId
			})

			if (setVisibleSignUp && typeof setVisibleSignUp === 'function') {
				setVisibleSignUp(true)
			}

			return
		}

		if (result && result.user && result.user.signUp && form && form.userID && vendor === 'facebook') {
			const userNames = form.name.split(' ')

			setSignUp({
				name: userNames[0],
				lastName: userNames[userNames.length - 1],
				email: form.email,
				image: form.picture.data.url,
				facebookToken: form.accessToken,
				facebookUserId: form.userID
			})

			if (setVisibleSignUp && typeof setVisibleSignUp === 'function') {
				setVisibleSignUp(true)
			}

			return
		}

		result && openErrorSnackbar(result.error || errorMessage)
	}

	return <Wrapper>
		<StoreLogoImage src={storeLogo} />
		<Form onSubmit={(event) => {
			event.preventDefault()
		}}>
			<FormField>
				<InputRounded
					value={email || ''}
					onChange={e => setEmail(e.target.value)}
					type="text"
					name="email"
					placeholder="Usuário"
				/>
			</FormField>
			<FormField>
				<InputRounded
					value={password || ''}
					onChange={e => setPassword(e.target.value)}
					type="password"
					name="pass"
					placeholder="Senha" />
			</FormField>
			<ForgotPasswordLink onClick={() => {
				setVisibleForgotPassword(true)
			}}>Esqueci minha senha</ForgotPasswordLink>
			<SubmitButton onClick={() => {
				SubmitLogin()
			}}>
				{loading ?
					<CustomLoading
						color={'#fff'}
						type={'spin'}
						id='default-loading'
						height={30}
						width={30} /> :
					'Entrar'}
			</SubmitButton>
			<SingUpButton onClick={() => {
				setVisibleSignIn(false)
				setVisibleSignUp(true)
			}}>Ainda não tenho conta</SingUpButton>
			{/* <Divider>
					<DividerLabel>OU</DividerLabel>
				</Divider>
				<GoogleLogin
					clientId={GOOGLE_CLIENT_ID}
					buttonText="Login"
					onSuccess={handleSubmitGoogleLogin}
					onFailure={handleSubmitGoogleLogin}
					cookiePolicy={'single_host_origin'}
					render={renderProps => (
						<GoogleButton
							type='button'
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
						>
							<IconGoogle />
							<label>entrar com <span>Google</span></label>
						</GoogleButton>
					)}
				/>
				{<FacebookLogin
					appId={FACEBOOK_APP_ID}
					autoLoad={false}
					fields="name,email,picture"
					disableMobileRedirect={true}
					isMobile={isMobile}
					callback={handleSubmitFacebookLogin}
					render={({ onClick, isDisabled }) => (
						<FacebookButton
							onClick={onClick}
							disabled={isDisabled}
							type='button'
						>
							<IconFacebook />
							<label>entrar com <span>Facebook</span></label>
						</FacebookButton>
					)}
				/>} */}
			<TermsOfServiceLabel>
				Ao se cadastrar você concorda com os <br /><a href='#a'>Termos de Uso</a>
			</TermsOfServiceLabel>
		</Form>
	</Wrapper>
}

SignIn.propTypes = {}

const mapStateToProps = (state) => {
	return {}
}

export default connect(
	mapStateToProps, {
	login,
	setRequiredAuth,
	postFacebookLogin, 
	postGoogleLogin, 
	setMethodAccess,
	setSignUp,
})(SignIn);
