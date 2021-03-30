import React from 'react';
import boxStyles from './resumeContainer.module.css';

const ResumeBox = (props) => (
        <div id="resume" className={boxStyles.container}>
            <h1 className={boxStyles.resumeTitle}>My Resume</h1>
            <object className={boxStyles.resume} type="application/pdf" data="https://drive.google.com/file/d/1Er61HkyYfVd7_frdMv7ig2t4a32YxD4v/preview" width="1000px" height="1000px" />
        </div>
)

export default ResumeBox;



