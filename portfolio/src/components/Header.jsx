import React, {Component} from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import WOW from 'wowjs';
import {connect} from 'react-redux';

import AboutMe from "./subcomponents/HeaderPart/AboutMe";
import download from '../img/download.png'

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
                            content={content.home}
                            download={download}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.content
    }
}
export default connect(mapStateToProps)(Header);