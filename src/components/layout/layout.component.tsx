import styled from "styled-components";

export const PageWrapper = styled.main`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(2, 1fr);
grid-gap:0;
`

export const InputHeader = styled.header`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
padding-top: 2em;
background: url(${process.env.PUBLIC_URL}/images/pattern-bg.png);
@media(max-width: 375px){
   padding-top:1.625em;

}
`