import React from 'react';
import { Col, Image } from 'react-bootstrap';



const SkillsFirstAndSecondRow = props => (

    <Col xs={6} sm={4} className="skills-wrapper">
        <Image src={props.photo} rounded responsive className="skills-pic" />
    </Col>
)

export default SkillsFirstAndSecondRow;