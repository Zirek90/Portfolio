import React, {Component} from 'react';
import {Grid, PageHeader} from 'react-bootstrap';


import NineProjectPhoto from '../img/projects/GameMasterHelper.png';
import eighthProjectPhoto from '../img/projects/CzarnaWolga.png';
import seventhProjectPhoto from '../img/projects/Inletta.png';
import sixthProjectPhoto from '../img/projects/FunnyWebsite.png';
import fifthProjectPhoto from '../img/projects/MaxDron.png';
import forthProjectPhoto from '../img/projects/Portfolio.png';
import thirdProjectPhoto from '../img/projects/WeatherApp.png';
import secondProjectPhoto from '../img/projects/MovieLibrary.png';
import firstProjectPhoto from '../img/projects/AdventureGame.png';

import ListOfProjects from "./subcomponents/ProjectPart/ListOfProjects";


const projects = [
    {
        photo: NineProjectPhoto,
        text:"Game Master Helper",
        website: "https://game-master-helper.herokuapp.com/",
        technologies: "HTML/CSS/Sass/JavaScript/Angular/Firebase"
    },
    {
        photo: eighthProjectPhoto,
        text:"Czarna Wołga 'Angelina'",
        website: "https://czarnawolga78.pl/",
        technologies: "HTML/CSS/Sass/JavaScript/jQuery/Gulp"
    },
    {
        photo: seventhProjectPhoto,
        text:"Inletta",
        website: "http://inletta.com/",
        technologies: "HTML/CSS/Sass/React/Redux/Gulp"
    },
    {
        photo: sixthProjectPhoto,
        text:"Funny Website",
        website: "https://funny-story-website.herokuapp.com/",
        technologies: "HTML/CSS/Vue/Webpack/Firebase"
    },
    {
        photo: fifthProjectPhoto,
        text:"MaxDron",
        website: "http://www.maxdron.com.pl/",
        technologies: "HTML/CSS/SCSS/React/gulp/Bootstrap 4"
    },
    {
        photo: forthProjectPhoto,
        text:"Portfolio",
        website: "https://github.com/Zirek90/myProject",
        technologies: "HTML/CSS/SCSS/React/gulp/Bootstrap 4"
    },
    {
        photo: thirdProjectPhoto,
        text:"Weather Application",
        website: "https://zirek90.github.io/Weather-app/",
        technologies: "HTML/CSS/SCSS/React/gulp/Bootstrap 4"
    },
    {
        photo: secondProjectPhoto,
        text:"Movie Library",
        website: "https://github.com/Zirek90/Movies-library",
        technologies: "HTML/CSS/SCSS/React/Axios/Webpack"
    },
    {
        photo: firstProjectPhoto,
        text:"Adventure Game",
        website: "https://github.com/Zirek90/SimpleGame",
        technologies: "HTML/CSS/SCSS/JavaScript/jQuery/Gulp"
    }
];



class Projects extends Component {
    render() {
        return (
            <Grid className="text-center" id="listOfProjects">
                <PageHeader className="projects-header">My Projects</PageHeader>
                {projects.map((e,i) =>
                    <ListOfProjects
                    photo={e.photo}
                    text={e.text}
                    website={e.website}
                    technologies={e.technologies}
                    key={i}
                    />
                )}
            </Grid>
        );
    }
}

export default Projects;
