import styled from 'styled-components'

// import { DefaultButton, DefaultInput, DefaultSpan } from '../../components'

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
  min-height: 100%;
  position: relative;
  padding: 1rem;
  box-sizing: border-box;

  * {
    font-family: 'Nunito', 'sans-serif';
  }

  > .close-button {
    flex: 1;
    align-self: flex-end;
    font-weight: bold;
  }

	// @media (min-width: 40rem) {
	// 	padding: 2rem;
	// }
`

export const ContentWrapper = styled.div`
  opacity: 1;
  transition: all .25s ease-in;
  font-size: .875rem;
	min-width: 17rem;
	max-width: 17rem;
	flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  min-height: 100%;

  &.motion {
    opacity: 1;
  }

	> h3 {
		max-width: 100%;
		min-width: 100%;
		padding-right: 0;
    text-align: center;
	}

  > p {
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
  }

	> .notification {
		padding: 0;
	}

  @media (min-width: 23rem) {
    > h3 {
      text-align: center;
    }
  }

  @media (min-width: 60rem) {
    min-width: 100%;
    max-width: 100%;
  }
`


export const Div = styled.div`
  flex: 1;
`

export const H3 = styled.h3`
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textHighlightColor) || '#000' };
  margin: 0;
  padding: 0;
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-weight: bold;
  min-width: 100%;
  margin-bottom: 1rem;
`

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 100%;
  min-height: 100%;
`

export const LoadingImage = styled.img`
  width: 6.25rem;
  height: auto;
`

export const PostalWarning = styled.p`
  margin: 0;
  padding: 0;
  font-size: .875rem;
  color: red;
  font-weight: bold;
`

export const CEPForm = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  max-width: 100%;
	flex-direction: column;
	min-width: 100%;
	justify-content: center;

  button {
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 1rem;
    color: ${props => props.theme.colors.white};
    font-weight: 700;
    padding: 1rem;
    font-size: 1.25rem;
    text-align: center;
    cursor: pointer;
    max-height: 3rem;
    min-height: 3rem;
    max-width: 4rem;
    min-width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      opacity: .9;
    }
  }

	> .fields {
    display: flex;
    flex-direction: column;
    align-items: center;
		min-width: 100%;
		max-width: 100%;

		> div {
			max-width: calc(100% - 5rem);
			min-width: calc(100% - 5rem);
		}
	}

  @media (min-width: 20rem) {
    > .fields {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

	@media (min-width: 23rem) {
		> .notification {
			> p {
				font-weight: normal;
				margin-bottom: .5rem;
			}
		}

		> .fields {
			display: flex;
			flex-direction: row;
			min-width: 100%;
			align-items: flex-start;

      > div {
        max-width: unset;
      }

			> * {
				flex: 1;
			}
		}
	}

	@media (min-width: 40rem) {
		> .fields {
			> div {
				max-width: unset;
			}
		}
	}
`

export const PostalCodeInputContainer = styled.div`
  position: relative;
  margin: 0 0 1rem 0;
  flex: 1;
  display: flex;

  span {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textNinethColor) || '#CCC'};
    height: 1.5rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 0 1rem 0 0;
    border-right: .0625rem solid #ccc;
    font-weight: 600;

    &:focus {
      border-right: .0625rem solid ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' };;
		}
  }

  input {
    height: 3rem;
    border-radius: .7rem;
    max-width: 100%;
		min-width: 100%;
    font-size: 1rem;
    outline: none;
    color: rgba(0, 0, 0, .6);
    padding: 0 0 0 5rem;
    -moz-appearance: textfield;
    box-sizing: border-box;
		transition: all .2s ease-in;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    ::placeholder {
      opacity: .3;
    }

		&:focus {
			outline: 0;
			box-shadow: 0 0 0 1px ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' };
		}
  }

  @media (min-width: 20rem) {
    margin: 0 1rem 1rem 0;
  }

  @media (min-width: 23rem) {
		margin: 0 1rem 0 0;
    min-width: 16rem;
  }
`

export const Span = styled.span``

export const Button = styled.button``

//export const Input = styled(Input)``

export const CloseButton = styled.button`
  background: none;
  border: 0 none;
  font-size: 1.125rem;
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textHighlightColor) || '#000' };
`
export const Paragraph = styled.div`
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textPrimaryColor) || "#000"};
  margin: 1rem 0;
`

export const SpanDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: ${props => props.theme.colors.textPrimary};
    font-weight: 500;
    margin: 1rem 0;
`
export const CustomIcon = styled.div`
    padding: 0 .6rem;
    line-height: 1.75;

    &.geo{
        border-right: 2px solid #fff;
    }
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