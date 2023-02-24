import React, {
	useState,
	useCallback
} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
	Button,
	CEPForm,
	CloseButton,
	ContentWrapper,
	H3,
	//Input,
	LoadingWrapper,
	PostalCodeInputContainer,
	PostalWarning,
	Span,
	Wrapper,
	Paragraph,
	//SpanDiv,
	CustomButton,
	CustomIcon
} from './styles'
import { Icon, InputRounded } from '../../Common'
import { setCEP, fetchAddressByCEP, fetchAddressByLatLong, fetchStoresList } from '../../../redux/actions/address'
import { useSnackbar } from 'react-simple-snackbar'
import { ErrorOptions, SuccessOptions } from '../../../utils/styleNotification'
import ReactLoading from "react-loading";

export function PostalCodeInput({
	label,
	value = '',
	onChange
}) {
	return <PostalCodeInputContainer>
		<Span>{label}</Span>
		<InputRounded
			type='text'
			maxLength={9}
			max={99999999}
			placeholder='00000-000'
			value={value}
			onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
			onChange={onChange}
		/>
	</PostalCodeInputContainer>
}

PostalCodeInput.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func
}

export function PostalCodeForm({
	postalCodeValue,
	warningPostalCode,
	errorPostalCode,
	handlePostalCodeChange,
	handlePostalCodeClick
}) {
	return <CEPForm className='postal-code-container'>
		<div className="notification">
			{warningPostalCode && warningPostalCode.type === 'warning' && <PostalWarning>O CEP digitado é inválido!</PostalWarning>}
			{errorPostalCode && errorPostalCode.type === 'error' && <PostalWarning>Tente outro endereço ou volte para o cardápio!</PostalWarning>}
		</div>
		<div className="fields">
			<PostalCodeInput label='CEP' onChange={handlePostalCodeChange} value={postalCodeValue} />
			<Button onClick={handlePostalCodeClick}>OK</Button>
		</div>
	</CEPForm>
}

PostalCodeForm.propTypes = {
	postalCodeValue: PropTypes.string,
	warningPostalCode: PropTypes.shape({
		type: PropTypes.string
	}),
	errorPostalCode: PropTypes.shape({
		type: PropTypes.string
	}),
	handlePostalCodeChange: PropTypes.func,
	handlePostalCodeClick: PropTypes.func,
}

function PostalCode(props) {
	const {
		fetchAddressByCEP,
		setCEP,
		loading,
		setLoading,
		handleCloseDialogAddress,
		setAddress,
		setStep,
		fetchStoresList,
		modality
	} = props

	const [warningPostalCode, setWarningPostalCode] = useState(null)
	const [postalCode, setPostalCode] = useState('')
	const [openErrorSnackbar] = useSnackbar(ErrorOptions({ modal: true }))
	const [openSuccessSnackbar] = useSnackbar(SuccessOptions({ modal: true }))
	const handlePostalCodeChange = useCallback((event) => {
		const {
			value
		} = event.target

		setPostalCode(value)
	}, [setPostalCode])

	async function handlePostalCodeClick() {
		setLoading(true)
		if (postalCode && postalCode.length < 8) {
			openErrorSnackbar('O CEP digitado é inválido! Tente outro!')
			setLoading(false)
			return
		}

		setCEP(postalCode)

		await fetchAddressByCEP([{
			name: 'address-by-cep',
			type: 'error',
			callback: () => {
				setAddress({})

				openErrorSnackbar('Endereço fora da área de serviço! :(')
				setAddress({})
				setLoading(false)
				console.warn('PostalCode.fetchAddressByCEP.error')
			}
		}, {
			name: 'address-by-cep',
			type: 'success',
			callback: () => {
				setLoading(false)
				setStep(4)
			}
		}])

		setWarningPostalCode(null)
	}

	async function handleLocationClick() {
		await navigator.geolocation.getCurrentPosition(async function (position) {
			const {
				latitude,
				longitude
			} = position.coords

			fetchStoresList([{
				name: 'address-stores-list',
				type: 'error',
				callback: () => {
					setLoading(false)
					openErrorSnackbar('Endereço fora da área de serviço! :(')
					setStep(5)
				}
			}, {
				name: 'address-stores-list',
				type: 'success',
				callback: () => {
					setLoading(false)
					window.open(`https://giraffasdelivery.voceqpad.com.br/address?latitude=${-23.56306075735458}&longitude=${-46.65435926179756}`);
					handleCloseDialogAddress()
					openSuccessSnackbar("Redicionado para o site com sucesso!")
				}
			}, {
				name: 'address-stores-list',
				type: 'data',
				data: {
					latitude: -23.56306075735458,
					longitude: -46.65435926179756
				}
			},
			{
				name: 'address-stores-list',
				type: 'modality',
				modality: modality
			}])

			// fetchAddressByLatLong({ latitude, longitude })
			// 	.then(response => {
			// 		setCEP(response.long_name)

			// 		fetchAddressByCEP([{
			// 			name: 'address-by-cep',
			// 			type: 'error',
			// 			callback: () => {
			// 				setAddress({})

			// 				openErrorSnackbar('Endereço fora da área de serviço! :(')
			// 				setAddress({})
			// 				setLoading(false)
			// 				console.warn('PostalCode.fetchAddressByCEP.error')
			// 			}
			// 		}, {
			// 			name: 'address-by-cep',
			// 			type: 'success',
			// 			callback: () => {
			// 				setLoading(false)
			// 				setStep(4)
			// 			}
			// 		}])

			// 		setWarningPostalCode(null)
			// 	})
			// 	.catch(e => console.log(e))
		})
	}

	return <Wrapper id='addresses-postal-code-component'>
		<CloseButton className='close-button' onClick={() => {
			handleCloseDialogAddress && typeof handleCloseDialogAddress === 'function' && handleCloseDialogAddress()
		}}>
			<Icon width={"15px"} height={"15px"} name={"close"} stroke={"textNinethColor"} />
		</CloseButton>

		{!!loading && <LoadingWrapper id='addresses-postal-code-loading'>
			<ReactLoading
				type="spin"
				color="#ED8B26"
				height={40}
				width={40}
			/>
		</LoadingWrapper>}

		{!loading && <ContentWrapper id='addresses-postal-code-content'>
			<H3>Onde você está</H3>

			<Paragraph>Assim você terá acesso aos produtos e ofertas da sua região!</Paragraph>

			{modality === 'retirada' && <CustomButton onClick={() => handleLocationClick()}>
				<CustomIcon className='geo'>
					<Icon width={"25px"} height={"25px"} name={"geolocalization"} stroke={"primary"} />
				</CustomIcon>
				<span>Ativar geolocalização</span>
			</CustomButton>}
			{/* <SpanDiv>OU</SpanDiv> */}
			{modality === 'delivery' && <PostalCodeForm
				postalCodeValue={postalCode}
				warningPostalCode={warningPostalCode}
				handlePostalCodeChange={handlePostalCodeChange}
				handlePostalCodeClick={handlePostalCodeClick}
			/>}
		</ContentWrapper>}
	</Wrapper>
}

PostalCode.propTypes = {
	fetchAddressByCEP: PropTypes.func,
	setCEP: PropTypes.func,
	setAddressPostalCodeRequest: PropTypes.func,
	setAddressRequest: PropTypes.func,
	handleCloseDialogAddress: PropTypes.func,
	setNoAddressesList: PropTypes.func,
	closeButton: PropTypes.bool,
	postalCode: PropTypes.string,
	loading: PropTypes.bool,
	accessToken: PropTypes.string,
	title: PropTypes.string,
	setNotification: PropTypes.func,
	setAddress: PropTypes.func
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.auth.auth && state.auth.auth.accessToken,
		//loading: (state.loading.loading) || []
	}
}

export default connect(
	mapStateToProps, {
	setCEP,
	fetchAddressByCEP,
	fetchAddressByLatLong,
	fetchStoresList
})(PostalCode);
