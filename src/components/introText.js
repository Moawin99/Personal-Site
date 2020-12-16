import React from 'react';
import introDivs from './introDivs.module.css';

const IntroText = () => (
    <div className={introDivs.introDiv} className={introDivs.introText}>
        <h1 className={introDivs.title}>
            Hi! I'm Mark.
        </h1>
        <p className={introDivs.bio}>
            I'm a computer science student in my third year at Stony Brook University.
            I have a passion for programming and music.
        </p>
    </div>
)

export default IntroText;