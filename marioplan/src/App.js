import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import ProjectDetail from './Components/Projects/ProjectDetil';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import CreateProject from './Components/Projects/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/project/:id" component={ProjectDetail}></Route>
          <Route path="/SignIn" component={SignIn}></Route>
          <Route path="/SignUp" component={SignUp}></Route>
          <Route path="/Create" component={CreateProject}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
