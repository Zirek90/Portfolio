import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class FormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, message } = this.state;
        if (this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {

            await fetch('/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message }),
            }).then(
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                })).then(
                    alert('Form submited')
                )
        } else {
            alert('Please fill all form')
        }
    }


    render() {
        const content = this.props.content.page.form;

        return (
            <div id='theForm'>

                <div className="formContainer">
                    <h1>{content.header}</h1>
                    <div className="formList">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <ControlLabel>{content.name}:</ControlLabel>
                                <FormControl
                                    type='text'
                                    name='name'
                                    value={this.state.name}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{content.email}:</ControlLabel>
                                <FormControl
                                    type='email'
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{content.message}:</ControlLabel>
                                <FormControl
                                    componentClass='textarea'
                                    name='message'
                                    value={this.state.message}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <Button type='submit'>{content.submit}</Button>
                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.content
    }
}
export default connect(mapStateToProps)(FormComponent);