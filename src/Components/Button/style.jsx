import styled, {css} from "styled-components";

export const Container = styled.button`
width: 48px;
height: 48px;
border: none;
border-radius: 42%;
box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25) ;
cursor: pointer;
margin: 10px;

${props => props.buttonIconsBackgroundLigth && css `
   background: #EFEFF5;
   color:#8B8BFF ;
`}
${props => props.buttonNumberBackgroundLigth && css `
   background: #EFEFF5;
   color:#121214;
`}
${props => props.buttonIconsBackgroundDark && css `
   background:#8B8BFF;
   color:#EFEFF5 ;
`}
${props => props.buttonNumberBackgroundDark && css `
   background: #EFEFF5;
   color:#8B8BFF;
`}

${props => props.buttonEqualBackgroundLigth && css `
    background:#8B8BFF;
    color:#EFEFF5 ;
`}
${props => props.buttonEqualBackgroundDark && css `
    background: #EFEFF5;
    color:#8B8BFF;
`}
`