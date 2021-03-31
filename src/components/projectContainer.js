import React from 'react';
import ProjectCard from './projectCard';
import boxStyles from './projectContainer.module.css';

const data = [
    {
        "name": "InternZip",
        "github": "https://github.com/Moawin99/CEWIT-Hackathon-2021",
        "bio": "Full stack Hackathon project that acts as a platfrom for interns to find housing for internships. Won best domain at CEWIT 2021",
        "link": "https://curious-setup-306205.df.r.appspot.com/",
        "isLive": true
    },
    {
        "name": "Discord-Bot",
        "github": "https://github.com/Moawin99/discord-bot",
        "bio": "Discord bot written in python. Includes games that can be played in a server, as well as data fetching from multiple api's to display motivational quotes and user info",
        "isLive": false
    },
    {
        "name": "Writtery",
        "github": "https://github.com/Moawin99/Journal",
        "bio": "Full stack Nodejs and React project that serves as a journal that plays music according to your mood. This utilizes the Spotify Api and filters songs according to mood",
        "isLive": false
    },
    {
        "name": "Ghost Kitchen",
        "github": "https://github.com/Moawin99/GhostKitchen",
        "bio": "Full stack application built with Spring boot and React. Template kithcen app, users can order food and owners can register restaurants and create menu items for purchase",
        "isLive": false
    },
    {
        "name": "Prodict",
        "github": "https://github.com/Moawin99/CEWIT-Hackthon-Project",
        "bio": "Machine learning model that predicts Nba mvp. Built in python. Also won CEWIT 2020 best use of google cloud",
        "isLive": false
    },
    {
        "name": "Personal Site",
        "github": "https://github.com/Moawin99/Personal-Site",
        "bio": "The site you're on now! Built in Gatsby js",
        "isLive": false
    }
];


const ProjectBox = (props) => (
    <div id="projectBox" className={boxStyles.projectBox}>
        <h1 className={boxStyles.text}>Projects</h1>
        <div className={boxStyles.gridContainer}>
            {data.map((project) => (
                <ProjectCard
                name={project.name}
                bio={project.bio}
                gitUrl={project.github}
                isLive={project.isLive}
                projectUrl={project.link}
                />
            ))}
        </div>
    </div>
)

export default ProjectBox;