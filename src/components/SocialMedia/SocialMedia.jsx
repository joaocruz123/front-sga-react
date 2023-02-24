import React from 'react'
import {
	Background,
	SubTitle,
	Title,
	Session
} from './styles'
import { connect } from 'react-redux'
import { Avatar, Container, Grid, Stack } from '@mui/material'
import Grade1 from './../../assets/grade1.png'
import Grade2 from './../../assets/grade2.png'
import facebook from './../../assets/social/face.png'
import instagram from './../../assets/social/insta.png'
import youtube from './../../assets/social/youtube.png'
import linkedin from './../../assets/social/linkedin.png'

function SocialMedia(props) {
	const { isMobile } = props
	return (
		<>
			<Grid container spacing={1}>
				<Grid item xs={12} md={3}>
					<Background className='left'>
						<img src={Grade1} width="300" alt="background-rede-social" />
					</Background>
				</Grid>
				<Grid item xs={12} md={6}>
					<Session>
						<Title>Siga nossas Redes Sociais</Title>
						<SubTitle>E não perca nenhuma novidade!</SubTitle>
					</Session>
				</Grid>
				<Grid item xs={12} md={3} sx={{ display: { md: 'block', xs: 'none' } }}>
					<Background className='right'>
						<img src={Grade2} width="300" alt="background-rede-social" />
					</Background>
				</Grid>
			</Grid>
			{!isMobile ? (<Grid container spacing={2} sx={{ pl: 3, pr: 3 }}>
				<Container maxWidth="lg" sx={{
					padding: "3rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}>
					<iframe src="https://snapwidget.com/embed/1012662"
						title="mySocialMidia"
						className="snapwidget-widget"
						allowtransparency="true"
						frameborder="0"
						scrolling="no"
						style={{ border: "none", overflow: "hidden", width: "100%", height: isMobile ? "100px" : "360px" }}
					></iframe>
				</Container>
			</Grid>) : <iframe src="https://snapwidget.com/embed/1012662"
				title="mySocialMidia"
				className="snapwidget-widget"
				allowtransparency="true"
				frameborder="0"
				scrolling="no"
				style={{ padding: "0 10px", border: "none", overflow: "hidden", width: "100%", height: isMobile ? "100px" : "360px" }}
			></iframe>}
			<Container disableGutters component="main" sx={{ pt: 4, pb: 4 }}>
				<Stack direction="row" justifyContent="center" alignItems="center" spacing={-2}>
					<a href='https://www.facebook.com/redegiraffas' target="_blank" rel="noreferrer">
						<Avatar alt="Facebook" src={facebook} sx={{ width: 80, height: 80 }} />
					</a>
					<a href='https://www.instagram.com/redegiraffas' target="_blank" rel="noreferrer">
						<Avatar alt="Instagram" src={instagram} sx={{ width: 80, height: 80 }} />
					</a>
					<a href='https://www.youtube.com/channel/UCKWWKktqqDirIHEhNdRfp3A' target="_blank" rel="noreferrer">
						<Avatar alt="Youtube" src={youtube} sx={{ width: 80, height: 80 }} />
					</a>
					<a href='https://www.linkedin.com/company/giraffas/?originalSubdomain=br' target="_blank" rel="noreferrer">
						<Avatar alt="Linkedin" src={linkedin} sx={{ width: 80, height: 80 }} />
					</a>
				</Stack>
			</Container>
		</>
	)
}
const mapStateToProps = (state) => {
	return {
		groups: state.ui.groups
	};
}

export default connect(
	mapStateToProps, {
})(SocialMedia);
