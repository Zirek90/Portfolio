import React, {Component} from 'react';
import {Parallax} from 'react-parallax';


import MenuList from "./components/MenuList";
import Header from "./components/Header";
import Skills from "./components/Skills";

import backgroundImage from './img/background-header.png';
import headerBackground from './img/headerBackground.JPG';
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import FormComponent from './components/Form';



class App extends Component {
    
    render() {
        return (
            <div>
                <Parallax
                    blur={{min: -5, max: 5}}
                    bgImage={headerBackground}
                    bgImageAlt="the Background"
                    strength={200}>
                    <MenuList/>
                    <Header/>
                </Parallax>

                <Skills/>
                <Parallax
                    blur={{min: -15, max: 15}}
                    bgImage={backgroundImage}
                    bgImageAlt="the Code"
                    strength={200}>

                    <div style={{height: '400px'}}/>
                </Parallax>
                <Projects/>
                <FormComponent />
                <div className="lower-part">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
