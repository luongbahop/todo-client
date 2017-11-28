import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from './routes';
import { Home } from './containers';

class App extends Component {

  render() {
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} exact={route.exact} />
        ))}
        <Route component={Home} />
      </Switch>
    );
  }
}
export default App;
