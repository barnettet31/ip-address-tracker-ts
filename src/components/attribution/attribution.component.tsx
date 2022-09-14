import { useRef } from "react";
import { AttributionContainer } from "./attribution.styles";

export function Attribution() {
    const attributionContainer = useRef<HTMLDivElement>(null);
    const rect = attributionContainer.current?.getBoundingClientRect();
    const width = rect?.width ;
    
  return (
    <AttributionContainer width={width} ref={attributionContainer}>
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
       Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/barnettet31">Travis Barnette</a>.
    </AttributionContainer>
  );
}
