import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderList from './components/OrderList';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Order from './components/Order';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={OrderList}/>
          <Route path={`/orders/:orderId`} component={Order}/>
        </div>
      </Router>
    );
  }
}

export default App;
