import React from 'react';
import introContainSyles from './introContainer.module.css';
import IntroPic from './introPic';
import IntroText from './introText';

const IntroContainer = () => (
    <div className={introContainSyles.introContain}>
        <IntroText />
        <IntroPic />
    </div>
)

export default IntroContainer;