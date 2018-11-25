import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';


class MenuElements extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect inverse>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass="span">
                            <Link to="/pathLink#topPart"
                                  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                                Home
                            </Link>
                        </NavItem>
                        <NavItem eventKey={2} componentClass="span">
                            <Link to="/pathLink#listOfSkills"
                                  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                                Technologies
                            </Link>
                        </NavItem>
                        <NavItem eventKey={3} componentClass="span">
                            <Link to="/pathLink#listOfProjects"
                                  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                            Projects
                            </Link>
                        </NavItem>
                        <NavItem eventKey={3} componentClass="span">
                            <Link to="/pathLink#theForm"
                                  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                            Contact
                            </Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MenuElements;