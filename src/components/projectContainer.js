import React from 'react';
import ProjectCard from './projectCard';
import boxStyles from './projectContainer.module.css';

const ProjectBox = (props) => (
    <div className={boxStyles.projectBox}>
        <ProjectCard 
        name="InternZip"
        bio="Hackathon project that was awarded best domain in CEWIT 2021"
        isLive={true}
        />
    </div>
)

export default ProjectBox;