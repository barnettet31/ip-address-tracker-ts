import { Input } from "../input/input.component";
import { InputHeader } from "../layout/layout.component";
import { Title } from "../typography/text.component";

export function Header (){
    return(<InputHeader>
        <Title>IP Address Tracker</Title>
        <Input />
      </InputHeader>)
}