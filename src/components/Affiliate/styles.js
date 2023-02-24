import styled from 'styled-components'
import BackgroundSessionForm from './../../assets/sessions/session1.png'
import BackgroundSessionAbout from './../../assets/sessions/session2.png'
import BackgroundSessionPrato from './../../assets/sessions/session3.png'

export const Wrapper = styled.div``

export const Img = styled.img``

export const SessionForm = styled.div`
    background-image: url(${BackgroundSessionForm});
    width: 100%;
    height: 720px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
`
export const SessionAbout = styled.div`
    background-image: url(${BackgroundSessionAbout});
    width: 100%;
    height: 720px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
`
export const SessionPrato = styled.div`
    background-image: url(${BackgroundSessionPrato});
    width: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
`
export const CustomButton = styled.button`
    background: none;
    width: 304px;
    border:none;
    cursor: pointer;

    :focus-visible {
        border: none; 
      }
`