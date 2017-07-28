import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ArticleGrid extends Component{

  render(){
    let {location, articles} = this.props;
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
