import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  background: #fff;
  font-size: .875rem;
  padding: 1.25rem;
`
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1rem;
`
export const FormField = styled.div`
  flex: 1 0 100%;
  width: 100%;
  margin: 0 0 1rem 0;
`
export const StoreLogoImage = styled.img`
  width: 40%;
  align-self: center;
  margin: 0 0 1rem 0;

  @media (max-width: 48rem) and (max-height: 40rem) {
    width: 80%;
  }
`

export const Button = styled.button `
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
  box-shadow: rgba(0, 0, 0, .1) 0 4px 12px;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`

export const AltButton = styled.button `
  background: #FFF;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-weight: 700;
  margin: 0 0 0 1rem;
  width: 6rem;
  height: 3rem;
  border: 0;
  border-radius: 15px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.primary};
  box-shadow: rgba(0, 0, 0, .1) 0 4px 12px;

  &:hover {
    border: 1px solid ${props => props.theme.colors.primary};
    background-color: #fff;
  }
`
export const SingUpButton = styled(AltButton)`
  width: 100%;
  margin: .5rem 0;
`
export const SubmitButton = styled(Button)`
  width: 100%;
  margin: .5rem 0;
`

export const SingInWarning = styled.p`
  margin: 10px 2px;
  padding: 0;
  font-size: .875rem;
  color: red;
  font-weight: bold;
`

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textNinethColor) || '#CCC'};
  position: relative;
  z-index: 1;
  margin: 2.5rem 0;
`

export const DividerLabel = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  background-color: #fff;
  padding: 0 1rem;
  color: #b0b2b4;
  font-weight: 700;
  font-size: 1rem;
`

const SocialButton = styled(Button)`
  border-radius: 8px;
  width: 100%;
  margin: .5rem 0;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding: .25rem 1.5rem;
  height: 3.5rem;

  * {
    cursor: pointer;
  }

  svg {
    height: 90%;
    margin: 0 1.5rem 0 0;
  }
`

export const GoogleButton = styled(SocialButton)`
  background-color: #fff;
  border: 1px solid #d9d8d9;
  color: #b9babc;

  &:hover {
    background-color: #f7f7f7;
    opacity: .9;
  }

  span {
    color: #afb1b3;
  }
`

export const FacebookButton = styled(SocialButton)`
  background-color: #3b5999;
  color: rgba(255, 255, 255, .8);
  
  &:hover {
    background-color: #3b5999;
    opacity: .9;
  }

  span {
    color: #fff;
  }

  svg {
    fill: #fff;
  }
`


export const TermsOfServiceLabel = styled.span`
  color: #b9babc;
  font-size: .8rem;
  text-align: center;
  max-width: 18.75rem;
  margin: 1rem auto;

  a {
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1px solid #cecece;
    color: #cecece;
  }
`

export const ForgotPasswordLink = styled.a`
  font-weight: 400;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary} !important;
  font-size: .7rem;
  margin: -.5rem 0 1rem 0;
  cursor: pointer;

  &:hover {
    opacity: .9;
  }
`
export const MobileHeaderWrapper = styled.header`
  width: 100%;

  > button {
    &.close {
      background: none;
      padding: 0;
      margin: 0;
      position: absolute;
      right: 1.25rem;
      top: 1.25rem;
      font-size: 1.25rem;
      font-weight: 100;
    }
  }

  @media (min-width: 60rem) {
    display: none;
  }
`

export const CloseButton = styled.button`
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.textHighlightColor) || '#000' };
  background: none;
  border: 0 none;
  padding: 0;
  margin: 0;
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
  width: 100%;

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
