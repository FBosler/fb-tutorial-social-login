import styled from "styled-components";
import { Container, Button } from "react-bootstrap";

import { AiOutlineMail } from "react-icons/ai";
import { FiKey } from "react-icons/fi";

export const PaddedContainer = styled(Container)`
    padding: 0 25px 25px 25px;
`;

export const EmailSymbol = styled(AiOutlineMail)`
    font-size: 160%;
`;

export const PasswordSymbol = styled(FiKey)`
    font-size: 160%;
`;

export const ResponsiveHeader4 = styled("h4")`
    padding: 20px 0 0 0;
    font-weight: bolder;
`;

export const MutedSpan = styled("span")`
    font-size: 80%;
    font-weight: 400;
`;

export const VerticalCenterWrapper = styled("div")`
    height: 100% !important;
    display: flex;
    margin-top: -15px;
    margin-bottom: 15px;
`;

export const SubmitButtom = styled(Button)`
    background: #114b74;
    color: #fff;
    border-radius: 5px;
    padding: 5px 20px;
    margin: auto;
    -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
        0 11px 15px -7px rgba(0, 0, 0, 0.2);
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
        0 11px 15px -7px rgba(0, 0, 0, 0.2);

    &:hover {
        background: #1b791e;
        border-color: white;
    }
`;
