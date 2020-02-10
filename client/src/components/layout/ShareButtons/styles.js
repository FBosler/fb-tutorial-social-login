import styled from "styled-components";

import { AiOutlineLink } from "react-icons/ai";

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    EmailShareButton
} from "react-share";

const margins = `
    margin-top: 10px,
    margin-tottom: 10px
`;

export const FacebookButton = styled(FacebookShareButton)`
    ${margins}
`;
export const TwitterButton = styled(TwitterShareButton)`
    ${margins}
`;
export const LinkedinButton = styled(LinkedinShareButton)`
    ${margins}
`;
export const WhatsappButton = styled(WhatsappShareButton)`
    ${margins}
`;
export const PinterestButton = styled(PinterestShareButton)`
    ${margins}
`;
export const RedditButton = styled(RedditShareButton)`
    ${margins}
`;
export const EmailButton = styled(EmailShareButton)`
    ${margins}
`;

export const IconWrapper = styled("div")`
    width: ${props => props.iconSize}px;
    height: ${props => props.iconSize}px;
    vertical-align: middle;
    border-radius: 50%;
    border-color: grey;
    background-color: grey;
    border-style: solid;
    border-width: 0px;
    color: white;
    display: flex;
`;

export const LinkIcon = styled(AiOutlineLink)`
    margin: auto;
    width: 28px;
    height: 28px;
`;
