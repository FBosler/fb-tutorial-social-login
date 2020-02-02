import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdCheck } from "react-icons/md";

const ACHIEVED_COLOR = "#049e51";
const OPEN_COLOR = "grey";

const milestone_list = [
    {
        url: "assets/1_kitten.jpg",
        lower_threshold: 0,
        upper_threshold: 5
    },
    {
        url: "assets/2_kitten.jpg",
        lower_threshold: 5,
        upper_threshold: 10
    },
    {
        url: "assets/3_kitten.jpg",
        lower_threshold: 10,
        upper_threshold: 20
    }
];

const aspect_ratio = {
    display: "block",
    width: "100%",
    position: "relative",
    height: 0,
    padding: "56.25% 0 0 0"
};

const col_style = {
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
    padding: "10px",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat"
};

const top_right_corner = {
    position: "absolute",
    width: "40px",
    height: "40px",
    top: "-20px",
    right: "-20px",
    borderRadius: "50%",
    backgroundColor: "white"
};

const innerText = (upper_threshold, value, percent) => {
    const color = percent === 0 ? OPEN_COLOR : ACHIEVED_COLOR;

    return (
        <span style={{ color, fontSize: "12px" }}>
            {percent >= 100 ? (
                <div>
                    {upper_threshold} <MdCheck style={{ color }} />
                </div>
            ) : (
                <div>
                    {value}/{upper_threshold}
                </div>
            )}
        </span>
    );
};

const Milestone = (url, lower_threshold, upper_threshold, referrals) => {
    const range = upper_threshold - lower_threshold;
    const more_than_lower = Math.min(referrals - lower_threshold, range);
    const percentage = referrals >= upper_threshold ? 100 : (more_than_lower / range) * 100;
    const text = innerText(upper_threshold, referrals, percentage);

    return (
        <div style={{ paddingTop: "25px" }}>
            <div style={aspect_ratio}>
                <div className="z-depth-4" style={{ ...col_style, backgroundImage: `url("${url}")` }}>
                    <div style={top_right_corner}>
                        <CircularProgressbarWithChildren
                            value={percentage}
                            strokeWidth={10}
                            styles={buildStyles({
                                textColor: ACHIEVED_COLOR,
                                pathColor: ACHIEVED_COLOR,
                                textSize: "32px"
                            })}
                        >
                            {text}
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Milestones = props => {
    const referrals = props.referrals || 0;

    return (
        <Container>
            <Row>
                {milestone_list.map(function(item) {
                    return (
                        <Col xs={12} sm={6} md={4}>
                            {Milestone(item.url, item.lower_threshold, item.upper_threshold, referrals)}
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Milestones;
