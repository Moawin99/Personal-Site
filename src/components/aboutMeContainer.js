import React from 'react';
import * as aboutMeStyles from './aboutMeContainer.module.css';

const AboutMe = (props) => (
	<div id="aboutMe" className={aboutMeStyles.aboutMeBox}>
		<div className={aboutMeStyles.textContainer}>
			<h1 className={aboutMeStyles.aboutMeText}>About Me</h1>
			<p className={aboutMeStyles.text}>
				Hello! I'm Mark Moawad, a senior Computer Science student at{' '}
				<span className={aboutMeStyles.sbu}>Stony Brook University</span>. I have a passion for learning and
				teaching myself new things! Recently I've enjoyed working on full stack applications as well as building
				a smart mirror! When I'm not working on projects or at school you can usually find me long boarding,
				playing basketball, or out shooting with my camera!
			</p>
		</div>
	</div>
);

export default AboutMe;
