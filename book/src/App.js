import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import store from './store';
import Header from './Header';
import Contain from './Contain'
import Detail from './detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store = { store }>
          <Header/>
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Contain}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
