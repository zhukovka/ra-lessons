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
    return (
      <ul>
        {this.state.articles.map(article=>{
          return <li key={article.id}><Link to={`/article/${article.id}`}>{article.title}</Link></li>
        })}
      </ul>
    );
  }
};

export default ArticleGrid;
