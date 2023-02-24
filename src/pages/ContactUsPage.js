import React, { useContext, useState } from "react";
import Highlights from '../components/Highlights';
import styled from 'styled-components';
import { useDeviceLayout } from '../components/utilities/useCustomLayout';
import { CssBaseline, Typography } from "@mui/material";
import { connect } from "react-redux";
import { Navbar } from '../components/Navbar';
import ContactUs from "../components/ContactUs";
import Footer from '../components/Footer';

const WrapperBackground = styled.div`
	background-color: ${props => props.theme.colors.backgroundMain};
	//padding-top: 5rem;
`

const ContactUsPage = (props) => {
	const isMobile = useDeviceLayout({
		isMobile: true
	})

	return (
		<>
			<React.Fragment>
				<CssBaseline />
				<Navbar />
				<WrapperBackground>
					<ContactUs isMobile={isMobile}/>
				</WrapperBackground>
				<Footer/>
			</React.Fragment>
		</>
	);
};

const mapStateToProps = (state) => {
	return {};
}

export default connect(
	mapStateToProps, {
})(ContactUsPage);
