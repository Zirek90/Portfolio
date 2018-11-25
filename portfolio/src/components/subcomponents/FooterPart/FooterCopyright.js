import React, {Component} from 'react';
import { Row, Col} from 'react-bootstrap';


class FooterCopyright extends Component {
    render() {
        return (
            <Row className="show-grid footer footer-copyright">
                <Col xs={12} sm={12} className="footer-wrapper">
                    <span>&copy; 2018 Mateusz Grzymowicz All Rights Reserved.</span>
                </Col>
            </Row>
        );
    }
}

export default FooterCopyright;

