import React from 'react';
import * as boxStyles from './resumeContainer.module.css';

const ResumeBox = (props) => (
        <div id="resume" className={boxStyles.container}>
            <h1 className={boxStyles.resumeTitle}>My Resume</h1>
            <iframe className={boxStyles.resume} src="https://drive.google.com/file/d/1WrU0kOpp3CPX5jRL0HbFhGApAMuq14cV/preview"  allow="autoplay"></iframe>
        </div>
)

export default ResumeBox;



