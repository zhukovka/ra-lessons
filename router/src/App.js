import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import Article from './components/Article.js';
import ArticleGrid from './components/ArticleGrid.js';

class App extends Component {
  state = {
    articles: [{
      id: "1",
      title: "Hello world",
      content: "Hello react router!"
    }]
  };
  render() {
    return (
      <div className="App">
        <Header data={this.state.articles}/>
        <Switch>
          <Route exact path="/" component={ArticleGrid} />
          <Route path="/article/:id" component={Article} />
        </Switch>
      </div>
    );
  }
}

export default App;
