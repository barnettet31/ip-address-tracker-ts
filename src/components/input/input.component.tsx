import React from "react";
import { ButtonDiv, InputBox, InputContainer, StyledChevronIcon } from "./input.styles";

interface IInput{
    ip:string;
    onValueChange?:(e:React.FormEvent<HTMLInputElement>)=>void;
    onSubmit?:()=>void;
}
export function Input ({ip, onValueChange, onSubmit }:IInput){
    return(
        <InputContainer>
        <InputBox onChange={onValueChange} defaultValue={ip} placeholder="Search for any IP address or domains"/>
        <ButtonDiv onClick={onSubmit}>
            <StyledChevronIcon/>
        </ButtonDiv>
        </InputContainer>
    )
}