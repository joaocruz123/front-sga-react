import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 100%;

  &.default-loading{
    background: ${ props => (props.theme && props.theme.main && props.theme.main.general && props.theme.main.general.primaryColor) || '#000' };
  }
`
