import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import menuData from '../../../database/databaseMenu';



const MenuElements = props => (
    <nav className="menu-navigation">
        <div className="menu-toggle-btn" onClick={props.toggleMobile}>&#9776;</div>
        <div className="menu-logo" onClick={props.changeFlag}>
            <img src={props.flag} alt="Change Language"/>
            {/* <div onClick={props.switchLanguage}>{props.content.home}</div> */}
        </div>
        <div className="menu-space"></div>
        <div className="menu-navigation-items">
            <ul>

                {menuData.map((e, i) =>
                    <li key={i}>
                        <Link to={e.link} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>{e.title}</Link>
                    </li>
                )}
            </ul>
        </div>
    </nav>
)

export default MenuElements;