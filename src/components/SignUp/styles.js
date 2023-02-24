import styled from 'styled-components'

export const Wrapper2 = styled.div`
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
  padding-top: 1.25rem;
  box-sizing: border-box;
  flex: 1;

  > div {
    &#notification {
      margin: 0 1.25rem;
      box-sizing: border-box;
      max-width: calc(100% - 2.5rem);
      min-width: calc(100% - 2.5rem);
      margin-bottom: 1.25rem;
    }
  }

  > .back-button {
    font-weight: bold;
    position: absolute;
    left: 1.25rem;
    top: 1.25rem;
  }
`

export const ContentWrapper2 = styled.div`
  opacity: 0;
  transition: all .25s ease-in;
  font-size: .875rem;
  min-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem;
  box-sizing: border-box;
  max-width: 100%;

  &.motion {
    opacity: 1;
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

export const BackButton = styled.button`
  background: none;
  border: 0 none;
  font-size: 1.125rem;
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textHighlightColor) || '#000' };
`

export const Form2 = styled.form`
  min-width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;

  > input {
    min-width: 100%;
    max-width: 100%;
    color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textHighlightColor) || '#CCC' };
  }

  > ::-webkit-input-placeholder  { 
    font-size: 1rem;
    color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textThirdColor) || '#CCC' };  
  }

  > input:-moz-placeholder { 
    font-size: 1rem;
    color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textThirdColor) || '#CCC' }; 
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 100%;
    max-width: 100%;

    > input {
      min-width: 48%;
      max-width: 48%;
    }

    > ::-webkit-input-placeholder  { 
      font-size: 1rem;
      color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textThirdColor) || '#CCC' }; 
    }
  
    > input:-moz-placeholder { 
      font-size: 1rem;
      color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textThirdColor) || '#CCC' }; 
    }
  }
`

export const Input2 = styled.input`
	border: 0 none;
	border-bottom: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textPrimaryColor) || '#333' } .063rem solid;
	font-size: 1.125rem;
	height: 1.5rem;
	line-height: 1.5rem;
	color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textPrimaryColor) || '#333' };
	margin: 0 auto;
	flex: 1;
  min-width: 100%;
  margin: 0;
  padding: 0;
	margin-bottom: 2.5rem;
`

export const Button2 = styled.button`
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.invertedPrimaryColor) || '#fff' };
  background: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' };
  border-radius: .938rem;
  font-weight: bold;
  flex: 1;
  max-height: 3.75rem;
  min-height: 3.75rem;
  line-height: 3.75rem;
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
`

export const LoadingImage = styled.img`
  width: 6.25rem;
  height: auto;
`

export const OverlayWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  transition: all .25s ease-in;

  &.motion {
    opacity: 1;
    pointer-events: unset;
  }

  > div:not(.background) {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    z-index: 2;
  }

  > div.background {
    background: rgba(150, 150, 150, .5);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Header = styled.header`
  border-bottom: 1px solid ${props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textNinethColor) || '#CCC'};
  padding: 1.5rem 1rem;
  flex: 0;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
  }

  @media (min-width: 48rem) { 
    padding: 1.5rem 1.5rem 0 1.5rem;
    margin: 0 0 2rem 0;
    border: 0;

    svg {
      display: none;
    }
  }
`

export const ErrorMessage = styled.div`
  padding: .5rem .85rem;
  margin: 1.5rem 1.5rem 0 1.5rem; 
  background-color: #f4f4f4;
  min-height: 3rem;
  max-height: 7rem;
  box-sizing: border-box;
  border-radius: 1.15rem;
  border: 1px solid #dedede;
  color: #b9babc;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1rem;

  span {
    max-width: 85%;
    position: relative;
    max-height: calc(1rem * 3);
    overflow: hidden;
    padding-right: 1rem;
    text-overflow: ellipsis;
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

export const PhoneHeader = styled(Header)`
  svg {
    display: none;
  }
  border: 0;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.688rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin: 0;

  @media (min-width: 48rem) {
    font-size: 1.5rem;
    text-align: start;
  }
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 1.5rem 1.5rem 1.5rem;

  @media (min-width: 48rem) {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }
`

export const FormFieldName = styled.div`
  flex: 0 1 calc(50% - .5rem);
  width: 100%;
  margin: 0 1rem 1rem 0;
`

export const FormFieldLastName = styled.div`
  flex: 0 1 calc(50% - .5rem);
  width: 100%;
  margin: 0 0 1rem 0;
`

export const FormFieldEmail = styled.div`
  flex: 1 0 100%;
  width: 100%;
  margin: 0 0 1rem 0;
`

export const FormFieldPhone = styled.div`
  flex: 1 0 100%;
  width: 100%;
  margin: 0 0 1rem 0;
`
export const FormFieldBirthDate = styled.div`
  flex: 0 1 calc(50% - .5rem);
  margin: 0 1rem 1rem 0;
`

export const FormFieldCPF = styled.div`
  flex: 0 1 calc(50% - .5rem);
  margin: 0 0 1rem 0;
`

export const FormFieldPassword = styled.div`
  flex: 1 0 100%;
  width: 100%;
  margin: 0 0 1rem 0;
`

export const FormFieldRepeatPassword = styled.div`
  flex: 1 0 100%;
  width: 100%;
  margin: 0 0 1rem 0;
`

export const RegisterButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin: 2rem 0 1rem 0;
  width: 100%;
  height: 3rem;
  border: 0;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    opacity: .9;
  }
`

export const TermsOfServiceLabel = styled.span`
  color: #b9babc;
  font-size: 1rem;
  text-align: center;
  max-width: 18.75rem;
  margin: 1rem auto;

  a {
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1px solid #cecece;
    cursor: pointer;
    color: #cecece;
  }
`
