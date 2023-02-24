import React, { useState } from 'react'
import { connect } from 'react-redux';
import AppDownload from '../AppDownload/AppDownload';
import { ErrorAddress } from '../ErrorAddress';
import { Modality } from '../Modality';
import NewAddress from '../NewAddress/NewAddress';
import PostalCode from '../PostalCode/PostalCode';
import { Where } from '../Where/Where';
import { handleGTM } from '../../../redux/actions/ui'

import {
	Div,
	ContentWrapper,
	Block
} from './styles'

function AddressSteps(props) {
	const [step, setStep] = useState(1)
	const [loading, setLoading] = useState(false)
	const [modality, setModality] = useState(false)

	return <ContentWrapper id='cep-content'>
		{step === 1 ?
			<>
				<Where
					loading={loading}
					setLoading={setLoading}
					setStep={setStep}
					{...props}
				/>
			</>
			: step === 2 ?
				<>
					<Modality
						loading={loading}
						setLoading={setLoading}
						setStep={setStep}
						setModality={setModality}
						{...props}
					/>

				</>
				: step === 3 ?
					<>
						<PostalCode
							loading={loading}
							setLoading={setLoading}
							setStep={setStep}
							modality={modality}
							{...props}
						/>

					</>
					: step === 4 ?
						<NewAddress
							loading={loading}
							setLoading={setLoading}
							setStep={setStep}
							modality={modality}
							{...props}
						/>
						: step === 5 ?
							<ErrorAddress
								loading={loading}
								setLoading={setLoading}
								setStep={setStep}
								{...props}
							/> :
							<AppDownload
								setStep={setStep}
							/>
		}
		{!loading && <Div className="footer">
			<Block className={step === 1 ? 'active' : ''} />
			<Block className={step === 2 ? 'active' : ''} />
			<Block className={step === 3 ? 'active' : ''} />
			<Block className={step === 4 ? 'active' : ''} />
			<Block className={step === 5 ? 'active' : ''} />
		</Div>}
	</ContentWrapper>

}

const mapStateToProps = (state) => {
	return {
		address: state.address.address || {},
	};
}

export default connect(
	mapStateToProps, {
	handleGTM
})(AddressSteps);
