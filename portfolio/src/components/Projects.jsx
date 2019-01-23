import React, {Component} from 'react';
import {Grid, PageHeader} from 'react-bootstrap';

import projects from '../database/databaseProjects';
import ListOfProjects from "./subcomponents/ProjectPart/ListOfProjects";

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
