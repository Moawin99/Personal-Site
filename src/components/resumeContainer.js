import React from 'react';
import * as boxStyles from './resumeContainer.module.css';

const ResumeBox = (props) => (
        <div id="resume" className={boxStyles.container}>
            <h1 className={boxStyles.resumeTitle}>My Resume</h1>
            <iframe className={boxStyles.resume} src="https://drive.google.com/file/d/1Er61HkyYfVd7_frdMv7ig2t4a32YxD4v/preview" allow="autoplay"></iframe>
        </div>
)

export default ResumeBox;



