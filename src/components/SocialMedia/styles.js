import styled from 'styled-components'

export const Session = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
    padding: 0 0 2rem 0;
`
export const Title = styled.div`
    font-size: 42px;    
    text-transform: uppercase;
    color: ${props => props.theme.colors.titleSession};
    text-align: center;
`
export const SubTitle = styled.div`
    font-size: 18px;    
    text-transform: uppercase;
    color: ${props => props.theme.colors.primary};
    text-align: center;
    font-weight: bold;
`
export const Background = styled.div`
    opacity: .8;

    &.left{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: start;
        
        >img {
            font-size: 13px;
            margin: .6rem 0 0 0;
        }
    }

    &.right{
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: end;
        
        >img {
            font-size: 13px;
            margin: .6rem 0 0 0;
        }
    }

`