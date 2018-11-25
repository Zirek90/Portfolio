import React, {Component} from 'react';

import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class FormComponent extends Component {
    constructor(props) {
        super(props)
        this.state= {
            name: '',
            email:'',
            message:''
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
        
        await fetch('/api/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name,email,message}),
        }).then(
        this.setState({
            name: '',
            email: '',
            message: '',
        }))
    }

    render() {
        return (
            <div style={{width: '1024px', margin: 'auto'}}>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <ControlLabel>Name:</ControlLabel>
                    <FormControl 
                        type='text' 
                        name='name'
                        value={this.state.name} 
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Email:</ControlLabel>
                    <FormControl 
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Your message:</ControlLabel>
                    <FormControl 
                        componentClass='textarea' 
                        name='message'
                        value={this.state.message}  
                        onChange={this.handleChange} />
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
            </div>
        );
    }
}

export default FormComponent;