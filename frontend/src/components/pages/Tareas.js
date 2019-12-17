// /client/src/Tareas.js

import React, { useState, useEffect } from "react";
// SERVICES
import taskService from '../services/taskService';
import TaskCard from "../TaskCard";
import { Grid,Button, Icon  } from 'semantic-ui-react'

function Tareas() {
  const [tasks, settasks] = useState(null);

  useEffect(() => {
    if(!tasks) {
      getTasks();
    }
  })

  const getTasks = async () => {
    let res = await taskService.getAll();
    settasks(res);
  }

  const addTasks = async () => {
    console.log("Epale menol");
    let res = await taskService.add("Nueva Tarea", "Descripción");
    getTasks();
  }

  const renderProduct = task => {
    return (
      // <li key={task._id} className="list__item task">
      //   <h3 className="task__name">{task.name}</h3>
      //   <p className="task__description">{task.description}</p>
      // </li>
      <Grid columns={5} divided >
          
            <Grid.Column>
              <TaskCard task={task}></TaskCard>
            </Grid.Column>
          
      </Grid>
    );
  };

  return (
    <div className="Tareas">
      <ul className="list">
        {(tasks && tasks.length > 0) ? (
          tasks.map(task => renderProduct(task))
        ) : (
          <p>No tasks found</p>
        )}
      </ul>
      <Button style={{position: "fixed", right: 0,bottom: "15%"}}circular icon='add circle' floated='right' size='massive' onClick={addTasks}></Button>
    </div>
  );
}

export default Tareas;