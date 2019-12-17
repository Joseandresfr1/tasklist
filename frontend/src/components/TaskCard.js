import React, {Component} from 'react';
import { Button, Input, Checkbox, Card } from 'semantic-ui-react'
import taskService from './services/taskService';

class TaskCard extends Component{
    state = {
        toggleEdit: false,
        task:{
            _id:'',
            name:'',
            description:'',
            completed:"false",
            user:''
        }
    }
    componentDidMount(){
        this.setState({
            task: this.props.task
        })
    }

    rerender = () =>{
        this.props.reRender(true);
    }

    deleteTask = async () => {
        let res = await taskService.delete(this.state.task._id);
        this.rerender();
    }

    toggleModify = async () => {
        this.setState({
            toggleEdit: !this.state.toggleEdit
        })
    }

    modifyTask = async () => {
        const task = this.state.task;
        task.name= document.getElementById("taskName").value;
        task.description= document.getElementById("taskDescription").value;
        task.completed= document.getElementById("taskCompleted").value;
        let res = await taskService.modify(task._id,task.name,task.description);
        this.setState({
            toggleEdit: !this.state.toggleEdit
        })
        this.rerender();
    }

    render() {
        const task = this.state.task;
        return (    
        <Card>
            <Card.Content>
            <Card.Header>
                {this.state.toggleEdit?
                <Input id="taskName" placeholder={task.name} />
                :
                <label id="taskName" value={task.name} >{task.name}</label>
                }
            </Card.Header>
            <Card.Description>
                {this.state.toggleEdit?
                <Input id="taskDescription" placeholder={task.description} />
                :
                <label id="taskDescription" value={task.description}>{task.name}</label>
                }
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <div class="ui toggle checkbox">
                <input type="checkbox" id="taskCompleted" value={task.completed}  onChange={!task.completed} readonly="" tabindex="0" />
                <label>Completado</label>
            </div>                
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