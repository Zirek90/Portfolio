import React from 'react';
import { Grid, PageHeader } from 'react-bootstrap';
import {connect} from 'react-redux';

import projects from '../database/databaseProjects';
import ListOfProjects from "./subcomponents/ProjectPart/ListOfProjects";


const Projects = props => (
    <Grid className="text-center" id="listOfProjects">
        <PageHeader className="projects-header">{props.content.page.projects.header}</PageHeader>
        {projects.map((e, i) =>
            <ListOfProjects
                photo={e.photo}
                text={e.text}
                website={e.website}
                technologies={e.technologies}
                key={i}
            />
        )}
    </Grid>
)

const mapStateToProps = (state) => {
    return {
        content: state.content
    }
}
export default connect(mapStateToProps)(Projects)