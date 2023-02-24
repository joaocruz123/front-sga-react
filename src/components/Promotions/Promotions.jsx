import { Container, Dialog, Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { styled } from '@mui/material/styles';
import {
	Product,
	ProductName,
	WrapperModal,
	H1,
	Description,
	WrapperImg,
	CustomButton,
	SessionTitle,
	CustomIcon,
	WrapperLoading,
	PromotionType,
	Image,
	ProductTag,
	//Details,
	WrapperQR,
	Code,
	Validate,
	//CustomButtonPromo,
	ImageApp,
	CloseButton,
} from './styles';
import { setFilterdMenu, setTextSearch } from './../../redux/actions/menu'
import { Icon } from '../Common';
import ReactLoading from "react-loading"
import GiraffasApp from '../../assets/giraffas_app.png'
import GiraffasLabel from '../../assets/promocao_label.png'
import ParaUm from '../../assets/para_um.png'
import ParaDois from '../../assets/para_dois.png'
import ParaMuitos from '../../assets/para_muitos.png'
import { QRcode } from './../QRcode';
import moment from 'moment';
import { useSnackbar } from 'react-simple-snackbar'
import { SuccessOptions } from '../../utils/styleNotification';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	padding: theme.spacing(1),
	textAlign: 'center',
	height: "29.363rem",
	color: theme.palette.text.secondary,
	cursor: "pointer"
}));

function Promotions(props) {
	const {
		isMobile,
		promotions,
	} = props;
	const [open, setOpen] = useState(false);
	const [openPromotion, setOpenPromotion] = useState(false);
	const [loading, setLoading] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [selectedPromotion, setSelectedPromotion] = useState(null);
	const [openSuccessSnackbar] = useSnackbar(SuccessOptions({ modal: true }))

	const handleClose = () => {
		setSelectedProduct(null)
		setOpen(false)
	}

	const handleClosePromotion = () => {
		setSelectedPromotion(null)
		setSelectedProduct(null)
		setOpenPromotion(false)
	}

	const handleDialogSelectProduct = (product) => {
		setSelectedProduct(product)
		setOpen(true)
	}

	const handleDialogSelectPromotion = (product) => {
		setSelectedPromotion(product)

		setTimeout(() => {
			openSuccessSnackbar('Cupom gerado com sucesso!')
		}, 1000)
		setOpen(false)
		setOpenPromotion(true)
		setLoading(false)
	}

	return (
		<Container disableGutters component="main" sx={{ pt: 4, pb: 2, pl: 2, pr: 2 }}>
			<ImageApp>
				<img src={GiraffasApp} width="100%" alt="Imagem Giraffas App" />
			</ImageApp>
			<SessionTitle>Nossas Promoções</SessionTitle>
			<ImageApp>
				<img src={GiraffasLabel} width="100%" alt="Imagem Giraffas App" />
			</ImageApp>
			{
				!loading && promotions && promotions.length > 0 ?
					<Grid container rowSpacing={1} sx={{ pb: 4, pt: 4 }} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
						{promotions && promotions.map((promotion, index) => {
							return (
								<>
									<Grid item xs={6} md={2.4} key={`product-protional-${index}`}>
										<Item onClick={() => handleDialogSelectProduct(promotion)}>
											<Product>
												<img src={promotion.image} alt="Imagem produto" />
												<ProductName>{promotion.title}</ProductName>
												{promotion.typeUsePromotion === 1 ? <>
													<PromotionType className='orange-one'>
														Só meu <Image src={ParaUm} alt="para uma pessoa" width="26px" height="auto" />
													</PromotionType>
												</> : promotion.typeUsePromotion === 2 ? <>
													<PromotionType className='orange-two'>
														Para dois <Image src={ParaDois} alt="para duas pessoa" width="26px" height="auto" />
													</PromotionType>
												</> : <>
													<PromotionType className='orange-tree'>
														Pra Galera <Image src={ParaMuitos} alt="para duas pessoa" width="26px" height="auto" />
													</PromotionType>
												</>}
												<Description>
													{promotion.briefDescription}
												</Description>
												{promotion.textTag && <ProductTag>{promotion.textTag}</ProductTag>}
												<CustomButton>
													Quero esse
												</CustomButton>
											</Product>
										</Item>
									</Grid>
								</>
							)
						})}
					</Grid> : loading && <WrapperLoading>
						<ReactLoading type="spin" color="#ED8B26" height={isMobile ? '10%' : '5%'} width={isMobile ? '10%' : '5%'} />
					</WrapperLoading>
			}

			{selectedProduct &&
				<Dialog
					onClose={handleClose}
					open={open}
					PaperProps={{
						elevation: 0,
						style: {
							overflowY: 'unset',
							maxWidth: '20rem',
							minWidth: '20rem'
						}
					}}
				>
					<WrapperModal>
						<CloseButton className='close-button' onClick={() => {
							handleClose()
						}}>
							<CustomIcon>
								<Icon width={"25px"} height={"25px"} name={"close"} stroke={"lightGrey"} />
							</CustomIcon>
						</CloseButton>
						<WrapperImg>
							<Image src={selectedProduct.image} alt="Imagem produto" />
						</WrapperImg>
						<H1>{selectedProduct.title}</H1>
						{selectedProduct.typeUsePromotion === 1 ? <>
							<PromotionType className='orange-one'>
								Só meu <Image src={ParaUm} alt="para uma pessoa" width="26px" height="auto" />
							</PromotionType>
						</> : selectedProduct.typeUsePromotion === 2 ? <>
							<PromotionType className='orange-two'>
								Para dois <Image src={ParaDois} alt="para duas pessoa" width="26px" height="auto" />
							</PromotionType>
						</> : <>
							<PromotionType className='orange-tree'>
								Pra Galera <Image src={ParaMuitos} alt="para duas pessoa" width="26px" height="auto" />
							</PromotionType>
						</>}
						<Description>{selectedProduct.description}</Description>
						{/* <Details>Detalhes da Promoção
							<CustomIcon>
								<Icon width={"12px"} height={"12px"} name={"arrowDown"} fill={"textGrey"} />
							</CustomIcon>
						</Details> */}
						{selectedProduct.textTag && <ProductTag>{selectedProduct.textTag}</ProductTag>}
						<CustomButton onClick={() => handleDialogSelectPromotion(selectedProduct)}>
							Quero Agora!
						</CustomButton>
					</WrapperModal>
				</Dialog>}

			{selectedPromotion &&
				<Dialog
					onClose={handleClosePromotion}
					open={openPromotion}
					PaperProps={{
						elevation: 0,
						style: {
							overflowY: 'unset',
							maxWidth: '20rem',
							minWidth: '20rem'
						}
					}}
				>
					<WrapperModal>
						<CloseButton className='close-button' onClick={() => {
							handleClosePromotion()
						}}>
							<CustomIcon>
								<Icon width={"25px"} height={"25px"} name={"close"} stroke={"lightGrey"} />
							</CustomIcon>
						</CloseButton>
						<H1 className='promotion'>{selectedPromotion.title}</H1>
						<Description>{selectedPromotion.description}</Description>
						<WrapperQR>
							<QRcode code={selectedPromotion.code} />
						</WrapperQR>
						<Description>
							<strong>Apresente esse QR code ou código
							no <u>balcão</u> da loja e obtenha esse cupom!</strong>
						</Description>
						<Code>
							{selectedPromotion.code}
						</Code>
						<Validate>Cupom válido até
							<strong>{` ${moment(selectedPromotion.expirationDate).format("DD/MM/YYYY")}`}</strong></Validate>
						{/* <CustomButtonPromo className='disabled'>
							Usar no Site
						</CustomButtonPromo> */}
					</WrapperModal>
				</Dialog>}
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		promotions: state.promotions.promotions || [],
	};
}

export default connect(
	mapStateToProps, {
	setTextSearch,
	setFilterdMenu
})(Promotions);
