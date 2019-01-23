import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MenuElements from './subcomponents/MenuPart/MenuElements'
import MobileMenuElements from './subcomponents/MenuPart/MobileMenuElements';
import Backdrop from './subcomponents/MenuPart/BackFromMenu';
// import { dispatch } from 'rxjs/internal/observable/pairs';
import { actions } from '../actions/action';

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
        const content = this.props.content;
        let switchLanguage = this.props.switchLanguage;

        if (this.state.language === 'en') {
            photo = enFlag;
        } else {
            photo = plFlag;
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
                                content={content.page.menu} 
                                flag={photo}/>
                            <MobileMenuElements show={this.state.mobileOpen} />
                            {backdrop}
                        </div>
                    </Router>
                );
        } else {
            return null;
        }
    }
}

// export default MenuList;

export default ReactRedux.connect(
    (state) => ({ content: state.content }),
    (dispatch) => ({ switchLanguage: (lang) => dispatch(actions.switchLanguage(lang)) })
)(MenuList);