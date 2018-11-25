import React, {Component} from 'react';
import {Grid, Row, PageHeader} from 'react-bootstrap';
import WOW from 'wowjs';


import SkillsFirstAndSecondRow from "./subcomponents/SkillsPart/SkillsFirstAndSecondRow";
import SkillsNextRows from "./subcomponents/SkillsPart/SkillsNextRows";


import photoHtml from '../img/skills/html.png';
import photoCss from '../img/skills/css.png';
import photoJs from '../img/skills/js.png';
import photoJQuery from '../img/skills/jquery.png';
import photoReact from '../img/skills/react.png';
import photoEs6 from '../img/skills/es6.png';
import photoSass from '../img/skills/sass.png';
import photoBootstrap from '../img/skills/bootstrap.png';
import photoGulp from '../img/skills/gulp.png';
import photoWebpack from '../img/skills/webpack.png';
import photoGimp from '../img/skills/gimp.png';
import photoVue from '../img/skills/vue.png';
import photoAngular from '../img/skills/angular.png';

const firstAndSecondRow = [
    {
        photo: photoHtml,
    },
    {
        photo: photoCss,
    },
    {
        photo: photoJs,
    },
    {
        photo: photoJQuery,
    },
    {
        photo: photoReact,
    },
    {
        photo: photoAngular,
    }
];

const nextRows = [
    {
        photo: photoEs6,
    },
    {
        photo:photoVue,
    },
    {
        photo: photoSass,
    },
    {
        photo: photoBootstrap,
    },
    {
        photo: photoGulp,
    },
    {
        photo: photoWebpack,
    },
    {
        photo: photoGimp,

    }
];

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