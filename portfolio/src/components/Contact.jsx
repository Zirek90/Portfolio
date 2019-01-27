import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import {connect} from 'react-redux';

import ContactPhoto from "./subcomponents/ContactPart/ContactPhoto";
import ContactAboutMe from "./subcomponents/ContactPart/ContactAboutMe";
import ContactSocialMedia from "./subcomponents/ContactPart/ContactSocialMedia";
import ContactCopyright from "./subcomponents/ContactPart/ContactCopyright";

const Contact = props => {
    const content = props.content.page.contact;

    return (
        <Grid>
            <Row className="show-grid footer">
                <ContactPhoto />
                <ContactAboutMe
                    content={content} />
                <ContactSocialMedia
                    content={content} />
            </Row>
            <ContactCopyright />
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        content: state.content
    }
}
export default connect(mapStateToProps)(Contact);