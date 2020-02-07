import React from "react";
import Milestones from "../Milestones";
import { Container } from "react-bootstrap";

const Landing = () => {
    return (
        <Container>
            <Milestones referrals={12} />
        </Container>
    );
};

export default Landing;
