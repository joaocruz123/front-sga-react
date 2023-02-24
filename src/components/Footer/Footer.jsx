import React from 'react'
import {
	Title,
	SubTitle,
	Wrapper,
	WrapperTow,
	Session,
	SessionTwo,
	TitleTwo,
	//SubTitleTwo,
	Imagens,
	// Input,
	// H1,
	// H2,
	SessionTree,
	SessionMobile,
	TitleMobile,
	ImagensMobile
} from './styles'
import { connect } from 'react-redux'
import { Grid, Link } from '@mui/material'
import QRCode from './../../assets/qrcode.png'
import Arrow from './../../assets/arrow.png'
import AppStore from './../../assets/app_store.jpg'
import GooglePlay from './../../assets/google_play.png'

const footer1 = [
	{
		title: '',
		description: [
			{ name: 'Cupons', link: "/promocoes" },
			{ name: 'Cardápio', link: "/cardapio" },
			{ name: 'Lojas', link: "#" },
			{ name: 'Fale Conosco', link: "/fale-conosco" },
		],
	},
];

const footer2 = [
	{
		title: '',
		description: [
			{ name: 'Sobre nós', link: "/sobre-nos" },
			{ name: 'Imprensa', link: "/imprensa" },
			{ name: 'Seja um franqueado', link: "https://www.expansao.giraffas.com.br/" },
			{ name: 'trabalhe conosco', link: "https://giraffas.extranet.com.br/curriculos_externos/cadastro_curriculo.php" }
		],
	}
]
function Footer() {
	return (
		<>
			<Wrapper>
				<Grid container spacing={1} sx={{ zIndex: 1 }}>
					<Grid item xs={12} md={5} sx={{ display: { md: 'block', xs: 'none' } }}>
						<Session>
							<Title>
								Baixe nosso APP!
							</Title>
							<SubTitle>
								Peça Delivery e receba onde estiver ou <br />
								Retire na loja, sem pegar filas!
							</SubTitle>
						</Session>
					</Grid>
					<Grid item xs={12} md={2} sx={{ display: { md: 'block', xs: 'none' } }}>
						<img src={QRCode} alt="acesso ao app" width="100%" />
					</Grid>
					<Grid item xs={12} md={5} sx={{ display: { md: 'block', xs: 'none' } }}>
						<SessionTwo>
							<TitleTwo>
								Escaneie o QR Code e aproveite!
							</TitleTwo>
							{/* <SubTitleTwo>
								Mais barato, rápido e seguro
							</SubTitleTwo> */}
							<Imagens>
								<img src={Arrow} alt="acesso ao app" width="100" style={{ margin: "0 20px" }} />
								<a href='https://apps.apple.com/br/app/giraffas/id1453746331' target="_blank" rel="noreferrer">
									<img src={AppStore} alt="acesso ao app" width="100%" />
								</a>
								<a href='https://play.google.com/store/apps/details?id=br.com.voceqpad.giraffas' target="_blank" rel="noreferrer">
									<img src={GooglePlay} alt="acesso ao app" width="100%" />
								</a>
							</Imagens>
						</SessionTwo>
					</Grid>
					<Grid item xs={12} md={5} sx={{ display: { md: 'none', xs: 'block' } }}>
						<SessionMobile>
							<TitleMobile>
								Baixe nosso App!
							</TitleMobile>
							<ImagensMobile>
								<a href='https://apps.apple.com/br/app/giraffas/id1453746331' target="_blank" rel="noreferrer">
									<img src={AppStore} alt="acesso ao app" width="100%" />
								</a>
								<a href='https://play.google.com/store/apps/details?id=br.com.voceqpad.giraffas' target="_blank" rel="noreferrer">
									<img src={GooglePlay} alt="acesso ao app" width="107%" />
								</a>
							</ImagensMobile>
						</SessionMobile>
					</Grid>
				</Grid>
			</Wrapper>
			<WrapperTow>
				<Grid container spacing={3} sx={{ zIndex: 1 }}>
					{/* <Grid item xs={12} md={4}>
						<Session>
							<H2>Receba nossas</H2>
							<H1>Promoções por e-mail</H1>
							<Input placeholder='Insira seu e-mail' />
						</Session>
					</Grid> */}
					<Grid item xs={6} sm={2}>
						<Session>
							{footer1.map((footer, index) => (
								<ul key={`footer1-${index}`} style={{ listStyle: "none", margin: 0, padding: 0, }}>
									{footer.description.map((item) => (
										<li key={item.name}>
											<Link variant="button" href={item.link} underline="none" sx={{ fontFamily: 'Graviola Soft', fontWeight: 300, color: "#fff", '&:hover': { color: "#fff", textDecoration: "none" }, }}>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							))}
						</Session>
					</Grid>
					<Grid item xs={6} sm={2}>
						<Session>
							{footer2.map((footer, index) => (
								<ul key={`footer2-${index}`} style={{ listStyle: "none", margin: 0, padding: 0, }}>
									{footer.description.map((item) => (
										<li key={item.name}>
											<Link variant="button" href={item.link} underline="none" sx={{ fontFamily: 'Graviola Soft', fontWeight: 300, color: "#fff", '&:hover': { color: "#fff", textDecoration: "none" }, }}>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							))}
						</Session>
					</Grid>
					<Grid item xs={12} md={8}>
						<SessionTree>
							<p>Giraffas © 2022 - Todos os direitos reservados</p>
							<p>Loja online operada por VoceqPad</p>
							<p>Av. Mofarrej, 825 - G01 - Vila Leopodina - São Paulo - SP - 05311-00</p>
						</SessionTree>
					</Grid>
				</Grid>
			</WrapperTow>
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
})(Footer);
