import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Article from './components/Article.js';
import ArticleGrid from './components/ArticleGrid.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Добро пожаловать в Журнал «Мурзилка»</h2>
        </div>
        <Switch>
          <Route exact path="/" component={ArticleGrid} />
          <Route path="/article/:id" component={Article} />
        </Switch>
      </div>
    );
  }
}

export default App;
