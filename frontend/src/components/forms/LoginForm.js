import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react'

class LoginForm extends Component{
    componentDidMount(){
        
    }
    render() {
        return (
        <Form>
            <h1>Login</h1>
            <Form.Field>
            <label>Usuario</label>
            <input placeholder='jhon' />
            </Form.Field>
            <Form.Field>
            <label>Constraseña</label>
            <input placeholder='*****' />
            </Form.Field>
            <Button type='submit'>Ingresar</Button>
        </Form>
            
        )
    }
}

export default LoginForm;