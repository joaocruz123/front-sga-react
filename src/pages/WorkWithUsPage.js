import React, { useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { fetchFeedHighlightsWork } from '../redux/actions/ui';
import Highlights from '../components/Highlights';
import styled from 'styled-components';
import { useDeviceLayout } from '../components/utilities/useCustomLayout';
import WorkWithUs from "../components/WorkWithUs/WorkWithUs";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

const WrapperBackground = styled.div`
	background-color: ${props => props.theme.colors.backgroundMain};
`

const WorkWithUsPage = (props) => {
	const { 
		fetchFeedHighlightsWork,
		setScrollStore,
		...propsAuth
	} = props;
	const isMobile = useDeviceLayout({
		isMobile: true
	})

	useEffect(() => {
		const typePlatform = isMobile ? 4 : 3
		fetchFeedHighlightsWork({ typePlatform, typeModule: 3 })
	}, [
		isMobile,
		fetchFeedHighlightsWork,
	])

	return (
		<>
			<React.Fragment>
				<CssBaseline />
				<Navbar {...propsAuth} setScrollStore={setScrollStore} />
				<Highlights />
				<WrapperBackground>
					<WorkWithUs isMobile={isMobile}/>
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
	fetchFeedHighlightsWork,
})(WorkWithUsPage);
