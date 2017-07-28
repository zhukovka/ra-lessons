import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header.js';
import Article from './components/Article.js';
import ArticleGrid from './components/ArticleGrid.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }; }
    componentWillMount() {
      const params = {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      };
      fetch('/articles.json', params)
      .then(response => response.json())
      .then(articles => this.setState({ articles }));
    }
    render() {
      const { articles } = this.state;
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
