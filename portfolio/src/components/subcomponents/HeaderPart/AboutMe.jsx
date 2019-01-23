import React from 'react';

import download from '../../../img/download.png'

const AboutMe = props => (
    <div>
        <h3>{props.content.header}</h3>
        <p>{props.content.paragraphOne}</p>
        <p>{props.content.paragraphTwo}</p>
        <div>
            <a href="https://www.dropbox.com/s/805acixlm2lo5im/CV%20Mateusz%20Grzymowicz.pdf?dl=1">
                <img src={download} alt="pobierz CV"/>    
            </a>
            </div>
    </div>
)


export default AboutMe;
