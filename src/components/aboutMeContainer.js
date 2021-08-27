import React from 'react';
import aboutMeStyles from './aboutMeContainer.module.css';


const AboutMe = (props) => ( 
    <div id="aboutMe" className={aboutMeStyles.aboutMeBox}>
        <div className={aboutMeStyles.textContainer}>
            <h1 className={aboutMeStyles.aboutMeText}>About Me</h1>
            <p className={aboutMeStyles.text}>Hello! I'm Mark, a senoir Computer Science student at <span className={aboutMeStyles.sbu}>Stony Brook University</span>. 
            I have a passion for teaching myself new things and all things programming!
           In my free time I enjoy photography, reading, longbaording, and playing basketball. Anytime I encounter a new intrest it I get addicted to learning more about it.
           I also love listening to music and even collect vinyl records!</p>
        </div>
    </div>
)

export default AboutMe;