import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react'

class LoginForm extends Component{
    render() {
        return (
        <Form>
            <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
            
        )
    }
}

export default LoginForm;