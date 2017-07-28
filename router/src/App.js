import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header.js';
import Article from './components/Article.js';
import ArticleGrid from './components/ArticleGrid.js';

class App extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="App">
        <Header data={articles}/>
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
          <Route exact path="/" render={(props) => (
            <ArticleGrid {...props} articles={articles} />
          )}/>
          <Route path="/article/:id" render={(props) => (
            <Article {...props} articles={articles} />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
