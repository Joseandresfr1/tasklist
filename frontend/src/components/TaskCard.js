import React, {Component} from 'react';
import { Button, Checkbox, Form, Card } from 'semantic-ui-react'



class TaskCard extends Component{
    state = {
        task:{
            name:'',
            description:''
        }
    }
    componentDidMount(){
        this.setState({
            task: this.props.task
        })
    }
    render() {
        const task = this.state.task;
        return (
        <Card>
            <Card.Content>
            <Card.Header>{task.name}</Card.Header>
              <Card.Description>
                  {task.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <div class="ui toggle checkbox">
                <input type="checkbox"  readonly="" tabindex="0" />
                <label>Completado</label>
                </div>
                
            </Card.Content>
          </Card>
            
        )
    }
}

export default TaskCard;