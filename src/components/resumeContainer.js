import React from 'react';
import boxStyles from './resumeContainer.module.css';

const ResumeBox = (props) => (
        <div className={boxStyles.container}>
            <h1>My Resume</h1>
            <iframe src="https://drive.google.com/file/d/1Er61HkyYfVd7_frdMv7ig2t4a32YxD4v/preview" width="1000" height="1000"></iframe>
        </div>
)

export default ResumeBox;



