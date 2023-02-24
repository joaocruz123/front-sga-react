import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-top: 4rem;
`

export const SessionTitle = styled.div`
	font-size: 2.5rem;
	width: 100%;
	text-align: center;
	color: ${props => props.theme.colors.purple};
	font-weight: bold;
`
export const Img = styled.img``

export const SessionSubTitle = styled.div`
	font-size: 2rem;
	width: 100%;
	text-align: center;
	color: ${props => props.theme.colors.titleSession};
	font-weight: 400;
`
export const SessionSubTitleHigh = styled.div`
	font-size: 3.5rem;
	width: 100%;
	text-align: center;
	color: ${props => props.theme.colors.titleSession};
	font-weight: 400;
	padding: 0 12rem;
	line-height: 1.2;
	
	@media (max-width: 756px){
		font-size: 1.6rem;
		padding: 0 2rem;
	}
`
export const Title = styled.div`
	font-size: 1.6rem;
	width: 100%;
	color: ${props => props.theme.colors.titleSession};
	font-weight: bold;
`
export const Paragraph = styled.p`
	font-size: 13px;
`
export const SecondarySessionParagraph = styled.p`
	font-size: 13px;
	padding: 0 1rem;
`
export const PrimarySession = styled.div`
	font-size: 1.6rem;
	width: 100%;
	color: ${props => props.theme.colors.titleSession};
	font-weight: bold;
	display: flex;
	flex-direction: row;
	align-items: center;
`
export const SecondarySession = styled.div`
	width: 100%;
	color: ${props => props.theme.colors.purple};
	display: flex;
	flex-direction: row;
	align-items: center;
`
export const PrimarySessionTitle = styled.div`
	font-size: 16px;
	width: 65%;
	color: ${props => props.theme.colors.primary};
	font-weight: bold;
	padding: 0 1rem;
`
export const H6 = styled.div`
    color: ${props => props.theme.colors.titleSession};
    font-size: 22px;
    font-weight: 500;
    text-align: center;
`