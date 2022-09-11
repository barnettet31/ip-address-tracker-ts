import styled from "styled-components";

export const InputContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow:0px 50px 50px -25px rgba(0, 0, 0, 0.0983665);;
    border-radius:15px;
    overflow:hidden;
    width:555px;
    @media(max-width: 560px){
        width:327px;
     
     }
`

export const InputBox = styled.input`
width:100%;
padding: 1.125rem 1.5rem;
background-color:#fff;
border:none;
outline:none;
cursor:pointer;
font-size:1.125rem;
&::-webkit-input-placeholder{
    color:#2c2c2c;
    opacity:0.5;
}
color:#2c2c2c;

`

export const ButtonDiv = styled.div`
    width:58px;
    background-color:#000;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    padding-top:1.125rem;
    padding-bottom:1.125rem;
    cursor:pointer;
    &:hover{
        background-color:#3f3f3f;
    }
`
export const StyledChevronIcon = styled.img.attrs({
    src:process.env.PUBLIC_URL + '/images/icon-arrow.svg'
})`

height:12px;

`
