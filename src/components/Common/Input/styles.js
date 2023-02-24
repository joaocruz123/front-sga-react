import styled from 'styled-components'

export const Input = styled.input``

export const InputCustom = styled.input`
  border: 1px solid ${props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textNinethColor) || '#CCC'};
  width: 100%;
  border-radius: 1rem;
  height: 3rem;
  padding: 1rem;
  box-shadow: none;
  box-sizing: border-box;
  transition: .1s;

  ::placeholder {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #C1C1C1;
  }

	&.disabled {
		font-size: 1rem;
		color: ${props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textNinethColor) || '#CCC'};
	}

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' };
  }
`

export const InputCustomImg = styled.input`
    background: none;
    border: none;
    height: 3rem;
    padding: 1rem;
    width: 76%;
    box-shadow: none;
    box-sizing: border-box;
    transition: .1s;

    ::placeholder {
        font-size: 16px;
        line-height: 22px;
        color: #C1C1C1;
    }

    @media (min-width: 60rem) {
        width: 86%
    }
`
export const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  font-size: .875rem;

  &.notification {
    color: #f00;
  }
`
