import styled from 'styled-components'
import Background from './../../assets/background_footer.png'

export const Wrapper = styled.div`
    background-image: url(${Background});
    background-color: ${props => props.theme.colors.footerBackground};
    padding: 2rem;
    background-repeat: no-repeat;
    background-position: 50% 0;
`
export const WrapperTow = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    padding: 2rem;
`
export const H1 = styled.div`
    font-size: 26px;    
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};
    font-weight: 400;
`
export const H2 = styled.div`
    font-size: 16px;
    text-transform: uppercase;    
    color: ${props => props.theme.colors.white};
    font-weight: 300;
`
export const Title = styled.div`
    font-size: 42px;    
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};
`
export const SubTitle = styled.div`
    font-size: 14px;    
    color: ${props => props.theme.colors.white};
    font-weight: bold;
`
export const Session = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    height: 100%;
`
export const TitleTwo = styled.div`
    font-size: 32px;    
    color: ${props => props.theme.colors.white};
    text-align: end;
    font-weight: 200;
`
export const TitleMobile = styled.div`
    font-size: 32px;    
    color: ${props => props.theme.colors.white};
    text-align: center;
    font-weight: 200;
`
export const SubTitleTwo = styled.div`
    font-size: 18px;    
    color: ${props => props.theme.colors.white};
    font-weight: 300;
    text-align: end;
`
export const SessionTwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 100%;
    padding: .8rem 0 0 0;
`

export const SessionMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: .8rem 0 0 0;
`
export const SessionTree = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
    padding: .8rem 0 0 0;
    align-items: end;

		@media(max-width: 750px){
			justify-content: center;
			align-items: center;
			padding: 0 0 5rem 0;
			text-align: center;
		}

    >p {
        color: ${props => props.theme.colors.white};
        margin: 0;
        font-size: 11px;
    }
`
export const Imagens = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 20rem) {
        display: none;
    }
		
		>a{
			width: 50%;
			padding: 1rem .5rem;
		}
`
export const ImagensMobile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
		align-itens: center;

		>a{
			width: 50%;
			padding: .5rem
		}

    @media (max-width: 20rem) {
        display: none;
    }
`
export const Input = styled.input`
      border-radius: 12px;
      padding: .6rem .8rem;
      color: ${props => props.theme.colors.white};
      background: rgba(10,23,55,0.2);
      font-size: 14px;
      border: none;
      margin: .7rem 0;
      width: 80%;

      :focus-visible {
        border: none; 
      }

      ::placeholder {
        color: ${props => props.theme.colors.white};
      }
`
