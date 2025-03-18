import styled, {css} from "styled-components";

export const TableRow = styled.div`
    display: grid;
    grid-template-columns: 4fr repeat(5, 1fr) 2fr 2fr;
    height: 50px;
    border: 1px solid black;
    border-bottom: none;

    &:first-child{
        border-radius: 5px 5px 0 0;
    }

    &:last-child{
        border-bottom: 1px solid black;
        border-radius: 0 0 5px 5px;
    }
`
