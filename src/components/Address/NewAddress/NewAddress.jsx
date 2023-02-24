import React, {
	useState,
	useCallback,
	useEffect
} from 'react'
import {
	connect,
} from 'react-redux'
import PropTypes from 'prop-types'

import { maskCep } from '../../../utils/hooks'

import {
	PostalCodeForm
} from './../PostalCode'

import {
	Wrapper,
	ContentWrapper,
	H3,
	NewAdressForm,
	FormFieldAddress,
	FormFieldAddressAdditional,
	FormFieldAddressNumber,
	FormFieldCity,
	FormFieldDistrict,
	FormFieldReference,
	FormFieldState,
	SubmitButton,
} from './styles'
import { useSnackbar } from 'react-simple-snackbar'
import { CustomLoading, InputRounded } from '../../Common'
import { ErrorOptions, SuccessOptions } from '../../../utils/styleNotification'
import { setCEP, fetchAddressByCEP, setAddress, fetchStoresList } from '../../../redux/actions/address'

const requiredFields = [{
	name: 'main',
	notification: {
		message: 'O endereço é obrigatório'
	},
}, {
	name: 'number',
	notification: {
		message: 'O número é obrigatório'
	},
}, {
	name: 'cep',
	notification: {
		message: 'O CEP é obrigatório'
	},
}, {
	name: 'neighborhood',
	notification: {
		message: 'O bairro é obrigatório'
	},
}, {
	name: 'city',
	notification: {
		message: 'A cidade é obrigatória'
	},
}, {
	name: 'state',
	notification: {
		message: 'O estado é obrigatório'
	}
}]

function NewAddress(props) {
	const {
		addressByCEP,
		address,
		setStep,
		setAddress,
		fetchAddressByCEP,
		setCEP,
		postalCode: cep,
		fetchStoresList,
		modality,
		handleCloseDialogAddress
	} = props

	const displayedCEP = cep
	const formattedCEP = `${displayedCEP ? maskCep(displayedCEP.replace(/-/g, '')) : ''}`
	const [loading, setLoading] = useState(false)
	const [warningPostalCode, setWarningPostalCode] = useState(null)
	const [postalCode, setPostalCode] = useState(formattedCEP)
	const [values, setValues] = useState({ ...addressByCEP })
	const [openSuccessSnackbar] = useSnackbar(SuccessOptions({ modal: true }))
	const [openErrorSnackbar] = useSnackbar(ErrorOptions({ modal: true }))
	const {
		main,
		number,
		neighborhood,
		city,
		state,
		complement,
		reference
	} = values

	useEffect(() => {
		setValues({ ...address })
	}, [
		address
	])

	const handlePostalCodeChange = useCallback((event) => {
		const {
			value
		} = event.target

		setPostalCode(value)
	}, [setPostalCode])

	async function handlePostalCodeClick() {
		if (formattedCEP && formattedCEP.length < 9) {
			setWarningPostalCode({
				type: 'warning',
				message: 'O CEP digitado é inválido! Tente outro!'
			})

			return
		}

		setCEP(postalCode)

		await fetchAddressByCEP([{
			name: 'address-by-cep',
			type: 'error',
			callback: () => {

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
			}
		}])

		setWarningPostalCode(null)
	}

	function handleInput(event) {
		const {
			name,
			value
		} = event.target

		const newValue = {
			[name]: value
		}

		setValues({
			...values,
			...newValue
		})
	}

	async function handleSave() {
		setLoading(true)
		const address = { ...values }

		const invalidFields = requiredFields.filter((requiredField) => !address[requiredField.name]);

		if (invalidFields.length) {
			// for (const invalidField of invalidFields) {
			// 	invalidField.name !== 'cep' && setNotification({
			// 		...invalidField.notification,
			// 		type: `new-address-${invalidField.name}-warning`
			// 	})
			// }

			const isCEPInvalid = !!invalidFields.find(invalidField => invalidField.name === 'cep')
			if (isCEPInvalid) {
				setAddress({
					...address,
					cep: `${formattedCEP.substr(0, 5)}-${formattedCEP.substr(5, 4)}`
				})
			}

			setLoading(false)
			return
		}

		//setNotification(null)

		console.warn({ address })

		if (address.main && address.number && address.neighborhood && address.cep && address.city && address.state) {
			const newAddressByCep = {
				...addressByCEP,
				...address
			}

			setAddress({
				...newAddressByCep,
				verified: true
			})

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

					window.open(`https://giraffasdelivery.voceqpad.com.br/address?main=${address.main}&
					cep=${address.cep}&city=${address.city}&complement=${address.complement}&latitude=${address.latitude}&longitude=${address.longitude}
					&neighborhood=${address.neighborhood}&number=${address.number}&state=${address.state}`);
					handleCloseDialogAddress()
					openSuccessSnackbar("Redicionado para o site com sucesso!")
				}
			}, {
				name: 'address-stores-list',
				type: 'data',
				data: newAddressByCep
			},
			{
				name: 'address-stores-list',
				type: 'modality',
				modality: modality
			}])
		}
	}

	return <Wrapper>
		{/* {(!notification || !notification.type) && closeButton && <CloseButton className='close-button' onClick={() => {
			if (handleCloseDialogAddress && typeof handleCloseDialogAddress === 'function') {
				handleCloseDialogAddress()
			} else {
				const {
					back
				} = userHistory

				if (back && back !== 'addresses') {
					history.push(`/${back}`)
				} else {
					history.push(`/`)
				}
			}
		}}>
			<CustomIcon name='Times' />
		</CloseButton>} */}

		<ContentWrapper id='new-address-content'>
			<H3>Onde deseja receber seu pedido?</H3>

			<NewAdressForm>
				<PostalCodeForm
					postalCodeValue={postalCode}
					warningPostalCode={warningPostalCode}
					// errorPostalCode={notification && notification.type === 'error' ? {
					// 	type: 'error'
					// } : {}}
					handlePostalCodeChange={handlePostalCodeChange}
					handlePostalCodeClick={handlePostalCodeClick}
				/>
				<FormFieldAddress>
					<InputRounded
						mainType='input'
						type='text'
						name='main'
						value={(main)}
						onChange={handleInput}
						//notification={notification}
						maxLength={150}
						placeholder="Endereço"
						disabled={loading ? true : false}
					/>
				</FormFieldAddress>
				<FormFieldAddressNumber>
					<InputRounded
						mainType='input'
						className='half'
						type='number'
						name='number'
						value={number}
						onChange={handleInput}
						//notification={notification}
						maxLength={10}
						disabled={loading ? true : false}
						placeholder="Número" />
				</FormFieldAddressNumber>
				<FormFieldAddressAdditional>
					<InputRounded
						mainType='input'
						type='text'
						className='half'
						name='complement'
						value={complement}
						onChange={handleInput}
						//notification={notification}
						maxLength={150}
						disabled={loading ? true : false}
						placeholder="Complemento" />
				</FormFieldAddressAdditional>
				<FormFieldDistrict>
					<InputRounded
						mainType='input'
						type='text'
						className='half'
						name='neighborhood'
						value={neighborhood}
						onChange={handleInput}
						//notification={notification}
						disabled={loading ? true : false}
						maxLength={60}
						placeholder="Bairro" />
				</FormFieldDistrict>
				<FormFieldCity>
					<InputRounded
						mainType='input'
						type='text'
						className='half'
						name='city'
						value={city}
						onChange={handleInput}
						//notification={notification}
						maxLength={50}
						disabled={loading ? true : false}
						readOnly={!!city || false}
						placeholder="Cidade" />
				</FormFieldCity>
				<FormFieldState>
					<InputRounded
						mainType='input'
						type='text'
						className='half'
						name='state'
						value={state}
						onChange={handleInput}
						//notification={notification}
						maxLength={60}
						disabled={loading ? true : false}
						readOnly={!!state || false}
						placeholder="Estado" />
				</FormFieldState>
				<FormFieldReference>
					<InputRounded
						mainType='input'
						type='text'
						name='reference'
						value={reference}
						onChange={handleInput}
						disabled={loading ? true : false}
						//notification={notification}
						placeholder='Referência para o entregador' />
				</FormFieldReference>
				<SubmitButton onClick={() => {
					handleSave()
				}}>{loading ? <CustomLoading color={'#fff'} type={'spin'} id='default-loading' height={30} width={30} /> :
					'Salvar endereço'}
				</SubmitButton>
			</NewAdressForm>
		</ContentWrapper>
	</Wrapper>
}

NewAddress.propTypes = {
	addressByCEP: PropTypes.shape({
		id: PropTypes.number,
		main: PropTypes.string,
		number: PropTypes.string,
		neighborhood: PropTypes.string,
		city: PropTypes.string,
		state: PropTypes.string,
		complement: PropTypes.string,
		reference: PropTypes.string,
		cep: PropTypes.string,
		latitude: PropTypes.number,
		longitude: PropTypes.number
	}),
	address: PropTypes.shape({
		id: PropTypes.number,
		main: PropTypes.string,
		number: PropTypes.string,
		neighborhood: PropTypes.string,
		city: PropTypes.string,
		state: PropTypes.string,
		complement: PropTypes.string,
		reference: PropTypes.string,
		cep: PropTypes.string,
		latitude: PropTypes.number,
		longitude: PropTypes.number
	}),
	fetchGeolocationByAddress: PropTypes.func,
	setAddress: PropTypes.func,
	//setNotification: PropTypes.func,
	fetchAddressByCEP: PropTypes.func,
	setCEP: PropTypes.func,
	updateUserAddress: PropTypes.func,
	addUserAddress: PropTypes.func,
	userAddress: PropTypes.shape({}),
	notification: PropTypes.shape({
		type: PropTypes.string,
		message: PropTypes.string,
		name: PropTypes.string
	}),
	postalCode: PropTypes.string,
	handleCloseDialogAddress: PropTypes.func,
	accessToken: PropTypes.string,
	setModality: PropTypes.func,
	getStoreFees: PropTypes.func,
	setAddressPostalCodeRequest: PropTypes.func,
	setAddressRequest: PropTypes.func,
	closeButton: PropTypes.bool,
	setNoAddressesList: PropTypes.func,
	// userCallback: PropTypes.shape({
	// 	name: PropTypes.string,
	// 	data: PropTypes.shape({}),
	// }),
	removeProduct: PropTypes.func,
	addProduct: PropTypes.func,
	cartClicked: PropTypes.func,
	setSelectedProduct: PropTypes.func
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.auth.auth || null,
		userAddresses: state.address.userAddresses || [],
		addressByCEP: (state.address.addressByCEP) || {},
		address: (state.address.address) || {},
		postalCode: (state.address.cep) || null,
		latitude: (state.address.latitude) || null,
		longitude: (state.address.longitude) || null,
	}
}

export default connect(
	mapStateToProps, {
	setCEP,
	fetchAddressByCEP,
	setAddress,
	fetchStoresList
})(NewAddress);
