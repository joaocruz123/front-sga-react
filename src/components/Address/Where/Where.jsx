import React from 'react'
import { connect } from 'react-redux'
import Web from './../../../assets/site.png'
import App from './../../../assets/app.png'
// import Ifood from './../../../assets/ifood.png'
// import Uber from './../../../assets/uber.png'
// import Rappi from './../../../assets/rappi.png'
// import Tonolucro from './../../../assets/tonolucro.png'
import {
	Wrapper,
	// Header,
	// CustomButton,
	H3
} from './styles'
import { useSnackbar } from 'react-simple-snackbar'
import {
	//ErrorOptions, 
	SuccessOptions
} from '../../../utils/styleNotification'
import { URL_DOWNLOAD_APP } from '../../../config'
// import MuiAccordion from '@mui/material/Accordion';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { styled } from '@mui/material/styles';

// const Accordion = styled((props) => (
// 	<MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
// 	border: `none`,
// 	background: 'white',
// 	borderRadius: '8px',
// 	'&:not(:last-child)': {
// 		borderBottom: '',
// 	},
// 	'&:before': {
// 		display: 'none',
// 	},
// 	'&.selected': {
// 		border: `1px solid #ED8B26`,
// 	}
// }));

// const AccordionSummary = styled((props) => (
// 	<MuiAccordionSummary {...props} />
// ))(() => ({
// 	padding: 0,
// 	margin: 0,
// 	backgroundColor: '#fff'
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
// 	padding: theme.spacing(2),
// 	//borderTop: '1px solid rgba(0, 0, 0, .125)',
// 	backgroundColor: '#fff'
// }));

export function Where(props) {
	const {
		address,
		setStep,
		isMobile
	} = props

	const [openSuccessSnackbar] = useSnackbar(SuccessOptions({ modal: false }))
	//const [openErrorSnackbar] = useSnackbar(ErrorOptions({ modal: false }))

	const openWeb = () => {
		setStep(2)
		// window.open(`https://giraffasdelivery.voceqpad.com.br/address?main=${address.main}&
		// cep=${address.cep}&city=${address.city}&complement=${address.complement}&latitude=${address.latitude}&complement=${address.longitude}
		// &neighborhood=${address.neighborhood}&number=${address.number}&state=${address.state}`);

		// openSuccessSnackbar("Redicionado para o site com sucesso!")
	}

	const openApp = () => {
		isMobile ? 
		window.open(URL_DOWNLOAD_APP) : 
		setStep(6)
	}

	return <Wrapper>
		<H3>Por onde você quer pedir?</H3>
		<img style={{ cursor: "pointer" }} src={Web} onClick={() => openWeb()} alt="Web" />
		<img style={{ cursor: "pointer" }} src={App} onClick={() => openApp()} alt="App" />
		{/* <Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon sx={{ color: '#949494' }} />}
				aria-controls={`panel1a-content-acordion`}
				id={`panel1a-header-acordion`}
			>
				<Header>Peça também por</Header>
			</AccordionSummary>
			<AccordionDetails>
				<CustomButton><img src={Ifood} alt="Ifood" /></CustomButton>
				<CustomButton><img src={Uber} alt="Uber" /></CustomButton>
				<CustomButton><img src={Rappi} alt="Rappi" /></CustomButton>
				<CustomButton><img src={Tonolucro} alt="Tonolucro" /></CustomButton>
			</AccordionDetails>
		</Accordion> */}
	</Wrapper>
}

const mapStateToProps = (state) => {
	return {}
}

export default connect(
	mapStateToProps, {
})(Where);
