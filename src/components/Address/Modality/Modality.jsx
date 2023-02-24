import React from 'react'
import { connect } from 'react-redux'
import Delivery from './../../../assets/delivery_giraffas.png'
import Retirada from './../../../assets/retirada_giraffas.png'
import {
	Wrapper,
	H3
} from './styles'

export function Modality(props) {
	const {
		setModality,
		setStep,
		handleGTM,
	} = props

	const openHistoryDelivery = (modality) => {
		//GTM 3.0 - Evento seleção de modalidade retirada
		const dataGTM = {
			'event': 'modalidade_retirada',
			'store': 'Giraffas',
			'modalidade_retirada': modality
		}
		//console.warn(dataGTM)
		handleGTM(dataGTM)

		setModality(modality)
		setStep(3)
	}

	const openHistoryPickup = (modality) => {
		//GTM 3.0 - Evento seleção de modalidade retirada
		const dataGTM = {
			'event': 'modalidade_retirada',
			'store': 'Giraffas',
			'modalidade_retirada': modality
		}
		//console.warn(dataGTM)
		handleGTM(dataGTM)

		setModality(modality)
		setStep(3)
	}

	return <Wrapper>
		<H3>Por onde você quer pedir?</H3>
		<img style={{ cursor: "pointer" }} src={Delivery} onClick={() => openHistoryDelivery('delivery')} alt="Web" />
		<img style={{ cursor: "pointer" }} src={Retirada} onClick={() => openHistoryPickup('retirada')} alt="App" />
	</Wrapper>
}

const mapStateToProps = (state) => {
	return {}
}

export default connect(
	mapStateToProps, {
})(Modality);
