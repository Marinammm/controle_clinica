import React from "react";
import * as S from "./PatientTable.styles";

const mock = [
    {
        name: 'Jurandi Xavier',
        week1: 486.66,
        week2: 178.45,
        week3: 50.00,
        week4: 469.33,
        week5: 978.45,
        charged: 2500,
    },
    {
        name: 'Jurandi Xavier',
        week1: 486.66,
        week2: 178.45,
        week3: 50.00,
        week4: 469.33,
        week5: 978.45,
        charged: 2500,
    },
    {
        name: 'Jurandi Xavier',
        week1: 486.66,
        week2: 178.45,
        week3: 50.00,
        week4: 469.33,
        week5: 978.45,
        charged: 2500,
    },
    {
        name: 'Jurandi Xavier',
        week1: 486.66,
        week2: 178.45,
        week3: 50.00,
        week4: 469.33,
        week5: 978.45,
        charged: 2500,
    },
    {
        name: 'Jurandi Xavier',
        week1: 486.66,
        week2: 178.45,
        week3: 50.00,
        week4: 469.33,
        week5: 978.45,
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
            {mock.map((patient) => {
                const patientTotal = patient.week1 + patient.week2 + patient.week3 + patient.week4 + patient.week5;
                return (
                    <S.TableRow>
                        <S.Cell>{patient.name}</S.Cell>
                        <S.NumberCell>{patient.week1}</S.NumberCell>
                        <S.NumberCell>{patient.week2}</S.NumberCell>
                        <S.NumberCell>{patient.week3}</S.NumberCell>
                        <S.NumberCell>{patient.week4}</S.NumberCell>
                        <S.NumberCell>{patient.week5}</S.NumberCell>
                        <S.NumberCell>{patientTotal.toFixed(2)}</S.NumberCell>
                        <S.NumberCell>{(patient.charged - patientTotal).toFixed(2)}</S.NumberCell>

                    </S.TableRow>
                )
            })}
        </S.Table>
    )
}

export default PatientTable;
