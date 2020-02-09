import providerData from "../../data/providerData";
import { Col } from "react-bootstrap";
import React from "react";

import { ImageDiv, ColoredDiv, MarginedRow } from "./styles.js";

const DelegatedAuthButton = ({ img, href, color }) => {
    return (
        <Col xs={2} onClick={() => (window.location = href)} style={{ padding: "5px" }}>
            <ColoredDiv color={color}>
                <ImageDiv img={img} color={color} />
            </ColoredDiv>
        </Col>
    );
};

const DelegatedAuthList = () => {
    return (
        <MarginedRow>
            {providerData.map(provider => {
                return <DelegatedAuthButton {...provider} key={provider.name} />;
            })}
        </MarginedRow>
    );
};

export default DelegatedAuthList;
