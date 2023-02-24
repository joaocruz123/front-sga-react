import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
`

const message = css`
  padding: .5rem .85rem;
  margin: 0 0 1.5rem 0; 
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
    border-radius: 50%;
    padding: .25rem;
    box-sizing: border-box;
    margin: 0 0 0 1rem;
  }
`

export const ErrorMessage = styled.div`
  ${message}; 

  svg {
    background-color: #fd5b5d;
  }
`

export const SuccessMessage = styled.div`
  ${message}; 
   
  svg {
    background-color: #3abe71;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  flex: 1 0 100%;
  margin: 0 0 1.5rem 0;
`
export const Description = styled.div`
  font-size: 14px;
  text-align: center;
  margin: 1rem 3rem;
	width: 100%;
	color: #b6b4b4;
`

export const FormField = styled.div`
  flex: 0 0 100%;
`

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
	flex-direction: column;
  justify-content: center;
  flex: 1 0 100%;
  margin: 2rem 0 0 0;

  button {
    height: 3rem;
		width: 100%
    background-color: ${props => props.theme.colors.primary};
    cursor: pointer;
		color: #fff;
		font-weight: bold;
		margin: 0 0 .8rem 0;

    &:hover {
      opacity: .9;
    }    

    &:disabled {
      opacity: .5;
      cursor: default;
    }

    &.back {
      margin: 0 0 1rem 0;
      background-color: transparent;
      border: 2px solid ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};  

      &:hover {
        background-color: #f7f7f7;
      }    
    }
  }
`
