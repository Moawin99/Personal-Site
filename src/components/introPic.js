import React from 'react';
import introDiv from './introDivs.module.css';
import mePic from '../images/BedroomPic.jpg';

const IntroPic = () => (
    <div className={introDiv.introDiv}>
        <img src={mePic} />
    </div>
)

export default IntroPic;