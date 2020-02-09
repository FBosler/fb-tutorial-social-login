import styled from "styled-components";
import { Row } from "react-bootstrap";

export const ColoredDiv = styled("div")`
    background: white;
    display: inline-block;
    box-shadow: 0 15px 23px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.22);
    transition: all ease-in-out 0.6s;
    border: 1px solid ${props => props.color};
    border-radius: 2px;
    width: 100%;

    &:hover {
        transform: translateY(-10px);
    }
`;

export const ImageDiv = styled("div")`
    min-width: 100%;
    min-height: 48px;
    background: url("${props => props.img}") no-repeat center center / 50% ${props => props.color}
`;

export const MarginedRow = styled(Row)`
    margin: 0px 20px;
`;
