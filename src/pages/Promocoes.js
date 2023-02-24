import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { connect } from 'react-redux';
import Highlights from '../components/Highlights';
import { fetchGroupsHighlights } from '../redux/actions/ui';
import { useDeviceLayout } from '../components/utilities/useCustomLayout';
import styled from 'styled-components';
import { fetchProductsPromotionals } from '../redux/actions/promotions';
import { setRequiredAuth } from '../redux/actions/auth';
import Promotions from '../components/Promotions';
import { animateScroll as scroll } from 'react-scroll'
import { Navbar } from '../components/Navbar';

const WrapperBackground = styled.div`
	background-color: ${props => props.theme.colors.backgroundMain};
`

const Promocoes = (props) => {
	const {
		setRequiredAuth,
		fetchProductsPromotionals,
		fetchGroupsHighlights,
		accessToken,
		requiredAuth,
		setScrollStore,
		...propsAuth
	} = props;

	const isMobile = useDeviceLayout({
		isMobile: true
	})
	useEffect(() => {
		const typePlatform = isMobile ? 4 : 3
		fetchGroupsHighlights(typePlatform)

		scroll.scrollTo(680)
	}, [
		isMobile,
		fetchGroupsHighlights
	])
	useEffect(() => {
		if (!accessToken && !requiredAuth) {
			setRequiredAuth(true)
		} else {
			fetchProductsPromotionals()
		}
	}, [
		accessToken,
		requiredAuth,
		setRequiredAuth,
		fetchProductsPromotionals
	])

	return (
		<>
			<React.Fragment>
				<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
				<CssBaseline />
				<Navbar {...propsAuth} setScrollStore={setScrollStore} />
				<Highlights />
				<WrapperBackground>
					<Promotions isMobile={isMobile} />
				</WrapperBackground>
			</React.Fragment>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.auth.auth && state.auth.auth.accessToken,
		requiredAuth: state.auth && state.auth.requiredAuth
	};
}

export default connect(
	mapStateToProps, {
	setRequiredAuth,
	fetchProductsPromotionals,
	fetchGroupsHighlights
})(Promocoes);
