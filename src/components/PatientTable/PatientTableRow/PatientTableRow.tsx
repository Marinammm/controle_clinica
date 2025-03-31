import React, { useState, useEffect } from 'react';
import TableRow from '../../TableRow/TableRow';
import { PatientType } from '../../../utils/types';

import * as S from './PatientTableRow.styles';
import Form from '../../Form/Form';

type PatientTableRowProps = {
    patient: PatientType;
}

const PatientTableRow = ({ patient }: PatientTableRowProps) => {
    const [week1, setWeek1] = useState('');
    const [week2, setWeek2] = useState('');
    const [week3, setWeek3] = useState('');
    const [week4, setWeek4] = useState('');
    const [week5, setWeek5] = useState('');
    const [total, setTotal] = useState(0);
    const [missing, setMissing] = useState(0);

    useEffect(() => {
        setWeek1(patient.week1);
        setWeek2(patient.week2);
        setWeek3(patient.week3);
        setWeek4(patient.week4);
        setWeek5(patient.week5);
    }, [patient])

    useEffect(() => {
        const currentTotal = Number(week1) + Number(week2) + Number(week3) + Number(week4) + Number(week5);
        setTotal(currentTotal);
        setMissing(patient.charged - currentTotal);
    }, [week1, week2, week3, week4, week5]);

    return (
        <TableRow>
            <S.Cell>{patient.name}</S.Cell>
            <S.NumberCell>
                <Form
                    value={week1}
                    handleChange={(v) => setWeek1(v.target.value)}
                    adornment="R$"
                    maxWidth={80}
                />
            </S.NumberCell>
            <S.NumberCell>
                <Form
                    value={week2}
                    handleChange={(v) => setWeek2(v.target.value)}
                    adornment="R$"
                    maxWidth={80}
                />
            </S.NumberCell>
            <S.NumberCell>
                <Form
                    value={week3}
                    handleChange={(v) => setWeek3(v.target.value)}
                    adornment="R$"
                    maxWidth={80}
                />
            </S.NumberCell>
            <S.NumberCell>
                <Form
                    value={week4}
                    handleChange={(v) => setWeek4(v.target.value)}
                    adornment="R$"
                    maxWidth={80}
                />
            </S.NumberCell>
            <S.NumberCell>
                <Form
                    value={week5}
                    handleChange={(v) => setWeek5(v.target.value)}
                    adornment="R$"
                    maxWidth={80}
                />
            </S.NumberCell>
            <S.NumberCell>{total.toFixed(2)}</S.NumberCell>
            <S.NumberCell>{missing.toFixed(2)}</S.NumberCell>
        </TableRow>
    );
}

export default PatientTableRow;
