import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react'

class LoginForm extends Component{
    render() {
        return (
        <Form>
            <h1>Register</h1>
            <Form.Field>
            <label>Usuario</label>
            <input placeholder='jhon' />
            </Form.Field>
            <Form.Field>
            <label>Contraseña</label>
            <input placeholder='*****' />
            </Form.Field>
            <Form.Field>
            <label>Repetir Contraseña</label>
            <input placeholder='*****' />
            </Form.Field>
            <Button type='submit'>Registrarse</Button>
        </Form>
            
        )
    }
}

export default LoginForm;