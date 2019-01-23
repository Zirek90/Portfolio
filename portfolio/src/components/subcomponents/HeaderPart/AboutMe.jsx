import React from 'react';


const AboutMe = props => (
    <div>
        <h3>{props.content.header}</h3>
        <p>{props.content.paragraphOne}</p>
        <p>{props.content.paragraphTwo}</p>
    </div>
)


export default AboutMe;
