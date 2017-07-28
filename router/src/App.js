import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header.js';
import Article from './components/Article.js';
import ArticleGrid from './components/ArticleGrid.js';

class App extends Component {
  state = {
    articles: [{
      id: "1",
      title: "Hello world",
      content: "Hello react router!",
      author: "Kukuruku"
    }]
  };
  render() {
    return (
      <div className="App">
        <Header data={this.state.articles}/>
        <nav>
          <Link to="/">Все</Link>
          <Link
            to={{ pathname: '/', search: '?theme=economy' }}>
            Экономика
          </Link>
          <Link
            to={{ pathname: '/', search: '?theme=entertainment'}}>
            Развлечения
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={ArticleGrid} />
          <Route path="/article/:id" component={Article} />
        </Switch>
      </div>
    );
  }
}

export default App;
