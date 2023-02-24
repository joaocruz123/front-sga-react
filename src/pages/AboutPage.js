import React, {useEffect} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Highlights from '../components/Highlights';
import styled from 'styled-components';
import { useDeviceLayout } from '../components/utilities/useCustomLayout';
import { connect } from "react-redux";
import { fetchFeedHighlightsWork } from '../redux/actions/ui';
import About from "../components/About/About";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

const WrapperBackground = styled.div`
	background-color: ${props => props.theme.colors.white};
`

const AboutPage = (props) => {
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
		fetchFeedHighlightsWork({ typePlatform, typeModule: 5 })
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
					<About isMobile={isMobile} />
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
	fetchFeedHighlightsWork
})(AboutPage);
