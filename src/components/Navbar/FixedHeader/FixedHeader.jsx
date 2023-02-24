import { AppBar, Link, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Wrapper } from './styles'
import Logo from './../../../assets/logo_giraffas.png'
import { Icon } from './../../Common'
import {
	CustomButton,
	CustomIcon,
	Nav
} from '../styles'

export function FixedHeader(props) {
	const {
		handleSite,
		setScrollStore
	} = props
	const [fixed, setFixed] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100 && !fixed) {
				setFixed(true)
			} else if (window.scrollY < 100 && !!fixed) {
				setFixed(false)
			}
		}
		window.addEventListener('scroll', handleScroll, true)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [
		fixed
	])
	return <Wrapper id='fixed-header' fixed={fixed}>
		<AppBar
			position="absolute"
			color="default"
			elevation={0}
			sx={{ zIndex: 1, backgroundColor: "#FFB81C", display: { md: 'block', xs: 'none' } }}
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
							my: 1, mx: 1.5, color: "#fff",
							fontFamily: 'Graviola Soft',
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
							my: 1, mx: 1.5, color: "#fff",
							fontFamily: 'Graviola Soft',
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
							my: 1, mx: 1.5, color: "#fff",
							fontFamily: 'Graviola Soft',
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
						underline="none"
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
						sx={{
							my: 1, mx: 1.5, color: "#fff",
							fontFamily: 'Graviola Soft',
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
	</Wrapper>
}
