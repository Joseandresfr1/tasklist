// /client/src/Tareas.js

import React, { useState, useEffect } from "react";
// SERVICES
import taskService from '../services/taskService';
import TaskCard from "../TaskCard";
import { Grid,Button } from 'semantic-ui-react'



function Tareas() {
  const [user, setUser] = useState(null);
  const [tasks, settasks] = useState(null);
  const [change,setChange] = useState(null);

  function changeState(value) {
    setChange(value);
    setChange(false);
  }
  useEffect(() => {
    setUser(localStorage.getItem("user"));
    getTasks();
  }, [change,user])

  const getTasks = async () => {
    let res = await taskService.getAll(user);
    settasks(res);
  }

  const addTasks = async () => {
    let res = await taskService.add("Nueva Tarea", "Descripción",user);
    if(res.error){
      alert("Ha ocurrido un error");
    }
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
              <TaskCard task={task} reRender={changeState}></TaskCard>
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
          <p>No tienes tareas aun</p>
        )}
      </ul>
      <Button style={{position: "fixed", right: 0,bottom: "15%"}}circular icon='add circle' floated='right' size='massive' onClick={addTasks}></Button>
    </div>
  );
}

export default Tareas;