import styled from 'styled-components'

export const SessionTitle = styled.h1`
	font-size: 3rem;
	width: 100%;
	text-align: center;
	color: ${props => props.theme.colors.primary};
	text-transform: uppercase;
	font-weight: 400;
`
export const ImageApp = styled.div`
	width: 100%;
`
export const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    > img {
        //transform: scale(1);
        margin: .6rem 0; 
        //transition: transform .2s;

        // :hover {
        //     transform: scale(1.1); 
        // }
    }
`
export const ProductName = styled.p`
    font-size: 18px;    
    color: ${props => props.theme.colors.colorPromotional};
    text-align: center;
    font-weight: 400;
    padding: 0;
    margin: 0;
`
export const PromotionType = styled.p`
    font-size: 18px;    
    text-align: center;
    font-weight: 400;
    padding: 0;
    margin: .2rem 0 0 0;

		&.orange-one{
			color: ${props => props.theme.colors.orange1};
		}

		&.orange-two{
			color: ${props => props.theme.colors.orange2};
		}

		&.orange-tree{
			color: ${props => props.theme.colors.orange3};
		}
`
export const WrapperModal = styled.div`
    padding: 1rem 2rem;

    >h1 {
			font-size: 18px;    
			color: ${props => props.theme.colors.colorPromotional};
			text-align: center;
			font-weight: 400;
			padding: 0;
			margin: 0;

			&.promotion{
				font-size: 28px;    
				font-weight: bold;
			}
    }
`
export const WrapperImg = styled.div`
		> img {
			margin: 0 0 .4rem 0; 
			width: 100%;
		}
`

export const WrapperQR = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
`
export const H1 = styled.h1``

export const Description = styled.p`
    padding: 0 .5rem;
    color: ${props => props.theme.colors.textPrimary};
    text-align: center;
    font-size: 13px;
		margin: .8rem 0;
		max-height: 55px;
		overflow: hidden;
`
export const ProductTag = styled.p`
    padding: .5rem;
		border-radius: 15px;
    color: ${props => props.theme.colors.white};
    text-align: center;
    font-size: 13px;
		background-color: ${props => props.theme.colors.primary};
		font-weight: bold;
		margin: 0;
`
export const CustomButton = styled.button`
    color: #fff;
    padding: 8px 14px;
    border-radius: 4px;
    font-weight: 100;
    outline: 0;
    border: 0;
    margin: .5rem 0 0 0;
		text-align: center;
    font-size: 0.875rem;
    line-height: 2;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
		width: 100%;
    background-color: ${props => props.theme.colors.colorPromotional};
	cursor: pointer;
`
export const CustomButtonPromo = styled.button`
    color: #fff;
    padding: 8px 14px;
    border-radius: 4px;
    font-weight: bold;
    outline: 0;
    border: 0;
    margin: .5rem 0 0 0;
		text-align: center;
    font-size: 0.875rem;
    line-height: 2;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
		width: 100%;
    background-color: ${props => props.theme.colors.primary};

		&.disabled{
			opacity: .4;
			cursor: auto;
		}
`
export const Details = styled.div`
		display: flex;
    flex-direction: row;
		align-items: center;
    justify-content: center;
    border-radius: 10px;
		border: 1px solid ${props => props.theme.colors.textNinethColor};
		background-color: #f8f8f8;
		color: ${props => props.theme.colors.textGrey};
		text-align: center;
		font-size: 13px
		margin: 1rem 0;
		padding: .4rem;
		cursor: pointer;
`
export const CustomIcon = styled.div`
    padding: 0 .6rem;
    line-height: 1.75;
`
export const WrapperLoading = styled.div`
	background-color: ${props => props.theme.colors.backgroundMain};
  width: 100%;
	height: 15rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center

	@media(max-width: 756px){
		height: 10rem;
		margin-bottom: 2rem;
	}
`
export const Image = styled.img``

export const Code = styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		border: 2px solid ${props => props.theme.colors.colorPromotional};
		background-color: #f8f8f8;
		color: ${props => props.theme.colors.colorPromotional};
		text-align: center;
		font-size: 28px
		margin: 1rem 0;
		padding: .4rem;
		cursor: pointer;
`
export const Validate = styled.p`
		color: ${props => props.theme.colors.textGrey};
		text-align: center;
		font-size: 11px;
		margin: .2rem 0;
`
export const CloseButton = styled.button`
	padding: 1rem;
	background: none;
	border: 0 none;
	color: ${props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textPrimaryColor) || '#000'};
	text-align: end;
	position: absolute;
	right: 0;
	top: 0;
	font-size: 1.5rem;
	z-index: 1;
	cursor: pointer;

	@media (min-width: 40rem) {
		right: -1rem;
		top: -3.5rem;
	}
`