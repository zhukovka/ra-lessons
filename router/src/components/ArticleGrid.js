import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ArticleGrid extends Component{
  state = {
    articles: [{
      id: "1",
      title: "Hello world",
      content: "Hello react router!"
    }]
  };
  render(){
    let articles = this.state.articles;
    let location = this.props.location;
    if (location.query && location.query.theme) {
      articles = articles.filter(article => article.theme === location.query.theme);
    }
    return (
      <ul>
        {articles.map(article=>{
          return <li key={article.id}><Link to={`/article/${article.id}`}>{article.title}</Link></li>
        })}
      </ul>
    );
  }
};

export default ArticleGrid;
