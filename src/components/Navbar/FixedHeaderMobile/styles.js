import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  min-width: 100%;
  max-width: 100%;
  height: 4.125rem;
  z-index: 10;
  transition: all .5s ease-out;

  @media (max-width: 960px) {
    ${props => {
      if (props.fixed) {
        return `
          position: fixed; 
          top: 0; 
          left: 0; 
          opacity: 1; 
          overflow: hidden;
        `
      }

      return `display: none; opacity: 0;`
    }}
  }

	@media (min-width: 756px){
		display: none;
	}
`
