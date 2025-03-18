import React from 'react';
import * as S from './TableRow.styles';

type TableRowProps = {
    children: React.ReactNode
}

const TableRow = ({ children }: TableRowProps) => (
    <S.TableRow>
        {children}
    </S.TableRow>
);

export default TableRow;
