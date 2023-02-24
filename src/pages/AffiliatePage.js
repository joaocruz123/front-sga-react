import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import styled from 'styled-components';
import { useDeviceLayout } from '../components/utilities/useCustomLayout';
import Affiliate from "../components/Affiliate/Affiliate";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

const WrapperBackground = styled.div`
	background-color: ${props => props.theme.colors.backgroundMain};
`

const AffiliatePage = (props) => {
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
				<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
				<Navbar {...propsAuth} setScrollStore={setScrollStore} />
				<CssBaseline />
				<WrapperBackground>
					<Affiliate isMobile={isMobile} />
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
})(AffiliatePage);
