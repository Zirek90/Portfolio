import React, {Component} from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import WOW from 'wowjs';

import AboutMe from "./subcomponents/HeaderPart/AboutMe";

import { actions } from '../actions/action';
let ReactRedux = require('react-redux');



class Header extends Component {

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();

    }
    render() {
        const content = this.props.content.page;
        
        return (
            <Grid id="topPart" className="wow fadeIn" data-wow-duration="3s">
                <Row className="show-grid text-center header">
                    <Col xs={12} sm={10} className="person-wrapper">
                        <AboutMe
                            content={content.home}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default ReactRedux.connect(
    (state) => ({ content: state.content }),
    (dispatch) => ({ switchLanguage: (lang) => dispatch(actions.switchLanguage(lang)) })
)(Header);