import { MdCheck } from "react-icons/md"; // Checkmark
import { Row } from "react-bootstrap"; // Layout
import styled from "styled-components";

// constants
export const ACHIEVED_COLOR = "#049e51";
export const OPEN_COLOR = "grey";

// this is a trick based on https://stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css to force an aspect ratio of 16:9.
export const AspectRatio = styled("div")`
    display: block;
    width: 100%;
    position: relative;
    height: 0;
    padding: 56.25% 0 0 0;
`;

// absolut positioning with pos 0,0,0,0 is also required for the aspect ratio to work
export const BackgroundImage = styled("div")`
  background-image: url("${props => props.url}");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  padding: 10px;
`;

export const PaddedRow = styled(Row)`
    padding: 10px;
`;

export const ColoredSpan = styled("span")`
    color: ${props => (props.percent <= 0 ? OPEN_COLOR : ACHIEVED_COLOR)};
    font-size: 12px;
`;

export const ColoredCheckMark = styled(MdCheck)`
    color: ${props => (props.percent <= 0 ? OPEN_COLOR : ACHIEVED_COLOR)};
`;

// turns the elemnt into a round one that is placed in the, you guessed it, top-right corner
export const TopRightCorner = styled("div")`
    position: absolute;
    width: 40px;
    height: 40px;
    top: -20px;
    right: -20px;
    border-radius: 50%;
    background-color: white;
`;
