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

      span {
        font-size: ${adornmentSize === SMALL && `14px` || adornmentSize === MEDIUM && `18px` || adornmentSize === LARGE && `22px`};
      }
    `}
`;

export const Input = styled.input`
    background-color: transparent;
    border: none;
`
