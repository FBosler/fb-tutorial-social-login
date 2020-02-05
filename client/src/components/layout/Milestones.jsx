import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Layout
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"; // Progress bar
import "react-circular-progressbar/dist/styles.css"; // Styles for progress bar
import { MdCheck } from "react-icons/md"; // Checkmark

// constants
const ACHIEVED_COLOR = "#049e51";
const OPEN_COLOR = "grey";

// list of our milestones, can dynamically be extended or shortened, depending on preferences.
// imageLocation   := location of the image file
// lowerThreshold  := min threshold to start working towards the milestones
// upperThreshold  := threshold that needs to be reached to achieve the milestone
const milestoneList = [
    {
        imageLocation: "assets/1_kitten.jpg",
        lowerThreshold: 0,
        upperThreshold: 5
    },
    {
        imageLocation: "assets/2_kitten.jpg",
        lowerThreshold: 5,
        upperThreshold: 10
    },
    {
        imageLocation: "assets/3_kitten.jpg",
        lowerThreshold: 10,
        upperThreshold: 20
    }
];

// this is a trick based on https://stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css to force an aspect ratio of 16:9.
const aspectRatio = {
    display: "block",
    width: "100%",
    position: "relative",
    height: 0,
    padding: "56.25% 0 0 0"
};

// absolut positioning with pos 0,0,0,0 is also required for the aspect ratio to work
const colStyle = {
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
const topRightCorner = {
    position: "absolute",
    width: "40px",
    height: "40px",
    top: "-20px",
    right: "-20px",
    borderRadius: "50%",
    backgroundColor: "white"
};

// Text that will be displayed within our circular progress bar, coloring depends on level of achievment
const ProgressBarText = (upperThreshold, referrals, percent) => {
    const color = percent <= 0 ? OPEN_COLOR : ACHIEVED_COLOR;

    if (percent < 0) {
        return <span style={{ color, fontSize: "12px" }}>{upperThreshold}</span>;
    } else if (percent >= 100) {
        return (
            <span style={{ color, fontSize: "12px" }}>
                {upperThreshold} <MdCheck style={{ color }} />
            </span>
        );
    } else {
        return (
            <span style={{ color, fontSize: "12px" }}>
                {referrals}/{upperThreshold}
            </span>
        );
    }
};

// A milestone component, including the circular progress bar
const Milestone = (url, lowerThreshold, upperThreshold, referrals) => {
    const required_referrals = upperThreshold - lowerThreshold;
    const achieved_referrals = referrals - lowerThreshold;
    const percentage = (achieved_referrals / required_referrals) * 100;
    const text = ProgressBarText(upperThreshold, referrals, percentage);

    return (
        <div style={{ paddingTop: "25px" }}>
            <div style={aspectRatio}>
                <div className="z-depth-4" style={{ ...colStyle, backgroundImage: `url("${url}")` }}>
                    <div style={topRightCorner}>
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

// All Milestones, generated based off of milestoneList
const Milestones = props => {
    const referrals = props.referrals || 0;

    return (
        <Container>
            <div style={{ padding: "25px" }}>
                <Row>
                    {milestoneList.map(function(item) {
                        return (
                            <Col xs={12} sm={6} md={4}>
                                {Milestone(item.imageLocation, item.lowerThreshold, item.upperThreshold, referrals)}
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </Container>
    );
};

export default Milestones;
