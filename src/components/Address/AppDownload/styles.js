import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	min-width: 100%;
	min-height: 100%;

	>h3{
		width: 220px;
		text-align: center;
	}

	> .close-button {
		flex: 1;
		align-self: flex-start;
		font-weight: bold;
	  }
`
export const Dialog = styled.div`
	margin: 0 auto 1.5rem auto;
	background: ${props => props.theme.colors.primary};
	font-size: 1.3rem;
	line-height: 1.6em;
	border-radius: 15px;
	/* width: 300px; */
	height: auto;
	color: #fff;
	padding: 10px 15px;
	position: relative;
	margin-top: 30px;
	font-weight: bold;

	&:after{
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		/*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
		/*Aqui entra a cor da "aba" do balão */
		border-bottom: 20px solid ${props => props.theme.colors.primary};
		top: -20px; /*localização. Experimente alterar para 'bottom'*/
		left: 42%;
	}
`
export const CloseButton = styled.button`
  background: none;
  border: 0 none;
  font-size: 1.125rem;
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textHighlightColor) || '#000' };
`