import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const MobileMenuElements = props => {

    let mobileClasses = ['mobile-menu'];
    if (props.show) {
        mobileClasses = ['mobile-menu open']
    }

    return (
    <nav className={mobileClasses}>
            <ul>

                {props.menuContent.map((e, i) =>
                    <li key={i}>
                        <Link to={e.link} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>{e.title}</Link>
                    </li>
                )}
            </ul>
    </nav>
)}

export default MobileMenuElements;