import React, {Component} from 'react';
import {Grid, Row, PageHeader} from 'react-bootstrap';
import WOW from 'wowjs';

import {firstAndSecondRow, nextRows} from '../database/databaseSkills'

import SkillsFirstAndSecondRow from "./subcomponents/SkillsPart/SkillsFirstAndSecondRow";
import SkillsNextRows from "./subcomponents/SkillsPart/SkillsNextRows";

class Skills extends Component {
    componentDidMount() {
        // new WOW.WOW().init();
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {
        return (
            <Grid className="skill-list" id="listOfSkills">
                <PageHeader className="skills-header">Technologies</PageHeader>
                <div className="wow zoomInRight" data-wow-duration="2s">
                    <Row className="show-grid text-center skills">

                        {firstAndSecondRow.map((e, i) =>
                            <SkillsFirstAndSecondRow
                                photo={e.photo}
                                key={i}/>
                        )}
                    </Row>

                    <Row className="show-grid text-center skills next-row">

                        {nextRows.map((e, i) =>
                            <SkillsNextRows
                                photo={e.photo}
                                key={i}/>
                        )}
                    </Row>
                </div>
            </Grid>
        );
    }
}

export default Skills;