import React, {Component} from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import WOW from 'wowjs';

import AboutMe from "./subcomponents/HeaderPart/AboutMe";




class Header extends Component {

    componentDidMount() {
        // new WOW.WOW().init();
        new WOW.WOW({
            live: false
        }).init();

    }
    render() {
        return (
            <Grid id="topPart" className="wow fadeIn" data-wow-duration="3s">
                <Row className="show-grid text-center header">
                    <Col xs={12} sm={10} className="person-wrapper">
                        <AboutMe/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Header;