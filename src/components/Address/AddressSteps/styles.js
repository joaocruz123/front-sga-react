import styled from 'styled-components'

export const ContentWrapper = styled.div`
    padding: 2rem 1rem;
`

export const Div = styled.div`
	&.footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 1rem 0 0 0;
	}
`
export const Block = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: ${props => props.theme.colors.lightGrey};
	margin: 0 3px;

	&.active {
		width: 10px;
		height: 10px;
		background:${props => props.theme.colors.primary};
	}
`