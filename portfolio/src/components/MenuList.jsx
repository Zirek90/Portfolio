import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MenuElements from './subcomponents/MenuPart/MenuElements'
import MobileMenuElements from './subcomponents/MenuPart/MobileMenuElements';
import Backdrop from './subcomponents/MenuPart/BackFromMenu';

class MenuList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileOpen: false
        }
    }

    toggleMobile = () => {
        this.setState(
            (prevState) => {
                return { mobileOpen: !prevState.mobileOpen }
            }
        )
    }

    backdropHandler = () => {
        this.setState(
            (prevState) => {
                return { mobileOpen: false }
            }
        )
    }

    render() {
        let backdrop;

        if (this.state.mobileOpen) {
            backdrop = <Backdrop backdropHandler={this.backdropHandler}/>
        }

    
        return (
            <Router>
                <div className="main-menu">
                    <MenuElements toggleMobile = {this.toggleMobile}/>
                    <MobileMenuElements show={this.state.mobileOpen}/>
                    {backdrop}
                </div>
            </Router>
        );
    }
}

export default MenuList;