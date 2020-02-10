import styled from "styled-components";
import { Row } from "react-bootstrap";

export const device = {
    mobileS: `@media (min-width: "320px")`,
    mobileM: `@media (min-width: "375px")`,
    mobileL: `@media (min-width: "425px")`,
    tablet: `@media (min-width: "768px")`,
    laptop: `@media (min-width: "1024px")`,
    laptopL: `@media (min-width: "1440px")`,
    desktop: `@media (min-width: "2560px")`
};

export const DividerRow = styled(Row)`
    border-bottom: 1px solid dimgrey;
    -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
        0 11px 15px -7px rgba(0, 0, 0, 0.2);
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
        0 11px 15px -7px rgba(0, 0, 0, 0.2);
`;
