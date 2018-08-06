import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch
}   from 'react-router-dom';
import './App.css';
import List from './component/Ls'
import ListContent from './component/ListContent'

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <header  className="App-header">
          <Link to={`/list`}>首页</Link>
          </header>
          <Switch>
          <Route path='/list/:page' component={List}/>
          <Route path='/detail/:id' component={ListContent}/>
          <Route path='/' component={List}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
