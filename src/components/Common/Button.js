import styled from 'styled-components'

export const Button = styled.button`
  background-color: #ffffff;
  border-style: solid;
  border-radius: 5px;
  border-size: 1px;
  border-width: 1px;
  width: ${props => props.stretch ? '100%': '128px'};
  height: 30px;
  font-size: 12px;
  line-height: 12px;
  transition: all 0.1s;
  font-family: 'Graviola Soft' !important;
  
  &.default{
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    &:hover {
      background-color: ${props => props.theme.colors.primary};
      color: white;
    }
  }

  &.hollow {
    color: ${props => props.theme.colors.textPrimary};
    border: none;
    background-color: none;
  }

  &.primary {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.primary};
    color: white;
    &:hover {}
    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }

  &.secondary {
    border-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.secondary};
    color: white;
    &:hover {}
    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }

  &.success {
    background-color: ${props => props.theme.colors.success};
    border-color: ${props => props.theme.colors.success};
    color: white;
    &:hover {}
  }

  &.error {
    background-color: ${props => props.theme.colors.error};
    border-color: ${props => props.theme.colors.error};
    color: white;
    &:hover {}
  }

  &.back {
    background-color: ${props => props.theme.colors.mediumGrey};
    border-color: ${props => props.theme.colors.mediumGrey};
    color: white;
    &:hover {}
  }

  &.animated:active {
    transform: scale(1.1);
    transition: none;
  }
`
