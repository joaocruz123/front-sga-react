import React from 'react'
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Icon } from './../../Common'
import {
	Wrapper,
	Title,
	WrapperAccordion,
	Subtitle,
	CustomIcon,
	Header,
	Div,
	Chip,
	WrapperChip,
	Footer,
	CustomButton,
	Hour,
	H2,
	Notify
} from './styles'
import SemLojas from '../../../assets/icone_sem_lojas.png'

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `2px solid ${theme.palette.divider}`,
	borderRadius: '8px',
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
	'&.selected': {
		border: `2px solid #ED8B26`,
	}
}));


const InternalAccordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	padding: 0,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
	'&.selected': {
		border: `2px solid #ED8B26`,
	}
}));
const InternalAccordionSummary = styled((props) => (
	<MuiAccordionSummary {...props} />
))(({ theme }) => ({
	padding: 0,
	margin: 0,
	//height: '40px'
}));

const Store = (props) => {
	const {
		stores,
		handlePingStoreLatLong,
		selectedStore,
		setVisibleAddress
	} = props;

	const getDayWeek = (day) => {
		if (day === "Dom") return "Domingo"
		else if (day === "Seg") return "Segunda"
		else if (day === "Ter") return "Terça"
		else if (day === "Qua") return "Quarta"
		else if (day === "Qui") return "Quinta"
		else if (day === "Sex") return "Sexta"
		else if (day === "Sab") return "Sábado"
		else return ""
	}

	const handleHowToGet = (vectors) => {
		const { latitude, longitude } = vectors

		window.open(`https://www.google.com/maps?saddr&daddr=${latitude},${longitude}`, '_blank');
	}
	return (
		<Wrapper>
			{stores && stores.length > 0 ? stores.map((store, index) => {
				return <>
					<WrapperAccordion onClick={() => handlePingStoreLatLong(store)}>
						<Accordion
							className={selectedStore && store.id === selectedStore.id ? `selected` : ''}
							defaultExpanded={selectedStore && store.id === selectedStore.id ? true : false}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon sx={{ color: '#ED8B26' }} />}
								aria-controls={`panel1a-content-${store.id}`}
								id={`panel1a-header-${store.id}`}
							>
								<Header>
									<Title>{store.name}</Title>
									<Subtitle>
										<CustomIcon>
											<Icon width={"14px"} height={"14px"} name={"address"} stroke={"textNinethColor"} />
										</CustomIcon>
										{store.address}
										<CustomIcon className='pointer'>
											<Icon width={"3px"} height={"3px"} name={"pointerDivider"} stroke={"textNinethColor"} />
										</CustomIcon>
										{`${store.distance} Km`}
									</Subtitle>
								</Header>
							</AccordionSummary>
							<AccordionDetails>
								{store.tags.length > 0 && <>
									<Div>Nessa loja você encontra</Div>
									<WrapperChip>
										{store.tags.map((acc) => {
											return <Chip>{acc.name}</Chip>
										})}
									</WrapperChip>
								</>}
								<InternalAccordion>
									<InternalAccordionSummary
										aria-controls={`panel1a-content-internal-${store.id}`}
										id={`panel1a-header-internal-${store.id}`}
									>
										<Header>
											<Div>
												Horarios de Funcionamento <span>Ver mais</span>
												<CustomIcon className='pointer'>
													<Icon width={"10px"} height={"10px"} name={"arrowDown"} stroke={"textNinethColor"} />
												</CustomIcon>
											</Div>
											{store.hoursPickup && store.hoursPickup.map((acc, index) => {
												if (acc.today) {
													return <Hour key={index}><strong>{getDayWeek(acc.day)}</strong> {store.hasDelivery && <><strong>Delivery</strong> {acc.hour}</>} {<><strong>Retirada</strong> {acc.hour}</>}</Hour>
												}

												return null
											})}
										</Header>
									</InternalAccordionSummary>
									<AccordionDetails>
										<table>
											<tr>
												<th></th>
												{store.hasDelivery && <th className='bold'>Delivery</th>}
												<th className='bold'>Balcão</th>
											</tr>

											{store.hoursPickup && store.hoursPickup.map((acc) => {
												return <><tr className={acc.today ? 'selected' : ''}>
													<td className={acc.today ? 'selected-day' : 'bold'}>{getDayWeek(acc.day)}</td>
													{store.hasDelivery && <td className={acc.today ? 'selected' : ''}>{acc.hour}</td>}
													<td className={acc.today ? 'selected' : ''}>{acc.hour}</td>
												</tr>
												</>
											})}

										</table>
									</AccordionDetails>
								</InternalAccordion>
								<Footer>
									<CustomButton onClick={() => { setVisibleAddress(true) }}>
										<CustomIcon>
											<Icon width={"25px"} height={"25px"} name={"appGiraffas"} stroke={"primary"} />
										</CustomIcon>
										pedir agora!
									</CustomButton>
									<CustomButton onClick={() => { handleHowToGet({ latitude: store.latitude, longitude: store.longitude }) }}>
										<CustomIcon >
											<Icon width={"20px"} height={"20px"} name={"rota"} stroke={"primary"} />
										</CustomIcon>
										como chegar!
									</CustomButton>
								</Footer>
							</AccordionDetails>
						</Accordion>
					</WrapperAccordion>
				</>
			}) : <Notify>
				<img width="50px" src={SemLojas} alt="icone sem lojas" />
				<H2>Não encontramos nenhuma loja na sua região:)</H2>
				<span>Infelizmente não chegamos ainda no endereço indicado. Tente outro endereço no campo acima!</span>
			</Notify>
			}
		</Wrapper>

	)
}

export default Store
