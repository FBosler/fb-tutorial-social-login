import React from "react";
import { Link } from "react-router-dom";
import { StyledFooter } from "./styles";

const Footer = () => {
    return (
        <StyledFooter sticky="bottom">
            <div style={{ float: "left" }}>© 2020 Copyright: Fabian Bosler</div>
            <div style={{ float: "right", marginLeft: "auto" }}>
                <Link to="/about">About</Link> <Link to="/about">Impressum</Link>
            </div>
        </StyledFooter>
    );
};

export default Footer;
