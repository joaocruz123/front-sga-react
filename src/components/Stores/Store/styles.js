import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 260px;
    overflow:auto; 
    padding: .2rem .4rem;
    margin-top: 1rem;

    ::-webkit-scrollbar {
        width: 6px;
    }
      
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px ${props => (props.theme.colors.textNinethColor) || '#CCC'}; 
        border-radius: 10px;
    }
      
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${props => (props.theme.colors.textNinethColor) || '#000'}; 
        -webkit-box-shadow: inset 0 0 6px ${props => (props.theme.colors.textNinethColor) || '#CCC'}; 
    }
    
    table {
        border-collapse: collapse;
        width: 70%;
        font-size: 14px;

				@media (max-width: 756px) {
					width: 100%;
					font-size: 10px;
				}
    }
    
    td, th {
        text-align: left;
        font-weight: 200;
        padding: 4px;
        color: ${props => props.theme.colors.textPrimary};

        &.selected{
            color: ${props => props.theme.colors.primary};
        }

        &.selected-day{
            font-weight: bold;
            color: ${props => props.theme.colors.primary};
        }
        
        &.bold{
            font-weight: bold;
            color: ${props => props.theme.colors.textPrimary};
        }
    }
    
    .MuiAccordionSummary-content{
        margin: 12px 0 0 0;
    }
`
export const WrapperAccordion = styled.div`
    margin: 0 0 .4rem 0;
`
export const Header = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.div`
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
`
export const Subtitle = styled.div`
    display: flex;
    flex-direction: row;
    line-height: 2;
    font-size: 14px;
    font-weight: 200;
    color: ${props => props.theme.colors.textPrimary};

    >span {
        font-size: 26px; 
    }
`
export const CustomIcon = styled.div`
    line-height: 1.75;
    margin: 0 .4rem 0 0;
    &.pointer{
        margin: 0 .4rem 0 .4rem;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 15px;
    font-weight: bold;
    line-height: 2;
    color: ${props => props.theme.colors.darkGrey};

    > span{
        line-height: 2.5;
        margin-left: .5rem;
        font-size: 12px;
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
    }
`
export const WrapperChip = styled.div`
    display: flex;
    flex-direction: row;
`
export const Chip = styled.div`
    font-size: 14px;
    font-weight: 200;
    color: ${props => props.theme.colors.textPrimary};
    border: 1px solid ${props => props.theme.colors.textPrimary};
    border-radius: 20px;
    padding: 0 .3rem;
    margin: 0 .4rem 0 0; 
`
export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    margin: .8rem .4rem 0 .4rem;
    padding: .7rem 0;
    border-top: 1px solid ${props => props.theme.colors.lineGrey};
    justify-content: end;
`

export const CustomButton = styled.button`
    display: flex;
    flex-direction: row;
    color: #fff;
    padding: 4px 10px;
    border-radius: 4px;
    font-weight: 100;
    outline: 0;
    border: 0;
    margin: 0 .4rem 0 0;
    font-size: 0.875rem;
    line-height: 2;
    letter-spacing: 0.02857em;
    font-weight: bold
    min-width: 64px;
    cursor: pointer;
    background-color: ${props => props.theme.colors.primary};

		@media (max-width: 756px) {
			padding: 4px 4px;
		}
`
export const Hour = styled.div`
    color: ${props => props.theme.colors.textPrimary};
    font-size: 13px;
`
export const Notify = styled.div`
    border: 2px solid ${props => props.theme.colors.primary};
    padding: 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    color: #a9a9a9;
`
export const H2 = styled.h2`
    color: ${props => props.theme.colors.primary};
    font-size: 18px;
    margin-top: 1rem;
`