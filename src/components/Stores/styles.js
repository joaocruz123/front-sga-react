import styled from 'styled-components'

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.4rem;
`
export const Subtitle = styled.div`
    display: flex;
    flex-direction: column;
`
export const H1 = styled.h1`
    color: ${props => props.theme.colors.primary};
    margin: 0;
    font-size: 34px;
    font-weight: 300;
    text-transform: uppercase
`
export const H2 = styled.h2`
    color: ${props => props.theme.colors.primary};
    margin: 0;
    font-size: 13px;
    text-transform: uppercase
`

export const CustomIcon = styled.div`
    padding: 0 .6rem;
    line-height: 1.75;

    &.geo{
        border-right: 2px solid #fff;
    }
`
export const Span = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: ${props => props.theme.colors.textPrimary};
    font-weight: 500;
    margin: 1rem 0;
`
export const CustomButton = styled.button`
    display: flex;
    flex-direction: row;
    color: #fff;
    padding: 10px 12px;
    border-radius: 15px;
    font-weight: 100;
    outline: 0;
    border: 0;
    margin: 0 .4rem 0 0;
    font-size: 0.875rem;
    line-height: 2;
    letter-spacing: 0.02857em;
    font-weight: bold
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    font-family: 'Graviola Soft';
    cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.colors.buttonHover};
	}
    
    >span {
        width: 80%;
    }
`

export const WrapperLoading = styled.div`
  background: #fff;
  width: 100%;
    height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
`
