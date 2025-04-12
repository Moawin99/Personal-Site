import React from 'react';
import * as footerStyles from './footer.module.css';
import github from '../icons/githubIcon.png';
import insta from '../icons/instaIcon.png';
import spotify from '../icons/spotifyIcon.png';
import twitter from '../icons/twitterIcon.png';
import linkedin from '../icons/linkedinIcon.png';
import email from '../icons/emailIcon.png';

const Footer = (props) => (
    <footer className={footerStyles.footerContainer}>
        <ul className={footerStyles.iconList}>
            <li>
                <a href="https://www.instagram.com/markmoawad9/"><img className={footerStyles.icons} src={insta} /></a>
            </li>
            <li>
                <a href="https://github.com/Moawin99"><img className={footerStyles.icons} src={github} /></a>
            </li>
            <li>
                <a href="https://twitter.com/Mark_Moawad"><img className={footerStyles.icons} src={twitter} /></a>
            </li>
            <li>
                <a href="https://open.spotify.com/user/swagmario99?si=lIvk6Z6xQAWWhids0cNJTA"><img className={footerStyles.icons} src={spotify} /></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/mark-moawad-2031a81a3/"><img className={footerStyles.icons} src={linkedin} /></a> 
            </li>
            <li>
                <a href="mailto: msmoawad99@gmail.com"><img className={footerStyles.icons} src={email} /></a>
            </li>
        </ul>
    </footer>
)

export default Footer;