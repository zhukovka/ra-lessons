import React from 'react';
import { Link } from 'react-router-dom';
import Comments from './Comments';
const Article = ({match, articles}) => {
  if(!articles || !articles.length){
    return (
      <div>
        Загрузка
      </div>
    );
  }
  let article;
  if(match.params.id){
    article = articles.find(({id}) => id == match.params.id);
  } else if(articles.length) {
    article = articles[0];
  }
  const {title, author, text, id} = article;
  return (
    <article>
      <Link to="/">Назад ко всем статьям</Link>
      <h2>{title}</h2>
      <address>{author}</address>
      <div>{text}</div>
      <Comments articleId={id} />
    </article>
  );
};

export default Article;
