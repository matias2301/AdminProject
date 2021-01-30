import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import CreateAccount from './components/auth/CreateAccount';
import Projects from './components/projects/Projects';

import ProjectState from './context/project/projectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';

import tokenAuth from './config/tokenAuth';
import PrivateRoute from './components/HOC/PrivateRoute';

const token = localStorage.getItem('token');
if( token ) tokenAuth(token);

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/create-account' component={CreateAccount}/>
                <PrivateRoute path='/projects' component={Projects}/>        
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;