import styled, {css} from "styled-components";

export const Cell = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1px solid black;
    padding: 0 8px;
`

export const NumberCell = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-self: end;
    border-right: 1px solid black;
    padding: 0 8px;

    &:last-child{
        border-right: none;
    }
`
