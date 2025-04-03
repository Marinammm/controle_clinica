import React from "react";
import { Size, Masks } from "../../utils/types";
import { SMALL } from "../../utils/constants";
import { applyMask } from "./masks";

import * as S from "./Form.styles";

type FormProps = {
    value: string | number | readonly string[] | undefined;
    handleChange: (v: string) => void;
    adornment?: String;
    maxWidth?: number;
    adornmentSize?: Size;
    mask?: Masks;
}

const Form = ({
    value,
    handleChange,
    adornment,
    maxWidth = 150,
    adornmentSize = SMALL,
    mask = 'none',
}: FormProps) => {
    const onValueChange = (v: React.ChangeEvent<HTMLInputElement>) => {
        const value = v.target.value;
        const maskedValue = applyMask(value, mask);

        handleChange(maskedValue);
    }

    return (
        <S.Container maxWidth={maxWidth} adornmentSize={adornmentSize}>
            {adornment && <span>{adornment}</span>}
            <S.Input onChange={onValueChange} value={applyMask(value as string, mask)} />
        </S.Container>
    )
};

export default Form;
