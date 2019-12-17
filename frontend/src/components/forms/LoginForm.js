import React, {Component} from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import AutenticationService from '../services/autenticationService';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component{
    state = {
        user: '',
        password: '',
        loading: false,
        errors: {}
    }


    validate = (user, password) => {
        const errors = {};
        if(!user) errors.user = "¡No puede estar vacio!";
        if(!password) errors.password = "¡No puede estar vacio!";
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

    submit = async () =>{
        let res = await AutenticationService.login(this.state.user,this.state.password);
        if(!res.error){
            localStorage.setItem("user",res.user[0].user)
            this.setState({ loading: false });
            this.props.history.push('/tareas');
        }
        else{
            localStorage.clear();
            alert(res.message);
            this.setState({ loading: false });
        }
    }

    onSubmit = () => {
        const errors = this.validate(this.state.user, this.state.password);
        this.setState({ errors });
        if (Object.keys(errors).length === 0){
            this.setState({ loading: true });
            this.submit();
        }
    };

    render() {
        const { user, password, errors, loading } = this.state;
        return (
        <div>
            <div>
                <div id="loader" className={this.state.loading ? 'ui active inverted dimmer': '"ui disabled inverted dimmer"'}>
                    <div class="ui text loader">Cargando...</div>
                </div>
            </div>
            <Form onSubmit={this.onSubmit}>
                {global.errors && 
                <Message negative>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.global}</p>
                </Message>}
                <h1>Inicia Sesion</h1>
                <Form.Field>
                    <label>Usuario</label>
                    <input placeholder='Usuario' 
                        value={user}
                        onChange={this.onChangeUser}
                    />
                {errors.user && <InlineError text={errors.user}/>}
                </Form.Field>
                <Form.Field>
                    <label>Constraseña</label>
                    <input placeholder='*****' 
                        value={password}
                        onChange={this.onChangePassword}
                        type="password"
                    />
                {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>
                <Button type='submit'>Ingresar</Button>
            </Form> 
        </div>                
        )
    }
}

export default withRouter(LoginForm);