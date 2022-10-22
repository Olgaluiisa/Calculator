import styled from "styled-components";

export const Container = styled.button`
width: 48px;
height: 48px;
border: none;
border-radius: 42%;
background-color: ${props => props.theme.buttonBackground};
color: ${props => props.theme.fontColorNumbers};
box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25) ;
cursor: pointer;
margin: 10px;
`