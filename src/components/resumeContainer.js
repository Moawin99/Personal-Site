import React from 'react';
import boxStyles from './resumeContainer.module.css';

const ResumeBox = (props) => (
        <div id="resume" className={boxStyles.container}>
            <h1 className={boxStyles.resumeTitle}>My Resume</h1>
            <iframe className={boxStyles.resume} src="https://drive.google.com/file/d/1QTzYJ1Qq-_kR4Nd88GCZxGIaonyqo-LP/preview"></iframe>
        </div>
)

export default ResumeBox;



