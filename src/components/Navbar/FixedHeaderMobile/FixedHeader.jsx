import { AppBar, Link, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Wrapper } from './styles'
import Logo from './../../../assets/logo_giraffas.png'

export function FixedHeaderMobile(props) {
	const [fixed, setFixed] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 550 && !fixed) {
				setFixed(true)
			} else if (window.scrollY < 550 && !!fixed) {
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
			sx={{ zIndex: 1, backgroundColor: "#fff", display: { md: 'none', xs: 'block' } }}
		>
			<Toolbar sx={{ flexWrap: 'wrap', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
				<Link
					href="/"
				>
					<img src={Logo} width="150" alt="Logo principal" />
				</Link>
			</Toolbar>
		</AppBar>
	</Wrapper>
}
