import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import { useDeviceLayout } from '../components/utilities/useCustomLayout';
import { connect } from "react-redux";
import { Container } from "@mui/system";
import Footer from "../components/Footer";
import { Card, CardContent } from "@mui/material";
import { Navbar } from "../components/Navbar";

const WrapperBackground = styled.div`
	background-color: ${props => props.theme.colors.backgroundMain};
`
const SessionTitle = styled.div`
	font-size: 2rem;
	width: 100%;
	text-align: center;
	color: ${props => props.theme.colors.primary};
	font-weight: bold;
`
const Name = styled.div`
	font-size: 1.2rem;
	width: 100%;
	color: ${props => props.theme.colors.primary};
	font-weight: bold;
	margin-bottom: 10px;
`
const Paragraph = styled.p`
	margin: 0;
	font-size: .9rem;
	font-weight: bold;
	color: #707070;
`
export const SessionSubTitle = styled.div`
	font-size: 1rem;
	width: 100%;
	text-align: center;
	color: #707070;
	font-weight: 400;
`
const PressAccessoriesPage = (props) => {
	const {
		setScrollStore,
		...propsAuth
	} = props
	const isMobile = useDeviceLayout({
		isMobile: true
	})

	return (
		<>
			<React.Fragment>
				<CssBaseline />
				<Navbar {...propsAuth} setScrollStore={setScrollStore} />
				<WrapperBackground>
					<Container maxWidth="lg" sx={{ padding: "4rem 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
						<SessionTitle>Entre em contato com a nossa assessoria de imprensa</SessionTitle>
						<SessionSubTitle>
							Para solicitações de entrevistas, participações em eventos e outros temas relacionado à imprensa,<br /> envie um e-mail ou ligue para a nossa assessoria.
						</SessionSubTitle>
						<Card sx={{ width: isMobile ? "90%" : 700, border: "1px solid #FFB831", margin: "2rem" }}>
							<CardContent>
								<Name>Brain Comunicação</Name>
								<Paragraph>Sefirah Araujo</Paragraph>
								<Paragraph>sefiraharaujo@braincomunicacao.com</Paragraph>
								<Paragraph>11 97276-7665</Paragraph>
								<br />
								<Paragraph>Pamella Ferreira</Paragraph>
								<Paragraph>pamella.ferreira@braincomunicacao.com</Paragraph>
								<Paragraph>11 97403-2434</Paragraph>
							</CardContent>
						</Card>
					</Container>
				</WrapperBackground>
				<Footer />
			</React.Fragment>
		</>
	);
};

const mapStateToProps = (state) => {
	return {};
}

export default connect(
	mapStateToProps, {
})(PressAccessoriesPage);
