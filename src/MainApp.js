import React, { useEffect, useLayoutEffect, useState } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import ReactLoading from "react-loading";

import Routes from './Routes'
import { useDeviceLayout } from './components/utilities/useCustomLayout'
import { setScrollStore } from './redux/actions/ui'
import isLoggedIn from './utils/isLoggedIn'
import LoginPage from './pages/Auth/LoginPage'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Wrapper = styled.div`
  background: #f5f6ff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
`
const themeTIPO_ADMIN = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#8257e6',
		},
		secondary: {
			main: '#02b149',
		},
	},
});
const themeTIPO_USER = createTheme({
	palette: {
		primary: {
			main: "#61C252",
			dark: "#61C252",
			contrastText: "#fff",
		},
		secondary: { main: "#61C252" },
	},
});

console.log(isLoggedIn())
const MainApp = (props) => {
	const { accessToken, requiredAuth, setScrollStore } = props
	const dispatch = useDispatch()
	const localAccess = localStorage.getItem('auth') ? localStorage.getItem('auth') : null
	const logout = localStorage.getItem('logout') ? localStorage.getItem('logout') : null
	const [loading, setLoading] = useState(true)
	const [visibleSignIn, setVisibleSignIn] = useState(false);
	const [visibleSignUp, setVisibleSignUp] = useState(false);
	const [visibleForgotPassword, setVisibleForgotPassword] = useState(false);
	const isMobile = useDeviceLayout({
		isMobile: true
	})

	useEffect(() => {
		if (!accessToken && requiredAuth) {
			setVisibleSignIn(true);
		} else {
			setVisibleSignIn(false);
		}

		setTimeout(() => {
			setLoading(false);
		}, 3000)
	}, [
		requiredAuth,
		accessToken,
		logout,
		localAccess,
		dispatch
	])

	const startDialogSignin = () => {
		setVisibleSignIn(true);
	};

	const handleCloseDialogSignIn = () => {
		setVisibleSignIn(false)
	};

	const startDialogSignup = () => {
		setVisibleSignUp(true);
	};

	const handleCloseDialogSignUp = () => {
		setVisibleSignUp(false)
	};

	const propsLoading = {
		loading,
		setLoading
	}
	const propsAuth = {
		visibleSignIn,
		visibleSignUp,
		setVisibleSignIn,
		startDialogSignin,
		setVisibleSignUp,
		handleCloseDialogSignIn,
		startDialogSignup,
		handleCloseDialogSignUp,
		visibleForgotPassword,
		setVisibleForgotPassword,
		isMobile
	}

	if (loading) {
		return (
			<Wrapper>
				<ReactLoading
					type="spin"
					color="#8257e6"
					height={isMobile ? '10%' : '2%'}
					width={isMobile ? '10%' : '2%'}
				/>
			</Wrapper>
		)
	} else if (!isLoggedIn()) {
		return (
			<ThemeProvider theme={themeTIPO_ADMIN}>
				<div className="App">
					<LoginPage {...propsLoading} />
				</div>
			</ThemeProvider>
		)
	} else {
		return (
			<ThemeProvider theme={themeTIPO_ADMIN}>
				<Helmet>
					<title>{process.env.REACT_APP_TITLE}</title>
				</Helmet>
				<Routes {...propsAuth} setScrollStore={setScrollStore} />
			</ThemeProvider>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		storeInfo: state && state.storeInfo,
		accessToken: (state.auth.auth && state.auth.auth.accessToken) || null,
		requiredAuth: state.auth && state.auth.requiredAuth
	}
}

export default connect(mapStateToProps, {
	setScrollStore
})(MainApp)
