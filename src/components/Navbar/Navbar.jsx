import React, { useState } from 'react'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Logo from './../../assets/logo_giraffas.png'
import { Icon } from './../Common'
import { FixedHeader } from './FixedHeader/FixedHeader';
import { FixedHeaderMobile } from './FixedHeaderMobile/FixedHeader';
import { AppBar, Dialog, Paper, Slide, Toolbar, Typography } from '@mui/material'
import ForgotPassword from '../password/Forgot/Forgot'
import Link from '@mui/material/Link';
import {
	Nav,
	CustomButton,
	CustomIcon,
	ItemMenu,
	Menu,
	CustomIconMenu
} from './styles'
import AddressSteps from '../Address/AddressSteps';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

export function Navbar({ ...propsAuth }) {
	const {
		visibleSignIn,
		setVisibleSignIn,
		visibleForgotPassword,
		setVisibleForgotPassword,
		handleCloseDialogSignIn,
		visibleSignUp,
		setVisibleSignUp,
		handleCloseDialogSignUp,
		isMobile,
		setScrollStore
	} = propsAuth;
	const [visibleAddress, setVisibleAddress] = useState(false);
	const handleSite = () => {
		setVisibleAddress(true)
	};

	function handleCloseDialogForgotPassword() {
		setVisibleForgotPassword(false)
		setVisibleSignIn(true)
	}

	function handleCloseDialogAddress() {
		setVisibleAddress(false)
	}

	return (
		<>
			<AppBar
				position="absolute"
				color="default"
				elevation={0}
				sx={{ zIndex: 1, backgroundColor: "#00000033", display: { md: 'block', xs: 'none' } }}
			>
				<Toolbar sx={{ flexWrap: 'wrap' }}>
					<Link
						href="/"
					>
						<img src={Logo} width="150" alt="Logo principal" />
					</Link>
					<Nav>
						<Link
							variant="button"
							href="https://giraffasdelivery.voceqpad.com.br"
							underline="none"
							sx={{
								my: 1,
								fontFamily: 'Graviola Soft',
								mx: 1.5,
								color: "#fff",
								'&:hover': {
									color: "#fff",
									textDecoration: "none"
								},
							}}
						>
							Peça Já
						</Link>
						<Link
							variant="button"
							href="/promocoes"
							underline="none"
							sx={{
								my: 1,
								fontFamily: 'Graviola Soft',
								mx: 1.5,
								color: "#fff",
								'&:hover': {
									color: "#fff",
									textDecoration: "none"
								},
							}}
						>
							Cupons
						</Link>
						<Link
							variant="button"
							href="/cardapio"
							underline="none"
							sx={{
								my: 1,
								fontFamily: 'Graviola Soft',
								mx: 1.5,
								color: "#fff",
								'&:hover': {
									color: "#fff",
									textDecoration: "none"
								},
							}}
						>
							Cardápio
						</Link>
						<Link
							variant="button"
							href="#"
							onClick={() => {
								let homePage = window.location.href
								homePage = homePage.split('/')
								homePage = homePage[3]

								if (homePage !== "" || homePage !== "#") {
									window.location.href = `/`
									setScrollStore(true)

									return
								}

								setScrollStore(true)
							}}
							underline="none"
							sx={{
								my: 1,
								fontFamily: 'Graviola Soft',
								mx: 1.5,
								color: "#fff",
								'&:hover': {
									color: "#fff",
									textDecoration: "none"
								},
							}}
						>
							Lojas
						</Link>
						<Link
							variant="button"
							href="https://expansao.giraffas.com.br"
							underline="none"
							sx={{
								my: 1,
								fontFamily: 'Graviola Soft',
								mx: 1.5,
								color: "#fff",
								'&:hover': {
									color: "#fff",
									textDecoration: "none"
								},
							}}
						>
							Seja um franqueado
						</Link>
						<Link
							variant="button"
							href="/pesquisa"
							underline="none"
							sx={{
								my: 1,
								fontFamily: 'Graviola Soft',
								mx: 1.5,
								color: "#fff",
								'&:hover': {
									color: "#fff",
									textDecoration: "none"
								},
							}}
						>
							Pesquisa
						</Link>
						<Link
							variant="button"
							href="/fale-conosco"
							underline="none"
							sx={{
								my: 1,
								fontFamily: 'Graviola Soft',
								mx: 1.5,
								color: "#fff",
								'&:hover': {
									color: "#fff",
									textDecoration: "none"
								},
							}}
						>
							Fale Conosco
						</Link>
					</Nav>
					<Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
					</Typography>
					<CustomButton onClick={() => handleSite()}>
						Faça Seu Pedido
						<CustomIcon>
							<Icon width={"25px"} height={"25px"} name={"appGiraffas"} stroke={"primary"} />
						</CustomIcon>
					</CustomButton>
				</Toolbar>
			</AppBar>
			<FixedHeader handleSite={handleSite} setScrollStore={setScrollStore} />
			<AppBar
				position="fixed"
				color="default"
				elevation={0}
				sx={{ zIndex: 2, backgroundColor: "#f5f5f529", display: { md: 'none', xs: 'block' } }}
			>
				<Toolbar sx={{ flexWrap: 'wrap', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
					<Link
						href="/"
					>
						<img src={Logo} width="150" alt="Logo principal" />
					</Link>
				</Toolbar>
			</AppBar>
			<FixedHeaderMobile />
			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1, display: { md: 'none', xs: 'block' } }} elevation={3}>
				<Menu>
					<ItemMenu href='#' onClick={() => handleSite()}>
						<CustomIconMenu>
							<Icon width={"24px"} height={"24px"} name={"menuPeca"} stroke={"textPrimary"} />
						</CustomIconMenu>
						<p>Peça Já</p>
					</ItemMenu>
					<ItemMenu href='/promocoes'>
						<CustomIconMenu>
							<Icon width={"24px"} height={"24px"} name={"menuCupons"} stroke={"textPrimary"} />
						</CustomIconMenu>
						<p>Cupons</p>
					</ItemMenu>
					<ItemMenu href='/cardapio'>
						<CustomIconMenu>
							<Icon width={"24px"} height={"24px"} name={"menuCardapio"} stroke={"textPrimary"} />
						</CustomIconMenu>
						<p>Cardápio</p>
					</ItemMenu>
					<ItemMenu onClick={() => {
						let homePage = window.location.href
						homePage = homePage.split('/')
						homePage = homePage[3]

						if (homePage !== "") {
							window.location.href = `/`
							setScrollStore(true)

							return
						}

						setScrollStore(true)
					}}>
						<CustomIconMenu>
							<Icon width={"24px"} height={"24px"} name={"menuLojas"} stroke={"textPrimary"} />
						</CustomIconMenu>
						<p>Lojas</p>
					</ItemMenu>
					<ItemMenu>
						<CustomIconMenu>
							<Icon width={"24px"} height={"24px"} name={"menu"} stroke={"textPrimary"} />
						</CustomIconMenu>
						<p>Menu</p>
					</ItemMenu>
				</Menu>
			</Paper>
			<Dialog
				onClose={() => handleCloseDialogSignIn()}
				className='login'
				aria-labelledby='login-dialog'
				open={visibleSignIn}
				fullWidth={false}
				fullScreen={false}
				PaperProps={{
					style: {
						maxWidth: '21rem',
						borderRadius: '.75rem'
					}
				}}
			>
				<SignIn
					isMobile={isMobile}
					setVisibleSignUp={setVisibleSignUp}
					setVisibleSignIn={setVisibleSignIn}
					setVisibleForgotPassword={setVisibleForgotPassword}
					handleCloseDialogForgotPassword={handleCloseDialogForgotPassword}
					close={() => { setVisibleSignIn(false) }}
				/>
			</Dialog>

			<Dialog
				onClose={() => handleCloseDialogAddress()}
				className='login'
				aria-labelledby='login-dialog'
				open={visibleAddress}
				fullWidth={false}
				fullScreen={false}
				PaperProps={{
					style: {
						minWidth: '21rem',
						maxWidth: '21rem',
						borderRadius: '.75rem'
					}
				}}
			>
				<AddressSteps isMobile={isMobile} handleCloseDialogAddress={handleCloseDialogAddress} />
			</Dialog>


			<Dialog
				onClose={() => handleCloseDialogSignUp()}
				aria-labelledby='signUp-dialog'
				open={visibleSignUp}
				maxWidth={'xs'}
				fullWidth={false}
				fullScreen={false}
				PaperProps={{
					style: {
						maxWidth: '21rem',
						borderRadius: '.75rem'
					}
				}}
			>
				<SignUp
					setVisibleSignUp={setVisibleSignUp}
					setVisibleSignIn={setVisibleSignIn}
					close={() => { setVisibleSignUp(false) }}
				>
				</SignUp>
			</Dialog>

			<Dialog
				onClose={() => handleCloseDialogForgotPassword()}
				aria-labelledby='forgot-password-dialog'
				open={visibleForgotPassword}
				maxWidth={'xs'}
				fullWidth={false}
				fullScreen={false}
				classes={{
					style: {
						maxWidth: '22rem',
						borderRadius: '.75rem'
					}
				}}
				TransitionComponent={Transition}
			>
				<ForgotPassword backStep={() => handleCloseDialogForgotPassword()} />
			</Dialog>
		</>

	)
}
