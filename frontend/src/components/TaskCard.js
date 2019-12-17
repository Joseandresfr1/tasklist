import React, {Component} from 'react';
import { Button, Input, Checkbox, Card } from 'semantic-ui-react'
import taskService from './services/taskService';



class TaskCard extends Component{
    state = {
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

    deleteTask = async () => {
        let res = await taskService.delete(this.state.task._id);
      }

    modifyTask = async () => {
        const task = this.state.task;
        task.name= document.getElementById("taskName").value;
        task.description= document.getElementById("taskDescription").value;
        task.completed= document.getElementById("taskCompleted").value;
        let res = await taskService.modify(task._id,task.name,task.description,task.completed);
      }

    render() {
        const task = this.state.task;
        return (    
        <Card>
            <Card.Content>
            <Card.Header><Input id="taskName" placeholder={task.name} /></Card.Header>
              <Card.Description>
              <Input id="taskDescription" placeholder={task.description} />
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <div class="ui toggle checkbox">
                <input type="checkbox" id="taskCompleted" value={task.completed}  onChange={!task.completed} readonly="" tabindex="0" />
                <label>Completado</label>
            </div>                
            </Card.Content>
            <Button icon='save' floated='right' size='small' onClick={this.modifyTask}></Button>
            <Button style={{}} icon='trash' floated='right' size='small' onClick={this.deleteTask}></Button>
          </Card>
            
        )
    }
}

export default TaskCard;