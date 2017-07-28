import React, { Component } from 'react';
import App from './App';
class DataFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
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
    return <App articles={ articles } />;
  }
};
export default DataFetcher;
