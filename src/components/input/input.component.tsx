import { ButtonDiv, InputBox, InputContainer, StyledChevronIcon } from "./input.styles";


export function Input (){
    return(
        <InputContainer>
        <InputBox placeholder="Search for any IP address or domains"/>
        <ButtonDiv>
            <StyledChevronIcon/>
        </ButtonDiv>
        </InputContainer>
    )
}