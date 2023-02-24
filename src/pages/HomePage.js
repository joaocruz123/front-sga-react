import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { fetchFeedHighlights, fetchGroupsHighlights, setScrollStore } from '../redux/actions/ui';
import { connect } from 'react-redux';
import Cards from '../components/Cards';
import Feed from './../components/Feed';
import Highlights from '../components/Highlights';
import Stores from '../components/Stores/Stores';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import { useDeviceLayout } from '../components/utilities/useCustomLayout';
import { setRequiredAuth } from '../redux/actions/auth';
import { animateScroll as scroll } from 'react-scroll'
import { Navbar } from '../components/Navbar';

const HomeContent = (props) => {
	const {
		fetchFeedHighlights,
		fetchGroupsHighlights,
		setRequiredAuth,
		scrollStore,
		setScrollStore,
		...propsAuth
	} = props;

	const isMobile = useDeviceLayout({
		isMobile: true
	})

	useEffect(() => {
		const typePlatform = isMobile ? 4 : 3
		fetchFeedHighlights()
		fetchGroupsHighlights(typePlatform)
		setRequiredAuth(false)

		if (scrollStore) {
			const widthScreen = window.screen.width
			const scrollValue = widthScreen > 1240 ? 1350 : 960
			scroll.scrollTo(scrollValue)
			setTimeout(() => {
				setScrollStore(false)
			}, 1000)
		}
	}, [
		isMobile,
		fetchFeedHighlights,
		fetchGroupsHighlights,
		setRequiredAuth,
		scrollStore,
		setScrollStore
	])

	return (
		<React.Fragment>
			<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
			<CssBaseline />
			<Navbar {...propsAuth} setScrollStore={setScrollStore} />
			<Highlights />
			{/* <Feed /> */}
			<Cards />
			<Stores isMobile={isMobile} />
			<SocialMedia isMobile={isMobile}/>
			<Footer />
		</React.Fragment>
	);
}

const mapStateToProps = (state) => {
	return {
		groups: state.ui.groups,
		scrollStore: state.ui.scroll
	};
}

export default connect(
	mapStateToProps, {
	fetchFeedHighlights,
	fetchGroupsHighlights,
	setRequiredAuth,
	setScrollStore
})(HomeContent);
