import styled from 'styled-components'

export const Button = styled.button.attrs({
  type: 'button'
})`
  color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.invertedPrimaryColor) || '#fff' };
  background: ${ props => (props.theme && props.theme.main && props.theme.main.general && !props.disabled ? props.theme.main.general.primaryColor : '#999') || '#000' };
  border-radius: 0.938rem;
  font-weight: bold;
  flex: 1;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  box-sizing: border-box;
  font-family: 'Graviola Soft' !important;
  
  &.header{
    background: ${ props => (props.theme && props.theme.main && props.theme.main.general && !props.disabled ? props.theme.main.general.colorTextHeader : '#999') || '#000' };
    color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#fff' };
  }

  &.secondary {
    color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#fff' };
    background: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.secondaryColor) || '#FF0' };
    border-radius: 0.938rem;
    font-size: 0.875rem;
    font-weight: bold;
    flex: 1;
    max-height: 4.375rem;
    min-height: 4.375rem;
    line-height: 4.375rem;
    min-width: calc(100% - 2.5rem);
    max-width: calc(100% - 2.5rem);
    padding: 0;
    margin: 0;
    font-size: 1.125rem;
    box-sizing: border-box;
    margin: 0;
  }

  &.disabled {
    color: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#fff' };
    background: ${ props => (props.theme && props.theme.main && props.theme.main.general ? `${props.theme.main.general.secondaryColor}90` : '') || '#FF0' };
  }

  &.large {
    max-height: 4.375rem;
    min-height: 4.375rem;
    line-height: 4.375rem;
  }

  &.full-width {
    min-width: 100%;
    max-width: 100%;
  }
`
