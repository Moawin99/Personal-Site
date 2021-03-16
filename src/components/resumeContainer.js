import React from 'react';
import boxStyles from './resumeContainer.module.css';

const ResumeBox = (props) => (
        <div className={boxStyles.container}>
            <h1>My Resume</h1>
            <iframe src="https://drive.google.com/file/d/1St3nsPKlirliaZqyqszf3WfMpmvKXFif/preview" width="800px" height="820px"></iframe>
        </div>
)

export default ResumeBox;



