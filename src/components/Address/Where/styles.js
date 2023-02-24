import styled from 'styled-components'

export const H3 = styled.h3`
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textHighlightColor) || '#000' };
  margin: 0;
  padding: 0;
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-weight: bold;
  min-width: 100%;
  margin-bottom: 1rem;
  text-align: center;
`

export const Button = styled.button `
  background: ${props => props.theme.colors.lilac};
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin: 0 0 0 1rem;
  width: 6rem;
  height: 3rem;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, .1) 0 4px 12px;

  &:hover {
    background-color: ${props => props.theme.colors.lilac};
    opacity: .9;
  }
`

export const CloseButton = styled.button`
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textHighlightColor) || '#000' };
  background: none;
  border: 0 none;
  padding: 0;
  margin: 0;
`

export const Wrapper = styled.div`
  background: #fff;
  display: flex;
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  min-width: 100%;
  box-sizing: border-box;
  align-items: stretch;
  
  * {
    font-family: 'Nunito', 'sans-serif';
  }

  > .close-button {
    flex: 1;
    align-self: flex-end;
    margin-bottom: 1.25rem;
    font-weight: bold;
    position: absolute;
  }

  > div {
    min-width: 100%;

    &#addresses-loading {
      padding-bottom: 0;
    }

    > div {
			&#addresses-postal-code-component {
				padding: 0;
			}

      &.fixed {
        background: #fff;
        padding: 1.25rem;
        position: fixed;
        top: calc(100% - 6.875rem);
        left: 0;
        width: 100%;
        box-shadow: 0 0 .625rem #e1e1e1;
        transform: translate(0, 0);
      }
    }

    > .overlay {
      min-width: 100%;

      > .postal-code {
        height: 17.813rem;
        min-height: 17.813rem;
        max-height: 17.813rem;
        top: calc(100% - 17.813rem);
        transform: translate(-50%, 0);
      }
    }
  }
`
export const Header = styled.div`
		font-size: 16px;
		font-weight: bold;
		text-align: center;
		color: ${props => props.theme.colors.primary};
		width: 100%;
    text-decoration: underline ${props => props.theme.colors.primary};
`
export const Body = styled.div`
		font-size: 14px;
		text-align: center;
		color: ${props => props.theme.colors.textPrimary};
		width: 100%;
`
export const CustomButton = styled(Button)`
  width: 100%;
  margin: .5rem 0;
`