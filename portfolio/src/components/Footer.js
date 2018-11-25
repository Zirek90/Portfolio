import React, {Component} from 'react';
import {Grid, Row } from 'react-bootstrap';

import FooterPhoto from "./subcomponents/FooterPart/FooterPhoto";
import FooterAboutMe from "./subcomponents/FooterPart/FooterAboutMe";
import FooterSocialMedia from "./subcomponents/FooterPart/FooterSocialMedia";
import FooterCopyright from "./subcomponents/FooterPart/FooterCopyright";

class Footer extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid footer">
                    <FooterPhoto/>
                    <FooterAboutMe/>
                    <FooterSocialMedia/>
                </Row>
                <FooterCopyright/>
            </Grid>
        );
    }
}

export default Footer;