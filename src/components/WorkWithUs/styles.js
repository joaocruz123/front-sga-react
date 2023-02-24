import styled from 'styled-components'
import BackgroundWork from './../../assets/work-background.png'

export const Wrapper = styled.div`
    background-image: url(${BackgroundWork});
    width: 100%;
    //height: 720px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
`

export const CustomButton = styled.button`
    background: ${props => props.theme.colors.primary};
    width: 304px;
    border: none;
    cursor: pointer;
    padding: 1.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    margin-top: -5rem;
    font-family: 'Graviola Soft';
    
    :focus-visible {
        border: none; 
      }
`
export const Img = styled.img``

export const H6 = styled.div`
    color: ${props => props.theme.colors.titleSession};
    font-size: 22px;
    font-weight: 500;
    text-align: center;
`