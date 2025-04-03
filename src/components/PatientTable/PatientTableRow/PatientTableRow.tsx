import React, { useState, useEffect } from 'react';
import TableRow from '../../TableRow/TableRow';
import { PatientType } from '../../../utils/types';

import * as S from './PatientTableRow.styles';
import Form from '../../Form/Form';
import { getNumberFromCurrencyString } from '../../../utils/functions';
import { applyMask } from '../../Form/masks';

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
        const currentTotal = getNumberFromCurrencyString(week1) +
            getNumberFromCurrencyString(week2) +
            getNumberFromCurrencyString(week3) +
            getNumberFromCurrencyString(week4) +
            getNumberFromCurrencyString(week5);
        setTotal(currentTotal);
        setMissing(patient.charged - currentTotal);
    }, [week1, week2, week3, week4, week5]);

    return (
        <TableRow>
            <S.Cell>{patient.name}</S.Cell>
            <S.NumberCell>
                <Form
                    value={week1}
                    handleChange={(v) => setWeek1(v)}
                    maxWidth={80}
                    mask='currency'
                />
            </S.NumberCell>
            <S.NumberCell>
                <Form
                    value={week2}
                    handleChange={setWeek2}
                    maxWidth={80}
                    mask='currency'
                />
            </S.NumberCell>
            <S.NumberCell>
                <Form
                    value={week3}
                    handleChange={setWeek3}
                    maxWidth={80}
                    mask='currency'
                />
            </S.NumberCell>
            <S.NumberCell>
                <Form
                    value={week4}
                    handleChange={setWeek4}
                    maxWidth={80}
                    mask='currency'
                />
            </S.NumberCell>
            <S.NumberCell>
                <Form
                    value={week5}
                    handleChange={setWeek5}
                    maxWidth={80}
                    mask='currency'
                />
            </S.NumberCell>
            <S.NumberCell>{applyMask(total.toFixed(2).toString(), 'currency')}</S.NumberCell>
            <S.NumberCell>{applyMask(missing.toFixed(2).toString(), 'currency')}</S.NumberCell>
        </TableRow>
    );
}

export default PatientTableRow;
