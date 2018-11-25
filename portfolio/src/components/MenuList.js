import React, {Component} from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import MenuElements from './subcomponents/MenuPart/MenuElements'

class MenuList extends Component {
    render() {
        return (
            <Router>
                <div className="main-menu">
                    <MenuElements/>
                </div>
            </Router>
        );
    }
}

export default MenuList;