// /client/src/Tareas.js

import React, { useState, useEffect } from "react";
// SERVICES
import taskService from '../services/taskService';
import TaskCard from "../TaskCard";

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

  const renderProduct = task => {
    return (
      // <li key={task._id} className="list__item task">
      //   <h3 className="task__name">{task.name}</h3>
      //   <p className="task__description">{task.description}</p>
      // </li>
      <TaskCard task={task}></TaskCard>
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
    </div>
  );
}

export default Tareas;