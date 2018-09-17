import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout';
import Auto from './containers/Auto/Auto';
import SingleAuto from './components/SingleAuto/SingleAuto';
import Info from './components/Info/Info';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={Auto}/>
          <Route path='/auto/:id' component={SingleAuto}/>
          <Route path='/info' component={Info}/>
        </Switch>
      </Layout>
    )
  }
}

export default App;
