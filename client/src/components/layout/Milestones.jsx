import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Layout
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"; // Progress bar
import "react-circular-progressbar/dist/styles.css"; // Styles for progress bar
import { MdCheck } from "react-icons/md"; // Checkmark

// constants
const ACHIEVED_COLOR = "#049e51";
const OPEN_COLOR = "grey";

// list of our milestones, can dynamically be extended or shortened, depending on preferences.
// image_location   := location of the image file
// lower_threshold  := min threshold to start working towards the milestones
// upper_threshold  := threshold that needs to be reached to achieve the milestone
const milestone_list = [
    {
        image_location: "assets/1_kitten.jpg",
        lower_threshold: 0,
        upper_threshold: 5
    },
    {
        image_location: "assets/2_kitten.jpg",
        lower_threshold: 5,
        upper_threshold: 10
    },
    {
        image_location: "assets/3_kitten.jpg",
        lower_threshold: 10,
        upper_threshold: 20
    }
];

// this is a trick based on https://stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css to force an aspect ratio of 16:9.
const aspect_ratio = {
    display: "block",
    width: "100%",
    position: "relative",
    height: 0,
    padding: "56.25% 0 0 0"
};

// absolut positioning with pos 0,0,0,0 is also required for the aspect ratio to work
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

// turns the elemnt into a round one, that is placed in the, you guessed it, top-right corner
const top_right_corner = {
    position: "absolute",
    width: "40px",
    height: "40px",
    top: "-20px",
    right: "-20px",
    borderRadius: "50%",
    backgroundColor: "white"
};

// Text that will be displayed within our circular progress bar, coloring depends on level of achievment

const ProgressBarText = (upper_threshold, value, percent) => {
    const color = percent <= 0 ? OPEN_COLOR : ACHIEVED_COLOR;

    if (percent < 0) {
        return <span style={{ color, fontSize: "12px" }}>{upper_threshold}</span>;
    } else if (percent >= 100) {
        return (
            <span style={{ color, fontSize: "12px" }}>
                {upper_threshold} <MdCheck style={{ color }} />
            </span>
        );
    } else {
        return (
            <span style={{ color, fontSize: "12px" }}>
                {value}/{upper_threshold}
            </span>
        );
    }
};

// A milestone component, including the circular progress bar
const Milestone = (url, lower_threshold, upper_threshold, referrals) => {
    const required_referrals = upper_threshold - lower_threshold;
    const achieved_referrals = referrals - lower_threshold;
    const percentage = (achieved_referrals / required_referrals) * 100;
    const text = ProgressBarText(upper_threshold, referrals, percentage);

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

// All Milestones, generated based off of milestone_list
const Milestones = props => {
    const referrals = props.referrals || 0;

    return (
        <Container>
            <Row>
                {milestone_list.map(function(item) {
                    return (
                        <Col xs={12} sm={6} md={4}>
                            {Milestone(item.image_location, item.lower_threshold, item.upper_threshold, referrals)}
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Milestones;
