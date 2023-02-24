import { Container, Dialog, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { styled } from '@mui/material/styles';
import {
	CategorieName,
	Product,
	ProductName,
	WrapperModal,
	Img,
	H1,
	Description,
	WrapperImg,
	Header,
	Body,
	CustomButton,
	SessionTitle,
	Input,
	Filter,
	WrapperLoading,
	Chip,
	WrapperModalCategories,
	CloseButton,
	CustomIcon
} from './styles';
import { setFilterdMenu, setTextSearch } from './../../redux/actions/menu'
import { handleGTM } from './../../redux/actions/ui'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactLoading from "react-loading"
import { Icon } from './../Common'

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	padding: theme.spacing(1),
	textAlign: 'center',
	minHeight: "12.875rem",
	maxHeight: "12.875rem",
	color: theme.palette.text.secondary,
	cursor: "pointer"
}));

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `2px solid ${theme.palette.divider}`,
	borderRadius: '8px',
	'&:not(:last-child)': {
		borderBottom: '',
	},
	'&:before': {
		display: 'none',
	},
	'&.selected': {
		border: `1px solid #ED8B26`,
	}
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary {...props} />
))(() => ({
	padding: 0,
	margin: 0,
	backgroundColor: '#efefef'
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
	backgroundColor: '#efefef'
}));

function Menu(props) {
	const {
		isMobile,
		categories,
		setTextSearch,
		textSearch,
		setFilterdMenu,
		filteredCategories,
		availablesCategories,
		handleGTM
	} = props;
	const [open, setOpen] = useState(false);
	const [openFilterCategories, setOpenFilterCategories] = useState(false);
	const [loading, setLoading] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [selectedCategories, setSelectedCategories] = useState(null);

	useEffect(() => {

		return (() => {
			setTextSearch('')
		})
	}, [
		setTextSearch,
		selectedCategories
	])

	function handleSearchText(e) {
		setTextSearch(e.target.value)

		setTimeout(() => {
			handleSearch()
		}, 2000)
	}

	function handleSearch() {
		setLoading(true);
		if (textSearch && textSearch.length > 0) {
			const categoriesResults = categories && categories.length && categories.reduce((acc, category) => {
				const results = category.products.filter(filteredItem => {
					return (filteredItem.name.toLowerCase().indexOf(textSearch.toLowerCase()) > -1 ||
						filteredItem.description.toLowerCase().indexOf(textSearch.toLowerCase()) > -1) ? true : false
				})

				if (results.length) {
					acc.push({
						id: category.id,
						name: category.name,
						products: results
					})
				}

				return acc
			}, [])

			if (categoriesResults.length) {
				setFilterdMenu(categoriesResults)

				setTimeout(() => {
					setLoading(false)
				}, 1000)

				return
			}
		}

		setFilterdMenu([])
		setLoading(false)
	}

	const handleClose = () => {
		setSelectedProduct(null)
		setOpen(false)
	}

	const handleCloseCategiries = () => {
		setOpenFilterCategories(false)
	}

	const handleDialogSelectProduct = (product) => {
		//GTM 3.0 - Evento de Visualizar produto do carrrinho
		const dataGTM = {
			'event': `view_item`,
			'ecommerce': {
				'currency': 'BRL',
				'store': 'Giraffas',
				'items': [{
					'item_name': product.name,
					'item_id': product.id,
					'price': product.promotionalValue ? product.promotionalValue : product.value,
					'discount': null,
					'categoria': (product.category && product.category.name) ?? null,
					'quantity': 1
				}]
			}
		}
		console.warn(dataGTM)
		handleGTM(dataGTM)

		setSelectedProduct(product)
		setOpen(true)
	}

	const handleSelectedCategories = (categorie) => {
		if (selectedCategories && selectedCategories.length > 0) {
			let index = selectedCategories.indexOf(categorie);

			if (index === -1) {
				let newCategories = [
					...selectedCategories,
					categorie
				]
				setSelectedCategories(newCategories)
			} else {
				const categories = selectedCategories
				categories.splice(index, 1)
				setSelectedCategories([...categories])
			}
		} else {
			setSelectedCategories([categorie])
		}
	}

	const handlefilterCategories = () => {
		selectedCategories.forEach((categorie) => {
			const categorieFilter = categories && categories.find((item) => item.name === categorie)

			if (filteredCategories && filteredCategories.length > 0) {
				if (categorieFilter) {
					let newCategories = [
						...filteredCategories,
						categorieFilter
					]
					setFilterdMenu(newCategories)
				}
			} else {
				setFilterdMenu([categorieFilter])
			}
		})
	}


	return (
		<Container disableGutters component="main" sx={{ pt: 4, pb: 2, pl: 2, pr: 2 }}>
			<SessionTitle>Nosso Cardápio</SessionTitle>
			<Filter>
				<Input placeholder='Busque algum produto' value={textSearch} onChange={(e) => handleSearchText(e)} />
			</Filter>
			{
				!loading && filteredCategories && filteredCategories.length > 0 ?
					filteredCategories && filteredCategories.map((categorie, index) => {
						return (
							<>
								<CategorieName key={`${categorie.name}-${index}`}>
									{categorie.name}
								</CategorieName>
								<Grid container rowSpacing={1} sx={{ pb: 4 }} columnSpacing={{ xs: 2, sm: 2, md: 4 }}>
									{categorie && categorie?.products.map((product, index) => {
										return (
											<>
												<Grid item xs={6} md={2} key={`product-${product.name}-${index}`}>
													<Item onClick={() => handleDialogSelectProduct(product)}>
														<Product>
															<img src={product.image} alt="Imagem produto" />
															<ProductName>{product.name}</ProductName>
														</Product>
													</Item>
												</Grid>
											</>
										)
									})}
								</Grid>
							</>
						)
					}) : !loading && categories ? categories.map((categorie, index) => {
						return (
							<>
								<CategorieName key={`${categorie.name}-${index}`}>
									{categorie.name}
								</CategorieName>
								<Grid container rowSpacing={1} sx={{ pb: 4 }} columnSpacing={{ xs: 2, sm: 2, md: 4 }}>
									{categorie && categorie?.products.map((product, index) => {
										return (
											<>
												<Grid item xs={6} md={2} key={`product-${product.name}-${index}`}>
													<Item onClick={() => handleDialogSelectProduct(product)}>
														<Product>
															<img src={product.image} alt="Imagem produto" />
															<ProductName>{product.name}</ProductName>
														</Product>
													</Item>
												</Grid>
											</>
										)
									})}
								</Grid>
							</>
						)
					}) : loading && <WrapperLoading>
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
							<Img src={selectedProduct.image} alt="Imagem produto" />
						</WrapperImg>
						<H1>{selectedProduct.name}</H1>
						<Description>{selectedProduct.description}</Description>
						{selectedProduct.nutritionalTable && <Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon sx={{ color: '#949494' }} />}
								aria-controls={`panel1a-content-${selectedProduct.id}`}
								id={`panel1a-header-${selectedProduct.id}`}
							>
								<Header>Informações Nutricionais</Header>
							</AccordionSummary>
							<AccordionDetails>
								<Body
								>
									{selectedProduct.nutritionalTable}
								</Body>
							</AccordionDetails>
						</Accordion>}
						{/* <CustomButton onClick={() => window.open(`https://giraffasdelivery.voceqpad.com.br/`)}>
							Quero Agora!
						</CustomButton> */}
					</WrapperModal>
				</Dialog>}

			<Dialog
				onClose={handleCloseCategiries}
				open={openFilterCategories}
				PaperProps={{
					elevation: 0,
				}}
			>
				<WrapperModalCategories>
					{availablesCategories && availablesCategories.map((item, index) => {
						const categorieSelected = selectedCategories && selectedCategories.length > 0 && selectedCategories.filter((acc) => acc === item)

						return <Chip key={`categorie-${index}`} onClick={() => handleSelectedCategories(item)}
							className={categorieSelected && categorieSelected[0] === item ? 'selected' : ''}
						>
							{item}
						</Chip>
					})}
					<CustomButton onClick={() => handlefilterCategories()}>
						Aplicar
					</CustomButton>
				</WrapperModalCategories>
			</Dialog>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		filteredCategories: state.menu.filteredCategories || null,
		categories: state.menu.categories || [],
		textSearch: state.menu.textSearch || null,
		availablesCategories: state.menu.availablesCategories || null
	};
}

export default connect(
	mapStateToProps, {
	setTextSearch,
	setFilterdMenu,
	handleGTM
})(Menu);
