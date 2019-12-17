import React, {Component} from 'react';
import { Button, Input, Checkbox, Card } from 'semantic-ui-react'
import taskService from './services/taskService';

class TaskCard extends Component{
    
    state = {
        toggleEdit: false,
        checked: false,
        task:{
            _id:'',
            name:'',
            description:'',
            completed: false,
            user:''
        }
    }


    componentDidMount(){
        this.setState({
            task: this.props.task
        })
        this.setState({
            checked: this.props.task.completed
        })
    }

    rerender = () =>{
        this.props.reRender(true);
    }

    deleteTask = async () => {
        let res = await taskService.delete(this.state.task._id);
        if(res.error){
            alert("Ha ocurrido un error");
        }
        this.rerender();
    }

    toggleModify = async () => {
        this.setState({
            toggleEdit: !this.state.toggleEdit
        })
    }

    onChangeDescription = e =>
    {
        const { task } = { ...this.state };
        const currentState = task;
        const {value} = e.target;
        currentState.description = value;
        this.setState({ task: currentState });
    }
    onChangeName = e =>
    {
        const { task } = { ...this.state };
        const currentState = task;
        const { value } = e.target;
        currentState.name = value;
        this.setState({ task: currentState });
    }
    modifyTask = async () => {
        const task = this.state.task;
        let res = await taskService.modify(task._id,task.name,task.description);
        if(res.error){
            alert("Ha ocurrido un error");
        }
        this.setState({
            toggleEdit: !this.state.toggleEdit
        })
        this.rerender();
    }
    modifyCompleted = async () => {
        const task = this.state.task;
        const completed = this.state.checked;
        let res = await taskService.modify(task._id,task.name,task.description,!completed);
        if(res.error){
            alert("Ha ocurrido un error");
        }
        this.rerender();
    }

    toggle = () => {
        this.setState((prevState) => ({ checked: !prevState.checked }))
        this.modifyCompleted();
    }

    render() {
        const task = this.state.task;
        return (    
        <Card>
            <Card.Content>
            <Card.Header>
                {this.state.toggleEdit?
                <Input id="taskName" placeholder={task.name}  onChange={this.onChangeName.bind(this)} />
                :
                <label id="taskName" value={task.name} >{task.name}</label>
                }
            </Card.Header>
            <Card.Description>
                {this.state.toggleEdit?
                <Input id="taskDescription" placeholder={task.description} onChange={this.onChangeDescription.bind(this)}/>
                :
                <label id="taskDescription" value={task.description}>{task.description}</label>
                }
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            {
                this.state.checked ?
                    <Checkbox toggle
                        label='Completado'
                        onChange={this.toggle}
                        checked={this.state.checked}
                    />
                :
                    <Checkbox toggle
                        label='Incompleto'
                        onChange={this.toggle}
                        checked={this.state.checked}
                    />
            }             
            </Card.Content>
            
            {this.state.toggleEdit?
            <Button color='green' icon='save' floated='right' size='small' onClick={this.modifyTask}></Button>
            :
            <Button  icon='pencil' floated='right' size='small' onClick={this.toggleModify}></Button>
            }
            <Button color='red' icon='trash' floated='right' size='small' onClick={this.deleteTask}></Button>
          </Card>
            
        )
    }
}

export default TaskCard;