// /client/src/App.js

import React, { useState, useEffect } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Container } from "semantic-ui-react";


import LoginForm from "../src/components/forms/LoginForm";
import RegisterForm from "../src/components/forms/RegisterForm";
import { Grid } from 'semantic-ui-react'

function App() {
  // const [tasks, settasks] = useState(null);


  // useEffect(() => {

  // })

  return (
    <div className="App">
      <p style={{padding: "3%",backgroundColor: "darkslategray",color: "whitesmoke"}}>
        <h1>Tasklist</h1>
        <h3>La mejor forma de organizar tus tareas</h3>
      </p>

      <Container style={{ margin: 20 }}>
        <Grid columns={2} divided >
          <Grid.Row>
            <Grid.Column>
              <RegisterForm></RegisterForm>
            </Grid.Column>
            <Grid.Column>
              <LoginForm></LoginForm>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;