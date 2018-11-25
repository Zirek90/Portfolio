import React, {Component} from 'react';
import {Col} from 'react-bootstrap';


class FooterAboutMe extends Component {
    render() {
        return (
            <Col xs={6} sm={4} className="footer-wrapper">
                <h3>Junior Front-end Developer</h3>
                <p className="footer-aboutMe">Mateusz Grzymowicz, Junior front-end developer graduate of bootcamp „Front-end Developer:React” by
                    CodersLab is willing to be employed soon. I'm a very enthusiastic person, full of passion and
                    desires to obtain knowledge and necessary experience as a front-end developer especially with
                    React library.
                </p>
            </Col>
        );
    }
}

export default FooterAboutMe;