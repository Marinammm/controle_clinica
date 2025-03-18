import React, { useState, useEffect } from 'react';
import TableRow from '../../TableRow/TableRow';
import { PatientType } from '../../../utils/types';

import * as S from './PatientTableRow.styles';

type PatientTableRowProps = {
    patient: PatientType;
}

const PatientTableRow = ({ patient }: PatientTableRowProps) => {
    const [week1, setWeek1] = useState(patient.week1);
    const [week2, setWeek2] = useState(patient.week1);
    const [week3, setWeek3] = useState(patient.week1);
    const [week4, setWeek4] = useState(patient.week1);
    const [week5, setWeek5] = useState(patient.week1);
    const [total, setTotal] = useState(0);
    const [missing, setMissing] = useState(0);

    useEffect(() => {
        const currentTotal = week1 + week2 + week3 + week4 + week5;
        setTotal(currentTotal);
        setMissing(patient.charged - currentTotal);
    }, [week1, week2, week3, week4, week5]);

    return (
        <TableRow>
            <S.Cell>{patient.name}</S.Cell>
            <S.NumberCell>{patient.week1}</S.NumberCell>
            <S.NumberCell>{patient.week2}</S.NumberCell>
            <S.NumberCell>{patient.week3}</S.NumberCell>
            <S.NumberCell>{patient.week4}</S.NumberCell>
            <S.NumberCell>{patient.week5}</S.NumberCell>
            <S.NumberCell>{total}</S.NumberCell>
            <S.NumberCell>{missing}</S.NumberCell>
        </TableRow>
    );
}

export default PatientTableRow;
