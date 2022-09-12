import React from "react";
import { Input } from "../input/input.component";
import { InputHeader } from "../layout/layout.component";
import { Title } from "../typography/text.component";
interface IHeader  {
  ip:string;
  onValueChange?:(e:React.FormEvent<HTMLInputElement> )=>void;
  onSubmit?:()=>void;
}
export function Header ({ip, onValueChange, onSubmit}:IHeader ){
    return(<InputHeader>
        <Title>IP Address Tracker</Title>
        <Input onValueChange={onValueChange} onSubmit={onSubmit} ip={ip} />
      </InputHeader>)
}