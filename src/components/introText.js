import React from 'react';
import * as introDivs from './introDivs.module.css';

const IntroText = () => (
    <div className={`${introDivs.introDiv} ${introDivs.introText}`}>
        <h1 className={introDivs.title}>
            Hi! I'm Mark.
        </h1>
        <p className={introDivs.bio}>
            A software engineer who is <a className={introDivs.sherzod} href="https://nimatullo.com/">passionate</a> about making cool shit
            and taking vibey photots. not this one though ------{'>'}
        </p>
    </div>
)

export default IntroText;