import styled from 'styled-components'

export const Wrapper = styled.div`
    border: 1px solid ${props => props.theme.colors.primary};
    padding: 1.4rem;
    border-radius: 16px;
    background: #fff;
`

export const H1 = styled.h1`
    font-size: 18px;
    color: #ED8B26
`
export const Title = styled.h1`
    font-size: 26px;
    color: #ED8B26;
    text-align: center;
`
export const Subtitle = styled.h1`
    font-size: 14px;
    color: #9b9b9b;
    text-align: center;
    margin-bottom: 1rem;
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