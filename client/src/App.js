import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import CreateAccount from './components/auth/CreateAccount';
import Projects from './components/projects/Projects'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/create-account' component={CreateAccount}/>
        <Route path='projects' component={Projects}/>        
      </Switch>
    </Router>
  );
}

export default App;