// /client/src/App.js

import React, { useState, useEffect } from "react";
import 'semantic-ui-css/semantic.min.css'
import LoginForm from "../src/components/forms/LoginForm";
import { Container } from "semantic-ui-react";

function App() {
  // const [tasks, settasks] = useState(null);


  // useEffect(() => {

  // })


  return (
    <div className="App">
      <Container style={{ margin: 20 }}>
        <LoginForm></LoginForm>
      </Container>
    </div>
  );
}

export default App;