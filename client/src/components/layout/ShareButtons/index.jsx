import React from "react";

import {
    FacebookButton,
    TwitterButton,
    LinkedinButton,
    WhatsappButton,
    PinterestButton,
    RedditButton,
    EmailButton,
    IconWrapper,
    LinkIcon
} from "./styles";

import {
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    EmailIcon
} from "react-share";

const ShareButtons = () => {
    const referral_code = "DEFAULT_CODE";

    const final_url = window.location.hostname.includes("local")
        ? `${window.location.host}/${referral_code}`
        : `${window.location.hostname}/${referral_code}`;

    const title = "check out this amazing new app";
    const emailMessage = "check out this amazing new app and become part of the movement: ";
    const iconSize = 42;
    const CAT_IMAGE = "https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_1280.jpg";

    return (
        <div style={{ display: "flex" }}>
            <FacebookButton url={final_url} quote={title} className="col center-align">
                <FacebookIcon size={iconSize} round />
            </FacebookButton>

            <TwitterButton url={final_url} title={title} hashtags={["referral"]} className="col">
                <TwitterIcon size={iconSize} round />
            </TwitterButton>

            <WhatsappButton url={final_url} title={title} className="col">
                <WhatsappIcon size={iconSize} round />
            </WhatsappButton>

            <LinkedinButton url={final_url} windowWidth={750} windowHeight={600} className="col">
                <LinkedinIcon size={iconSize} round />
            </LinkedinButton>

            <PinterestButton url={final_url} media={CAT_IMAGE} className="col">
                <PinterestIcon size={iconSize} round />
            </PinterestButton>

            <RedditButton url={final_url} title={title} className="col">
                <RedditIcon size={iconSize} round />
            </RedditButton>

            <EmailButton url={final_url} subject={title} body={emailMessage}>
                <EmailIcon bgStyle={{ fill: "lightskyblue" }} size={42} round />
            </EmailButton>

            <IconWrapper iconSize={iconSize}>
                <LinkIcon
                    size={32}
                    onClick={() => {
                        window.prompt("Copy to clipboard: Ctrl+C, Enter", final_url);
                    }}
                />
            </IconWrapper>
        </div>
    );
};

export default ShareButtons;
