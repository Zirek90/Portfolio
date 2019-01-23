import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MenuElements from './subcomponents/MenuPart/MenuElements'
import MobileMenuElements from './subcomponents/MenuPart/MobileMenuElements';
import Backdrop from './subcomponents/MenuPart/BackFromMenu';
import { actions } from '../actions/action';

import menuData from '../../src/database/databaseMenu';
import plFlag from '../img/plFlag.png'
import enFlag from '../img/enFlag.png'

let ReactRedux = require('react-redux');


class MenuList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileOpen: false,
            language: 'en'
        }
        this.changeFlag = this.changeFlag.bind(this)
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

    changeFlag() {
        if (this.state.language === 'en') {
            this.setState({
                language: 'pl'
            })
            
        } else {
            this.setState({
                language: 'en'
            })
        } 
               
    }

    render() {
        let backdrop;
        let photo;
        let menuContent;
        const content = this.props.content;
        let switchLanguage = this.props.switchLanguage;

        if (this.state.language === 'en') {
            photo = enFlag;
            menuContent = menuData.pl
        } else {
            photo = plFlag;
            menuContent = menuData.en
        }

        if (this.state.mobileOpen) {
            backdrop = <Backdrop backdropHandler={this.backdropHandler} />
        }

        if (content) {
                return (
                    <Router>
                        <div className="main-menu">
                            <MenuElements toggleMobile={this.toggleMobile}
                                switchLanguage={switchLanguage.bind(this, `${this.state.language}`)}
                                changeFlag={this.changeFlag}
                                content={content.page}
                                menuContent={menuContent} 
                                flag={photo}/>
                            <MobileMenuElements 
                                show={this.state.mobileOpen}
                                menuContent={menuContent}/>
                            {backdrop}
                        </div>
                    </Router>
                );
        } else {
            return null;
        }
    }
}

export default ReactRedux.connect(
    (state) => ({ content: state.content }),
    (dispatch) => ({ switchLanguage: (lang) => dispatch(actions.switchLanguage(lang)) })
)(MenuList);