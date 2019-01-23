import React from 'react';
import { Col, Image } from 'react-bootstrap';



const SkillsNextRows = props => (

    <Col xs={6} sm={6} className="skills-wrapper">
        <Image src={props.photo} rounded responsive className="skills-pic" />
    </Col>
)

export default SkillsNextRows;