import React, {Component} from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import AutenticationService from '../services/autenticationService';

class RegisterForm extends Component{
    state = {
        user: '',
        password: '',
        confirm: '',
        loading: false,
        errors: {}
    }

    validate = (user, password, confirm) => {
        const errors = {};
        if(!user) errors.user = "¡No puede estar vacio!";
        if(!password) errors.password = "¡No puede estar vacio!";
        if(!confirm){
            errors.confirm = "Repite tu constraseña";
        }
        else {
            if(password != confirm) errors.equalPassword = "Constraseñas diferentes";
        }
        return errors;
    };

    onChangeUser = e =>
        this.setState({ 
            user:  e.target.value
        });

    onChangePassword = e =>
        this.setState({ 
            password:  e.target.value
        });
    
    onChangeConfirm = e =>
        this.setState({ 
            confirm:  e.target.value
        });

    submit = async () =>{
        let res = await AutenticationService.register(this.state.user,this.state.password);
        if(!res.error){
            alert("Registro Satisfactorio")
            this.setState({ loading: false });
        }
        else{
            localStorage.clear();
            alert(res.message);
            this.setState({ loading: false });
        }
    }

    onSubmit = () => {
        const errors = this.validate(this.state.user, this.state.password, this.state.confirm);
        this.setState({ errors });
        if (Object.keys(errors).length === 0){
            this.setState({ loading: true });
            this.submit();
        }
    };

    render() {
        const { user, password,confirm, errors, loading } = this.state;
        return (
        <div>
            <div>
                <div id="loader" className={this.state.loading ? 'ui active inverted dimmer': '"ui disabled inverted dimmer"'}>
                    <div class="ui text loader">Cargando...</div>
                </div>
            </div>
            <Form onSubmit={this.onSubmit} autocomplete="off">
                {global.errors && 
                <Message negative>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.global}</p>
                </Message>}
                <h1>Registrate</h1>
                <Form.Field>
                    <label>Usuario</label>
                    <input placeholder='Usuario' 
                        value={user}
                        onChange={this.onChangeUser}
                        autocomplete="off"
                    />
                {errors.user && <InlineError text={errors.user}/>}
                </Form.Field>
                <Form.Field>
                    <label>Constraseña</label>
                    <input placeholder='*****' 
                        value={password}
                        onChange={this.onChangePassword}
                        type="password"
                        autocomplete="off"
                    />
                {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>
                <Form.Field>
                    <label>Repetir Constraseña</label>
                    <input placeholder='*****' 
                        value={confirm}
                        onChange={this.onChangeConfirm}
                        type="password"
                        autocomplete="off"
                    />
                {errors.confirm && <InlineError text={errors.confirm}/>}
                {errors.equalPassword && <InlineError text={errors.equalPassword}/>}          
                </Form.Field>
                <Button type='submit'>Registrarse</Button>
            </Form> 
        </div>                
        )
    }
}

export default RegisterForm;