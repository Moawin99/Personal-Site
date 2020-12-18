import React from 'react';
import introDiv from './introDivs.module.css';
import mePic from '../images/BedroomPic.jpg';
import ColorBox from './boxContainer';

const IntroPic = () => (
    <div className={introDiv.introDiv}>
         <ColorBox />
        <img className={introDiv.photo} src={mePic} />
    </div>
)

export default IntroPic;