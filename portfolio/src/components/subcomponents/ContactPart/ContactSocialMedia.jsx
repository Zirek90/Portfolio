import React from 'react';
import { Col, Image } from 'react-bootstrap';

import gitHub from '../../../img/social-media/github-logo.png'
import linkedin from '../../../img/social-media/linkedin-logo.png'
import email from '../../../img/social-media/email.png'


const ContactSocialMedia = props => (

    <Col xs={10} sm={5} className="footer-wrapper footer-social-media">
        <div>
            <Image src={gitHub} circle className="social-media-icon" />
            <span>{props.content.socialMedia.visit} <a href="https://github.com/Zirek90">GitHub</a></span>
        </div>
        <div>
            <Image src={linkedin} circle className="social-media-icon" />
            <span>{props.content.socialMedia.visit} <a
                href="https://www.linkedin.com/in/mateusz-grzymowicz-0b117b166/">Linkedin</a></span>
        </div>
        <div>
            <Image src={email} circle className="social-media-icon" />
            <span>{props.content.socialMedia.contact} <a href="mailto:mateusz.grzymowicz@gmail.com">mateusz.grzymowicz@gmail.com</a></span>
        </div>
    </Col>
)
export default ContactSocialMedia;