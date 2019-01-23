import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const MenuElements = props => (
    <nav className="menu-navigation">
        <div className="menu-toggle-btn" onClick={props.toggleMobile}>&#9776;</div>
        <div className="menu-logo" onClick={props.changeFlag}>
            <img 
                src={props.flag} 
                alt="Change Language"
                onClick={props.switchLanguage}/>
        </div>
        <div className="menu-space"></div>
        <div className="menu-navigation-items">
            <ul>

                {props.menuContent.map((e, i) =>
                    <li key={i}>
                        <Link to={e.link} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>{e.title}</Link>
                    </li>
                )}
            </ul>
        </div>
    </nav>
)

export default MenuElements;