import React from "react";
import * as S from "./PatientTable.styles";
import PatientTableRow from "./PatientTableRow/PatientTableRow";

const mock = [
    {
        name: 'Jurandi Xavier',
        week1: '486,66',
        week2: '0,00',
        week3: '0,00',
        week4: '0,00',
        week5: '0,00',
        charged: 2500,
    },
    {
        name: 'Jurandi Xavier',
        week1: '486,66',
        week2: '178,45',
        week3: '50,00',
        week4: '469,33',
        week5: '978,45',
        charged: 2500,
    },
    {
        name: 'Jurandi Xavier',
        week1: '486,66',
        week2: '178,45',
        week3: '50,00',
        week4: '469,33',
        week5: '978,45',
        charged: 2500,
    },
    {
        name: 'Jurandi Xavier',
        week1: '486,66',
        week2: '178,45',
        week3: '50,00',
        week4: '469,33',
        week5: '978,45',
        charged: 2500,
    },
    {
        name: 'Jurandi Xavier',
        week1: '486,66',
        week2: '178,45',
        week3: '50,00',
        week4: '469,33',
        week5: '978,45',
        charged: 2500,
    },
];


const PatientTable = () => {
    return (
        <S.Table>
            <S.TableRow>
                <S.Cell>Paciente</S.Cell>
                <S.NumberCell>Semana 1</S.NumberCell>
                <S.NumberCell>Semana 2</S.NumberCell>
                <S.NumberCell>Semana 3</S.NumberCell>
                <S.NumberCell>Semana 4</S.NumberCell>
                <S.NumberCell>Semana 5</S.NumberCell>
                <S.NumberCell>Entrada</S.NumberCell>
                <S.NumberCell>A receber</S.NumberCell>
            </S.TableRow>
            {mock.map((patient) => <PatientTableRow patient={patient} />)}
        </S.Table>
    )
}

export default PatientTable;
