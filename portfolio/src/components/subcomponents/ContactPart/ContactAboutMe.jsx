import React from 'react';
import { Col } from 'react-bootstrap';


const ContactAboutMe = props => (

    <Col xs={6} sm={4} className="footer-wrapper">
        <h3>{props.content.header}</h3>
        <p className="footer-aboutMe">{props.content.aboutMe}</p>
    </Col>
)

export default ContactAboutMe;