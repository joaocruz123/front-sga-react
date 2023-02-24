import styled from 'styled-components'

export const SessionTitle = styled.h1`
	font-size: 3rem;
	width: 100%;
	text-align: center;
	color: ${props => props.theme.colors.primary};
	text-transform: uppercase;
	font-weight: 400;
`

export const CategorieName = styled.div`
    font-size: 2rem;    
    color: ${props => props.theme.colors.primary};
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`
export const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;

    > img {
        min-height: 6rem;
        max-height: 6rem;
        object-fit: cover;
        transform: scale(1.1);
        margin: 0 0 .6rem 0; 
        transition: transform .2s;

        :hover {
            transform: scale(1.2); 
        }

        @media(max-width: 756px){
          width: 100%;
          min-height: 6rem;
		      max-height: 6rem;
        }
    }
`
export const ProductName = styled.p`
    font-size: 17px;    
    color: ${props => props.theme.colors.primary};
    text-align: center;
    font-weight: 500;
    padding: 0;
    margin: 0;
`
export const WrapperModal = styled.div`
    padding: 1rem 2rem;

    >h1 {
        color: ${props => props.theme.colors.primary};
        font-size: 18px;
        font-weight: 400;
        text-align: center;
    }
`
export const WrapperModalCategories = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
		justify-content: center;

    >h1 {
        color: ${props => props.theme.colors.primary};
        font-size: 18px;
        font-weight: 400;
        text-align: center;
    }
`
export const WrapperImg = styled.div`
		min-height: 11rem;
		max-height: 11rem;

		> img {
			width: 100%;
			//transform: scale(1.4);
			//margin-top: -40px;
      min-height: 11rem;
      max-height: 11rem;
      object-fit: cover;
		}
`

export const Img = styled.img``

export const H1 = styled.h1``

export const Description = styled.p`
    padding: 0;
    margin: 0;
    color: ${props => props.theme.colors.textPrimary};
    text-align: center;
    font-size: 14px;
		margin-bottom: 1rem;
`
export const Header = styled.div`
		font-size: 14px;
		font-weight: bold;
		text-align: center;
		color: ${props => props.theme.colors.textPrimary};
		width: 100%;
`
export const Body = styled.div`
		font-size: 14px;
		text-align: center;
		color: ${props => props.theme.colors.textPrimary};
		width: 100%;
`
export const CustomButton = styled.button`
    color: #fff;
    padding: 10px 16px;
    border-radius: 4px;
    font-weight: 100;
    outline: 0;
    border: 0;
    margin: 1rem 0 0 0;
		text-align: center;
    font-size: 0.875rem;
    line-height: 2;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
		width: 100%;
    background-color: ${props => props.theme.colors.primary};
`
export const Filter = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;

		@media(max-width: 756px){
			flex-direction: column;
			justify-content: center;
		}
`
export const Input = styled.input`
      border-radius: 16px;
      padding: .6rem .8rem;
      color: ${props => props.theme.colors.textPrimary};
      background: #fff;
      font-size: 14px;
      border: none;
      margin: .7rem 0;
      width: 30rem;

      :focus-visible {
        border: none; 
      }

      ::placeholder {
        color: ${props => props.theme.colors.textPrimary};
      }

			@media(max-width: 756px){
				width: 100%;
			}
`
export const CustomIcon = styled.div`
    padding: 0 .6rem;
    line-height: 1.75;
`
export const CustomButtonFilter = styled.button`
    display: flex;
    flex-direction: row;
    color: #fff;
    padding: 6px 16px;
    border-radius: 20px;
    outline: 0;
    border: 0;
    margin: 0.7rem;
		font-size: 0.875rem;
    line-height: 2;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    height: 2.6rem;
		background-color: ${props => props.theme.colors.primary};

		@media(max-width: 756px){
			width: 100%;
			margin: 0;
		}
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
export const Chip = styled.div`
    font-size: 14px;
    font-weight: 200;
    color: ${props => props.theme.colors.textPrimary};
    border: 1px solid ${props => props.theme.colors.textPrimary};
		background-color: #F4F4F4;
    border-radius: 20px;
    padding: 0 .6rem;
    margin: .4rem .4rem 0 0;
		cursor: pointer;

		&.selected {
			color: ${props => props.theme.colors.primary};
			border: 1px solid ${props => props.theme.colors.primary};
			font-weight: bold;
		}
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
