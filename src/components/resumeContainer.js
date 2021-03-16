import React from 'react';
import boxStyles from './resumeContainer.module.css';

const ResumeBox = (props) => (
        <div className={boxStyles.container}>
            <h1>My Resume</h1>
            <iframe src="https://drive.google.com/file/d/16UirjUjx0iPaKGs9F4k2jR2N3Ntq4Hfn/preview" width="1000px" height="1000px"></iframe>
        </div>
)

export default ResumeBox;



