import styled, {css} from "styled-components";

import { Size } from "../../utils/types";
import { SMALL, MEDIUM, LARGE } from "../../utils/constants";

type ContainerProps = {
    maxWidth: number;
    adornmentSize: Size;
}

export const Container = styled.div<ContainerProps>`
    ${({ maxWidth, adornmentSize }) => css`
      max-width: ${maxWidth}px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      overflow: hidden;

      
      font-size: ${adornmentSize === SMALL && `14px` || adornmentSize === MEDIUM && `18px` || adornmentSize === LARGE && `22px`};
      

      :focus-within {
        border-bottom: 1px solid black;
        outline: none;
        font-size: 18px;
      }
    `}
`;

export const Input = styled.input`
    background-color: transparent;
    border: none;
    max-width: inherit;
    transition: font-size 0.3s ease-out;
`