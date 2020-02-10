import styled from "styled-components";
import { device } from "../../styles";
import { Col, Row, Button } from "react-bootstrap";

export const LandingBackground = styled("div")`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${props => props.url}");
    background-position: 50% 60%;
    background-size: cover;
    border-bottom: grey 1px solid;
    height: 200px;
    ${device.laptop} {
        height: 300px;
      }
`;

export const LoginButton = styled(Button)`
    background: #114b74;
    color: #fff;
    border-radius: 3px;
    padding: 5px 10px;
    margin: auto;
    -webkit-box-shadow: 0 24px 38px 3px #f7f7f72e, 0 9px 46px 8px #ffffff2b, 0 11px 15px -7px #ffffff45;
    box-shadow: 0 24px 38px 3px #f7f7f72e, 0 9px 46px 8px #ffffff2b, 0 11px 15px -7px #ffffff45;
    border-color: white;

    &:hover {
        background: #1b791e;
        border-color: white;
        -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
            0 11px 15px -7px rgba(0, 0, 0, 0.2);
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
            0 11px 15px -7px rgba(0, 0, 0, 0.2);
    }
`;

export const ResponsiveHeader2 = styled("h2")`
    color: white;
    font-size: 1.4rem;
    ${device.laptop} {
        font-size: 2rem;
    }
`;

export const ResponsiveHeader4 = styled("h4")`
    padding: 20px 0 0 0;
`;

export const ResponsiveParagraph = styled("p")`
    color: white;
    font-size: 0.7rem;
    ${device.laptop} {
        font-size: 1rem;
    }
`;

export const PaddedCol = styled(Col)`
    padding: 20px 0 0 0;
`;

export const FullRow = styled(Row)`
    margin: 0 !important;
`;

export const VerticalCenterWrapper = styled("div")`
    height: 100% !important;
    display: flex;
`;
