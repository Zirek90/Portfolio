import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import WOW from 'wowjs';




class ListOfProjects extends Component {
    constructor(props) {
        super (props)
        this.state = {
            display: "none",
        }
    }

    componentDidMount() {
        // new WOW.WOW().init();
        new WOW.WOW({
            live: false
        }).init();
    }

    showDescription(){
        this.setState({display: "flex"})
    }
    hideDescription(){
        this.setState({display: "none"})
    }

    render() {
        return (
            <Row className="show-grid text-center projects-list wow zoomInLeft" data-wow-duration="2s">
                <Col xs={1} sm={1} className="projects"
                     onMouseOver={this.showDescription.bind(this)}
                     onMouseOut={this.hideDescription.bind(this)}>
                    <h1>{this.props.text}</h1>
                    <a href={this.props.website}>
                        <Image src={this.props.photo} alt="project" thumbnail responsive/>
                    </a>
                    <span className="description-project" style={{display: this.state.display}}>{this.props.technologies}</span>
                </Col>
            </Row>
        );
    }
}

export default ListOfProjects;