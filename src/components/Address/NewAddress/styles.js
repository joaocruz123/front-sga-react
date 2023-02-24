import styled from 'styled-components'

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
  padding-top: 0;
  box-sizing: border-box;

  * {
    font-family: 'Nunito', 'sans-serif';
  }

  > .close-button {
    flex: 1;
    align-self: flex-end;
    margin-bottom: 1.25rem;
    font-weight: bold;
    position: absolute;
		right: 0;
		top: 0;
		left: auto;
		display: none;
  }

	@media (min-width: 40rem) {
		> .close-button {
			display: flex;
		}
	}
`

export const ContentWrapper = styled.div`
  opacity: 1;
  transition: all .25s ease-in;
  font-size: .875rem;
  min-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  max-width: 100%;
  min-height: 100%;

  &.motion {
    opacity: 1;
  }

  > p {
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
  }

	> .notification {
		padding: 0;
	}
`


export const Div = styled.div`
  flex: 1;
`

export const H1 = styled.h1`
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textHighlightColor) || '#000' };
  margin: 0;
  padding: 0;
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-weight: bold;
  min-width: 100%;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  text-align: center;
  border-bottom: #E1E1E1 .063rem solid;
  padding-bottom: 1.25rem;
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
  text-align: center;
`

export const CloseButton = styled.button`
  background: none;
  border: 0 none;
  font-size: 1.125rem;
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textHighlightColor) || '#000' };
`

export const TypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;

  > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: none;
    border: #FFF .063rem solid;
    color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textSecondaryColor) || '#666' };
    padding: .625rem;
    border-radius: .625rem;

    &.selected {
      border: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' } .063rem solid;
      color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' };

      > span {
        color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' };
      }
    }

    > span {
      color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textSecondaryColor) || '#666' };
      margin-right: .625rem;
      font-size: 1.25rem;
    }
  }
`

export const Input = styled.input`
	border: 0 none;
	border-bottom: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textPrimaryColor) || '#333' } .063rem solid;
	font-size: 1.125rem;
	height: 1.5rem;
	line-height: 1.5rem;
	color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' };
	margin: 0 auto;
	flex: 1;
  min-width: 100%;
  margin: 0;
  padding: 0;
	margin-bottom: .313rem;

  &[type=number]::-webkit-inner-spin-button,
  &[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const Button = styled.button`
	background: ${props => props.theme.colors.primary};
	color: #fff;
	text-align: center;
	font-weight: 700;
	margin: 0 0 0 1rem;
	width: 6rem;
	height: 3rem;
	border: 0;
	border-radius: 15px;
	cursor: pointer;

	&:hover {
		opacity: .9;
	}
`

export const SaveButton = styled.button`
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.invertedPrimaryColor) || '#fff' };
  background: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' };
  border-radius: .938rem;
  font-weight: bold;
  flex: 1;
  max-height: 3.125rem;
  min-height: 3.125rem;
  line-height: 3.125rem;
  min-width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  box-sizing: border-box;
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

export const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  font-size: .875rem;

  &.notification {
    color: #f00;
  }
`
export const PostalWarning = styled.p`
  margin: 0;
  padding: 0;
  font-size: .875rem;
  color: red;
  font-weight: bold;
`

export const NewAdressForm = styled.div`
  display: flex;
  flex-wrap: wrap;
	gap: 1rem;

	> .postal-code-container {
		margin-bottom: .5rem;
		align-items: flex-start;
		justify-content: flex-start;
	}
`

export const FormFieldAddress = styled.div`
  min-width: 100%;
`

export const FormFieldAddressNumber = styled.div`
  min-width: 25%;
  max-width: 25%;
`

export const FormFieldAddressAdditional = styled.div`
  min-width: calc(75% - 1rem);
	max-width: calc(75% - 1rem);
`

export const FormFieldDistrict = styled.div`
  max-width: 100%;
	min-width: 100%;
`

export const FormFieldCity = styled.div`
  min-width: calc(75% - 1rem);
	max-width: calc(75% - 1rem);
`

export const FormFieldState = styled.div`
  max-width: 25%;
  min-width: 25%;
`

export const FormFieldReference = styled.div`
	max-width: 100%;
	min-width: 100%;
`

export const SaveAddressLabel = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textHighlightColor) || '#000' };
  width: 100%;
`

export const AddressCategory = styled.li`
  list-style: none;
  border: 1px solid ${props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textNinethColor) || '#CCC'};
  border-radius: 1rem;
  max-height: 2.5rem;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  padding: .5rem;
  margin: 0 0 .5rem 0;
  font-weight: 600;
  font-size: 1rem;
  color: ${props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textNinethColor) || '#CCC'};
  cursor: pointer;
  box-sizing: border-box;

  svg {
    width: 1rem;
    height: 1rem;
    flex: 0 0 1rem;
  }

  span {
    padding: 0 0 0 .5rem;
  }

  &.category-active {
    border: 2px solid ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' };
    transition: .1s;
    color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' };

    svg path {
      stroke: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' };
    }
  }
`

export const AddressCategoryList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  gap: 1rem;
`

export const SubmitButton = styled(Button)`
  width: 100%;
  margin: 1rem 0 0;
`

export const Notification = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  background: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textFifthColor) || '#EEE' };
  border: 0.15rem solid ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.grey00) || '#CCC' };
  min-height: 3rem;
  max-height: 3rem;
  min-width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
	font-size: 1rem;
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textPrimaryColor) || '#333' };
  margin: 0 0 1rem;

  > img {
    width: 1rem;
    height: auto;
    min-width: 1rem;
    max-width: 1rem;
    min-height: auto;
    max-height: unset;
    margin-left: 1rem;
  }

	&.error {
		span.custom-icon {
			color: #f00;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1rem;

			> svg {
				background: none;
				min-height: 2rem;
				min-width: 2rem;
				margin-left: .5rem;
			}
		}

		svg {
			color:
		}
	}

  svg {
    width: 1.5rem;
    height: 1.5rem;
    min-width: 1.5rem;
    min-height: 1.5rem;
    background: #fd5b5d;
    border-radius: 50%;
    padding: .25rem;
    box-sizing: border-box;
    margin: 0 0 0 1rem;
  }
`
