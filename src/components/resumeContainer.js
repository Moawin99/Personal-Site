import React from 'react';
import boxStyles from './resumeContainer.module.css';

const ResumeBox = (props) => (
        <div id="resume" className={boxStyles.container}>
            <h1 className={boxStyles.resumeTitle}>My Resume</h1>
            <iframe className={boxStyles.resume} src="https://drive.google.com/file/d/1CkqATU7-_RNI1e4Kk8gutlcLEiQHE8g1/preview" allow="autoplay"></iframe>
        </div>
)

export default ResumeBox;



