import { ChangeEventHandler } from "react";
import { Size } from "../../utils/types";
import { SMALL } from "../../utils/constants";

import * as S from "./Form.styles";

type FormProps = {
    value: string | number | readonly string[] | undefined;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    adornment?: String;
    maxWidth?: number;
    adornmentSize?: Size;
}

const Form = ({
    value,
    handleChange,
    adornment,
    maxWidth = 150,
    adornmentSize = SMALL,
}: FormProps) => (
    <S.Container maxWidth={maxWidth} adornmentSize={adornmentSize}>
        {adornment && <span>{adornment}</span>}
        <S.Input onChange={handleChange} value={value} />
    </S.Container>
);

export default Form;
