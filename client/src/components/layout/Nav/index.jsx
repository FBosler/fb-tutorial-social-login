import React from "react";
import { StyledNav } from "./styles";

const Nav = () => {
    return (
        <StyledNav>
            <StyledNav.Brand href="/">
                <img alt="" src="/logo192.png" width="30" height="30" className="d-inline-block align-top" /> Referral
                App
            </StyledNav.Brand>
        </StyledNav>
    );
};

export default Nav;
