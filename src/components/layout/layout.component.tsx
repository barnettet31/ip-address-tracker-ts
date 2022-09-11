import styled from "styled-components";

export const PageWrapper = styled.main`
display:grid;
grid-template-columns:1fr;
grid-template-rows: 20% 80%;
grid-gap:0;
height:100vh;
`

export const InputHeader = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
padding-top: 2em;
gap:2rem;
background: url(${process.env.PUBLIC_URL}/images/pattern-bg.png);
@media(min-width: 375px){
   padding-top:1.625em;
   gap:1.875rem;

}
`