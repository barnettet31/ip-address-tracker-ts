import styled from "styled-components";

export const PageWrapper = styled.main`
display:grid;
grid-template-columns:1fr;
grid-template-rows: 35%  65%;
grid-gap:0;
height:100vh;
@media(max-width:560px){
   grid-template-rows: 47% 53%;
}
`

export const InputHeader = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
padding-top: 2em;

gap:2rem;
grid-area:1/1/2/2;
background: url(${process.env.PUBLIC_URL}/images/pattern-bg.png);
background-size:cover;
@media(min-width: 375px){
   padding-top:1.625em;
   gap:1.875rem;

}
`