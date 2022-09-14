import styled from "styled-components"

export const DetailsContainer = styled.div`
width:1110px;
display:flex;
justify-content:space-around;
padding-top: 2.25rem;
padding-bottom: 2.25rem;
background-color:#fff;
border-radius:15px;
position:absolute;
justify-self:center; 
align-items:center;
z-index:999;
top:calc(35% - 64.5px);
box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.0983665);
padding-left:1em;
padding-right:1em;
& > *:not(:last-child) {
    border-right: 1px solid #00000015;
}
@media(max-width:560px){
  width:327px;
  flex-direction:column;
  justify-content:space-between;
  gap:1.5rem;
  text-align:center;
  align-items:flex-start;
  padding-left:1.5rem;
  padding-right:1.5rem;

  & > *:not(:last-child) {
    border-right: none;
    
    width:100%; 
}

}

`
export const StatContainer = styled.div`
display:flex;
flex-direction:column;
gap: 0.8125rem;
text-align:center;
align-self:center;
padding-right:2em;
@media(max-width:560px){
    padding-right:0;
}
`
export const StatTitle = styled.p`
font-size:12px;
line-height:14px;
letter-spacing:1.75px;
font-weight:700;
opacity:0.5;
@media(max-width:500px){
    line-height:12px;
    letter-spacing:1.45833px;
    font-size:0.625rem;
}
`
export const StatContent = styled.h2`
font-size: 1.625rem;
color:#2c2c2c;
line-height:30px;
font-weight:500;
letter-spacing:-0.25;
@media(max-width:500px){
    line-height:24px;
    letter-spacing:-0.178571px;
    font-size:1.25rem;
}
`
