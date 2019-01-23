import React from 'react';
import { Col, Image } from 'react-bootstrap';

import photo from '../../../img/profile-photo.JPG'

const ContactPhoto = props => (

    <Col xs={2} sm={2} className="footer-wrapper">
        <Image src={photo} circle className="profile-pic" />
    </Col>
)

export default ContactPhoto;