import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import CreateAccount from './components/auth/CreateAccount';
import Projects from './components/projects/Projects';
import ProjectState from './context/project/projectState';
import TaskState from './context/tasks/taskState';

function App() {
  return (
    <ProjectState>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/create-account' component={CreateAccount}/>
            <Route path='/projects' component={Projects}/>        
          </Switch>
        </Router>
      </TaskState>
    </ProjectState>
  );
}

export default App;