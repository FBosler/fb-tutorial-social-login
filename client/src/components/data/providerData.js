import AmazonIcon from "./icons/amazon.png";
import FacebookIcon from "./icons/facebook.png";
import GithubIcon from "./icons/github.png";
import GoogleIcon from "./icons/google.png";
import SpotifyIcon from "./icons/spotify.png";
import TwitchIcon from "./icons/twitch.png";
import TwitterIcon from "./icons/twitter.png";

const providerData = [
    {
        img: AmazonIcon,
        name: "amazon",
        href: `${process.env.REACT_APP_BACKEND_URI}/auth/amazon`,
        alt: "amazon-icon",
        color: "#F9AE31",
        txt: "Login with Amazon"
    },
    {
        img: FacebookIcon,
        name: "facebook",
        href: `${process.env.REACT_APP_BACKEND_URI}/auth/facebook`,
        alt: "facebook-icon",
        color: "#3B5899",
        txt: "Login with Facebook"
    },
    {
        img: GithubIcon,
        name: "github",
        href: `${process.env.REACT_APP_BACKEND_URI}/auth/github`,
        alt: "github-icon",
        color: "#333333",
        txt: "Login with Github"
    },
    {
        img: GoogleIcon,
        name: "google",
        href: `${process.env.REACT_APP_BACKEND_URI}/auth/google`,
        alt: "google-icon",
        color: "#CB4024",
        txt: "Login with Google"
    },
    {
        img: SpotifyIcon,
        name: "spotify",
        href: `${process.env.REACT_APP_BACKEND_URI}/auth/spotify`,
        alt: "spotify-icon",
        color: "#1EB954",
        txt: "Login with Spotify"
    },
    {
        img: TwitchIcon,
        name: "twitch",
        href: `${process.env.REACT_APP_BACKEND_URI}/auth/twitch`,
        alt: "twitch-icon",
        color: "#5F3BAD",
        txt: "Login with Twitch"
    },
    {
        img: TwitterIcon,
        name: "twitter",
        href: `${process.env.REACT_APP_BACKEND_URI}/auth/twitter`,
        alt: "twitter-icon",
        color: "#00acee",
        txt: "Login with Twitter"
    }
];

export default providerData;
