import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import ContactPhoto from "./subcomponents/ContactPart/ContactPhoto";
import ContactAboutMe from "./subcomponents/ContactPart/ContactAboutMe";
import ContactSocialMedia from "./subcomponents/ContactPart/ContactSocialMedia";
import ContactCopyright from "./subcomponents/ContactPart/ContactCopyright";
import { actions } from '../actions/action';
let ReactRedux = require('react-redux');

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

export default ReactRedux.connect(
    (state) => ({ content: state.content }),
    (dispatch) => ({ switchLanguage: (lang) => dispatch(actions.switchLanguage(lang)) })
)(Contact)