import styled, {css} from "styled-components";

export const Table = styled.div`
    padding: 15px;
`

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
