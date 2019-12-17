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
        let res = await taskService.modify(this.state.task._id, this.state.task.name, this.state.task.description, this.state.task.completed);
      }

    render() {
        const task = this.state.task;
        let modification = false;
        return (
        <Card>
            <Card.Content>
            <Card.Header><Input placeholder={task.name} /></Card.Header>
              <Card.Description>
              <Input placeholder={task.description} />
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <div class="ui toggle checkbox">
                <input type="checkbox" checked={task.completed}  onChange={!task.completed} readonly="" tabindex="0" />
                <label>Completado</label>
                </div>
                
            </Card.Content>
            <Button style={{}}circular icon='save' floated='right' size='small' ></Button>
            <Button style={{}}circular icon='trash' floated='right' size='small' onClick={this.deleteTask}></Button>
          </Card>
            
        )
    }
}

export default TaskCard;