import React, { FC, useState } from "react";
import * as S from './ExpandCard.styles';

type ExpandCardProps = {
    headingText: string;
    children: React.ReactNode;
}

const ExpandCard: FC<ExpandCardProps> = ({ headingText, children }: ExpandCardProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <S.Wrapper isOpen={isOpen}>
            <S.Heading onClick={() => setIsOpen(!isOpen)}>
                <span>{headingText}</span>
            </S.Heading>
            <S.Body>
                {children}
            </S.Body>
        </S.Wrapper>
    );
};

export default ExpandCard;
