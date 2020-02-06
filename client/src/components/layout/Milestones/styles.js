// constants
export const ACHIEVED_COLOR = "#049e51";
export const OPEN_COLOR = "grey";

// this is a trick based on https://stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css to force an aspect ratio of 16:9.
export const aspectRatio = {
    display: "block",
    width: "100%",
    position: "relative",
    height: 0,
    padding: "56.25% 0 0 0"
};

// absolut positioning with pos 0,0,0,0 is also required for the aspect ratio to work
export const colStyle = {
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
export const topRightCorner = {
    position: "absolute",
    width: "40px",
    height: "40px",
    top: "-20px",
    right: "-20px",
    borderRadius: "50%",
    backgroundColor: "white"
};
