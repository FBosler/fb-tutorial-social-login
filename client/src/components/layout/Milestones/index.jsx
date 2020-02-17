import React from "react";
import { Col } from "react-bootstrap"; // Layout
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"; // Progress bar
import "react-circular-progressbar/dist/styles.css"; // Styles for progress bar

import {
    ACHIEVED_COLOR,
    AspectRatio,
    BackgroundImage,
    TopRightCorner,
    ColoredCheckMark,
    ColoredSpan,
    PaddedRow
} from "./styles";

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

// Text that will be displayed within our circular progress bar, coloring depends on level of achievment
const ProgressBarText = (upperThreshold, referrals, percent) => {
    if (percent < 0) {
        return <ColoredSpan>{upperThreshold}</ColoredSpan>;
    } else if (percent >= 100) {
        return (
            <ColoredSpan>
                {upperThreshold} <ColoredCheckMark />
            </ColoredSpan>
        );
    } else {
        return (
            <ColoredSpan>
                {referrals}/{upperThreshold}
            </ColoredSpan>
        );
    }
};

// A milestone component, including the circular progress bar
const Milestone = (url, lowerThreshold, upperThreshold, referrals) => {
    const required_referrals = upperThreshold - lowerThreshold;
    const achieved_referrals = referrals - lowerThreshold;
    const percentage = (achieved_referrals / required_referrals) * 100;
    const progressBarText = ProgressBarText(upperThreshold, referrals, percentage);

    return (
        <div>
            <AspectRatio>
                <BackgroundImage className={"z-depth-4"} url={url}>
                    <TopRightCorner className={"z-depth-2"}>
                        <CircularProgressbarWithChildren
                            value={percentage}
                            strokeWidth={10}
                            styles={buildStyles({
                                textColor: ACHIEVED_COLOR,
                                pathColor: ACHIEVED_COLOR,
                                textSize: "32px"
                            })}
                        >
                            {progressBarText}
                        </CircularProgressbarWithChildren>
                    </TopRightCorner>
                </BackgroundImage>
            </AspectRatio>
        </div>
    );
};

// All Milestones, generated based off of milestoneList
const Milestones = props => {
    const referrals = props.referrals || 0;

    return (
        <PaddedRow>
            {milestoneList.map(function(item) {
                return (
                    <Col xs={6} md={4} style={{ paddingBottom: "10px" }} key={item.imageLocation}>
                        {Milestone(item.imageLocation, item.lowerThreshold, item.upperThreshold, referrals)}
                    </Col>
                );
            })}
        </PaddedRow>
    );
};

export default Milestones;
