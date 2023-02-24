import React from 'react'
import { connect } from 'react-redux'
import Ifood from './../../../assets/ifood.png'
import NoveNoveFood from './../../../assets/99FOOD.png'
import Aiqfome from './../../../assets/AIQFOME.png'
import Rappi from './../../../assets/rappi.png'
import Tonolucro from './../../../assets/tonolucro.png'
import {
	Wrapper,
	Header,
	CustomButton,
	H3
} from './styles'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `none`,
	background: 'white',
	borderRadius: '8px',
	'&:not(:last-child)': {
		borderBottom: '',
	},
	'&:before': {
		display: 'none',
	},
	'&.selected': {
		border: `1px solid #ED8B26`,
	}
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary {...props} />
))(() => ({
	padding: 0,
	margin: 0,
	backgroundColor: '#fff'
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	//borderTop: '1px solid rgba(0, 0, 0, .125)',
	backgroundColor: '#fff'
}));

export function ErrorAddress(props) {
	const openWeb = (url) => {
		window.open(url);
	}

	return <Wrapper>
		<H3>Ops! Ainda não atendemos <br /> O seu endereço por aqui :(</H3>

		<Accordion expanded={true}>
			<AccordionSummary
				//expandIcon={<ExpandMoreIcon sx={{ color: '#949494' }} />}
				aria-controls={`panel1a-content-acordion`}
				id={`panel1a-header-acordion`}
			>
				<Header>Enquanto isso faça seu pedido pelas outras plataformas:</Header>
			</AccordionSummary>
			<AccordionDetails>
				<CustomButton onClick={() => openWeb(`https://www.ifood.com.br/busca?q=giraffas`)}>
					<img src={Ifood} alt="Ifood" />
				</CustomButton>
				<CustomButton onClick={() => openWeb(`https://www.rappi.com.br/search?query=giraffas`)}>
					<img src={Rappi} alt="Rappi" />
				</CustomButton>
				<CustomButton onClick={() => openWeb(`https://tonolucro.com/`)}>
					<img src={Tonolucro} alt="Tonolucro" />
				</CustomButton>
				<CustomButton onClick={() => openWeb(`https://food.99app.com/pt-BR/`)}>
					<img src={NoveNoveFood} alt="Uber" />
				</CustomButton>
				<CustomButton onClick={() => openWeb(` https://aiqfome.com/`)}>
					<img src={Aiqfome} alt="Uber" />
				</CustomButton>
			</AccordionDetails>
		</Accordion>
	</Wrapper>
}

const mapStateToProps = (state) => {
	return {}
}

export default connect(
	mapStateToProps, {
})(ErrorAddress);
