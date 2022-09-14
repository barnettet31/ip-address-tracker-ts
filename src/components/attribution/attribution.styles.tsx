import styled from "styled-components";

export const AttributionContainer = styled.footer.attrs((props:{width:number})=>props)`
margin-inset:auto;
position:absolute;
bottom:5px;
left:calc(50% - ${(props)=>props.width/2}px);
 
`