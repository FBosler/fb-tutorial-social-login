import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import { ReferalSymbol, ResponsiveHeader4, MarginedRow } from "./styles";

import MileStones from "../Milestones";
import ShareButtons from "../ShareButtons";

import { DividerRow } from "../../styles";

const Profile = () => {
    const [referrals, setReferrals] = useState(0);

    return (
        <Container>
            <ResponsiveHeader4>
                Hi Jon Doe, this is the overview of your presonal progress! Keep referring, keep collecting!
            </ResponsiveHeader4>
            <MileStones referrals={referrals} />
            <DividerRow />
            <div style={{ maxWidth: "600px", margin: "auto", color: "lightgrey" }}>
                <ResponsiveHeader4>
                    DEVELOPMENT ONLY - Enter a number of referrals to see how the milestones change
                </ResponsiveHeader4>
                <Form>
                    <Form.Group controlId="formDevelopmentNumberReferrals">
                        <MarginedRow>
                            <Col xs="2" sm="1">
                                <Form.Label>
                                    <ReferalSymbol />
                                </Form.Label>
                            </Col>
                            <Col xs="10" sm="11">
                                <Form.Control
                                    type="number"
                                    placeholder="Number of referrals you want to simulate"
                                    onChange={e => {
                                        e.preventDefault();
                                        setReferrals(e.target.value);
                                    }}
                                />
                            </Col>
                        </MarginedRow>
                    </Form.Group>
                </Form>
            </div>
            <DividerRow />
            <ResponsiveHeader4>Share the message easily!</ResponsiveHeader4>
            <Row style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <div style={{ margin: "auto", maxWidth: "600px" }}>
                    <ShareButtons />
                </div>
            </Row>
        </Container>
    );
};
export default Profile;
