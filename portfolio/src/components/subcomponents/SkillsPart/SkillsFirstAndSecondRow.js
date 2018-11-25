import React, {Component} from 'react';
import { Col, Image} from 'react-bootstrap';



class SkillsFirstAndSecondRow extends Component {
    render() {
        return (
                <Col xs={6} sm={4} className="skills-wrapper">
                    <Image src={this.props.photo} rounded responsive className="skills-pic"/>
                </Col>
        );
    }
}

export default SkillsFirstAndSecondRow;