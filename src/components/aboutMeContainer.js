import React from 'react';
import aboutMeStyles from './aboutMeContainer.module.css';


const AboutMe = (props) => ( 
    <div className={aboutMeStyles.aboutMeBox}>
        <div className={aboutMeStyles.textContainer}>
            <h1 className={aboutMeStyles.aboutMeText}>About Me</h1>
            <h1>Hello! I'm Mark, a thrid year Computer Science student at <span className={aboutMeStyles.sbu}>Stony Brook University</span>. 
            I have a passion for teaching myself new things and and all things programming!
           I also enjoy listening to music, as well as collecting records, longboarding and playing basketball. </h1>
        </div>
    </div>
)

export default AboutMe;