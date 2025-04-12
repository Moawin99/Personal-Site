import React from 'react';
import * as introDiv from './introDivs.module.css';
import mePic from '../images/BedroomPic.jpg';
import ColorBox from './boxContainer';
import * as boxStyles from './boxContainer.module.css';

const IntroPic = () => (
    <div className={introDiv.introDiv}>
         <ColorBox class={boxStyles.colorBox1} />
         <ColorBox class={boxStyles.colorBox2} />
         <ColorBox class={boxStyles.colorBox3} />
         <ColorBox class ={boxStyles.colorBox4} />
        <img className={introDiv.photo} src={mePic} />
    </div>
)

export default IntroPic;