import React from 'react';
import ProjectCard from './projectCard';
import boxStyles from './projectContainer.module.css';

const data = [
    {
        "name": "InternZip",
        "github": "https://github.com/Moawin99/CEWIT-Hackathon-2021",
        "bio": "Full stack Hackathon project that acts as a platfrom for interns to find housing for internships. Won best domain",
        "link": "https://curious-setup-306205.df.r.appspot.com/",
        "isLive": true
    }
];


const ProjectBox = (props) => (
    <div className={boxStyles.projectBox}>
        <h1 className={boxStyles.text}>Projects</h1>
        <div className={boxStyles.gridContainer}>

        </div>
    </div>
)

export default ProjectBox;