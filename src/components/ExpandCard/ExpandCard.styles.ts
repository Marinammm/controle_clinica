import styled, {css} from "styled-components";

type PropsType = {
    isOpen: boolean;
}

export const Wrapper = styled.div<PropsType>`
    ${({ isOpen }) => css`
        background-color: white;
        height: ${isOpen ? '500px' : '70px'};
        margin: 20px 50px;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        transition: height 0.5s ease;
    `}
`;

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 15px;
    height: 73px;
    width: 100%;
    margin-bottom: 3px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    
    span {
        font-size: 18px;
        font-weight: 500;
    }
`;

export const Body = styled.div`
    background-color: #f4f3f2;
    width: 100%;
    height: 100%;
`
