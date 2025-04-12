import React from 'react';
import * as cardStyles from './projectCard.module.css';

const ProjectCard = (props) => (
        <div className={cardStyles.cardContainer}>
            <h2 className={cardStyles.title}>{props.name}</h2>
            <div className={cardStyles.bioContainer}>
                 <p>{props.bio}</p>
            </div>
            <hr className={cardStyles.line} />
            <div className={cardStyles.buttonContainer}>
                <button className={cardStyles.button}><a href={props.gitUrl}>Github Url</a></button>
                {props.isLive ? <button className={cardStyles.button}><a href={props.projectUrl}>Project Url</a></button>: null}
            </div>
        </div>
)

export default ProjectCard