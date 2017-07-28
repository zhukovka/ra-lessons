import React, {Component} from 'react';
import { withRouter } from 'react-router';
function HeaderComponent({ location, data }) {
  let title = 'Добро пожаловать в Журнал «Мурзилка»';
  const matches = location.pathname.match(/^\/article\/(\d+)\/?$/i);
  if(matches){
    const [, articleId] = matches;
    const article = data.find(
      ({id}) => id == articleId
    );
    if (article) {
      const { author } = article;
      title = `Автор статьи: ${author}`
    }
  }
  return (
    <div>
      <h2>{title}</h2>
    </div>
  ); };
  const Header = withRouter(HeaderComponent);

  export default Header;
