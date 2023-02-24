import styled from 'styled-components'

export const Nav = styled.nav`
    padding: 0 2rem;

    >a {
        margin-right: 1.5rem;
        font-weight: 500;
    }
`

export const CustomButton = styled.button`
    display: flex;
    flex-direction: row;
    color: #fff;
    padding: 6px 16px;
    border-radius: 4px;
    font-weight: 100;
    outline: 0;
    border: 0;
    margin: 0;
    font-size: 0.875rem;
    line-height: 2;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    background-color: ${props => props.theme.colors.primary};
	font-family: 'Graviola Soft';
	cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.colors.buttonHover};
	}
`

export const CustomIcon = styled.div`
    padding: 0 .6rem;
    line-height: 1.75;
`
export const CustomIconMenu = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
`
export const Menu = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
`

export const ItemMenu = styled.a`
		display: flex;
		flex-direction: column;
		padding: .6rem;
		justify-content: space-between;
		height: 70px;
		text-decoration: none;

		&:visited {
			text-decoration: none;
		}

		&:hover {
			text-decoration: none;
		}

		&:active {
			text-decoration: none;
		}
		
		>p {
			color: ${props => props.theme.colors.textPrimary};
			margin: 0;
			padding: 0;
			text-transform: uppercase;
			font-size: 13px;
		}
`
