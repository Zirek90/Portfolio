import React from 'react';
import { Grid, PageHeader } from 'react-bootstrap';

import projects from '../database/databaseProjects';
import ListOfProjects from "./subcomponents/ProjectPart/ListOfProjects";

import { actions } from '../actions/action';
let ReactRedux = require('react-redux');

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

export default ReactRedux.connect(
    (state) => ({ content: state.content }),
    (dispatch) => ({ switchLanguage: (lang) => dispatch(actions.switchLanguage(lang)) })
)(Projects);
